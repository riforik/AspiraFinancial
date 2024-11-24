'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema2 = z.object({
  id: z.string(),
  incomeStatement: z.any({
    invalid_type_error: 'Please select an income statement.',
  }),
  balanceSheet: z.any({
    invalid_type_error: 'Please select a balance sheet.',
  }),
  cashFlowStatement: z.any({
    invalid_type_error: 'Please select a cash flow statement.',
  }),
  date: z.string(),
});

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

export type State2 = {
  errors?: {
    incomeStatement?: any[];
    balanceSheet?: any[];
    cashFlowStatement?: any[];
  };
  message?: string | null;
};

const CreateJob = FormSchema2.omit({ id: true, date: true });

export async function createJob(prevState: State2, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateJob.safeParse({
    incomeStatement: formData.get('incomeStatement'),
    balanceSheet: formData.get('balanceSheet'),
    cashFlowStatement: formData.get('cashFlowStatement'),
  });
  
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Job.',
    };
  }
  

  // Prepare data for insertion into the database
  const { incomeStatement, balanceSheet, cashFlowStatement } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  const encodedIncomeStatement = encodeURIComponent(incomeStatement.name);
  const encodedBalanceSheet = encodeURIComponent(balanceSheet.name);
  const encodedCfStatement = encodeURIComponent(cashFlowStatement.name);

  revalidatePath(`/dashboard/due-diligence-report?income_statement=${encodedIncomeStatement}&balance_sheet=${encodedBalanceSheet}&cf_statement=${encodedCfStatement}`);
  redirect(`/dashboard/due-diligence-report?income_statement=${encodedIncomeStatement}&balance_sheet=${encodedBalanceSheet}&cf_statement=${encodedCfStatement}`);
  
  // Insert data into the database
  // try {
  //   await sql`
  //     INSERT INTO jobs (customer_id, amount, status, date)
  //     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  //   `;
  // } catch (error) {
  //   // If a database error occurs, return a more specific error.
  //   return {
  //     message: 'Database Error: Failed to Create Job.',
  //   };
  // }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath('/dashboard/');
  // redirect('/dashboard/');
}



const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ date: true, id: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Transaction.',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Transaction.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/transactions');
  redirect('/dashboard/transactions');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/transactions');
  redirect('/dashboard/transactions');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/transactions');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}