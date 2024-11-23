'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ScaleIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  CheckCircleIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createJob } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import clsx from 'clsx';

export default function Form() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createJob, initialState);

  const [incomeStatement, setincomeStatement] = useState("");
  const [balanceSheet, setBalanceSheet] = useState("");
  const [cashFlowStatement, setCashFlowStatement] = useState("");

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "incomeStatement":
        setincomeStatement(event.target.value);
        break;
      case "balanceSheet":
        setBalanceSheet(event.target.value);
        break;
      case "cashFlowStatement":
        setCashFlowStatement(event.target.value);
        break;
    }
  };

  return (
    <form action={dispatch}>
        <h1 className='text-xl font-bold text-black mb-4'>Upload Files</h1>
        {/* Income Statement */}
        <div className="mb-4">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="incomeStatement" 
              className={clsx(
                'flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-200 hover:border-gray-400',
                {'border-[#507FF4]': incomeStatement},
                {'border-gray-300': !incomeStatement})}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {!incomeStatement && 
                    <CloudArrowUpIcon  className="w-8 h-8 mb-4 text-gray-600" aria-hidden="true"/>
                  }
                  {incomeStatement && 
                    <CheckCircleIcon  className="w-8 h-8 mb-4 text-aspiraPrimary" aria-hidden="true"/>
                  }
                    <p className="mb-2 text-sm text-gray-600">Click to upload <span className="font-semibold">Income Statement</span> or drag and drop</p>
                    {!incomeStatement &&
                      <p className="text-xs text-gray-600">Supported file Type: .XLSX</p>
                    }
                    {incomeStatement &&
                      <p className="text-xs text-gray-600">Income Statement uploaded!</p>
                    }
                </div>
                <input id="incomeStatement" type="file" className="hidden" name='incomeStatement' accept='.xlsx' required onChange={handleChange}/>
            </label>
          </div>

          {/* <div id="incomeSatement-error" aria-live="polite" aria-atomic="true">
            {state.errors?.incomeStatement &&
              state.errors.incomeStatement.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        {/* Balance Sheet */}
        <div className="mb-4">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="balanceSheet" 
              className={clsx(
                'flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 hover:border-gray-400',
                {'border-[#507FF4]': balanceSheet},
                {'border-gray-300': !balanceSheet})}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {!balanceSheet && 
                    <CloudArrowUpIcon  className="w-8 h-8 mb-4 text-gray-600" aria-hidden="true"/>
                  }
                  {balanceSheet && 
                    <CheckCircleIcon  className="w-8 h-8 mb-4 text-aspiraPrimary" aria-hidden="true"/>
                  }
                    <p className="mb-2 text-sm text-gray-600">Click to upload <span className="font-semibold">Balance Sheet</span> or drag and drop</p>
                    {!balanceSheet &&
                      <p className="text-xs text-gray-600">Supported file Type: .XLSX</p>
                    }
                    {balanceSheet &&
                      <p className="text-xs text-gray-600">Balance Sheet uploaded!</p>
                    }
                </div>
                <input id="balanceSheet" type="file" className="hidden" name='balanceSheet' accept='.xlsx' required onChange={handleChange}/>
            </label>
          </div>

          {/* <div id="incomeSatement-error" aria-live="polite" aria-atomic="true">
            {state.errors?.balanceSheet &&
              state.errors.balanceSheet.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        {/* Cashflow Statement */}
        <div className="mb-4">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="cashFlowStatement" 
              className={clsx(
                'flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 hover:border-gray-400',
                {'border-[#507FF4]': cashFlowStatement},
                {'border-gray-300': !cashFlowStatement})}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {!cashFlowStatement && 
                    <CloudArrowUpIcon  className="w-8 h-8 mb-4 text-gray-600" aria-hidden="true"/>
                  }
                  {cashFlowStatement && 
                    <CheckCircleIcon  className="w-8 h-8 mb-4 text-aspiraPrimary" aria-hidden="true"/>
                  }
                    <p className="mb-2 text-sm text-gray-600">Click to upload <span className="font-semibold">Cash Flow Statement</span> or drag and drop</p>
                    {!cashFlowStatement &&
                      <p className="text-xs text-gray-600">Supported file Type: .XLSX</p>
                    }
                    {cashFlowStatement &&
                      <p className="text-xs text-gray-600">Cash Flow Statement uploaded!</p>
                    }
                </div>
                <input id="cashFlowStatement" type="file" className="hidden" name='cashFlowStatement' accept='.xlsx' required onChange={handleChange}/>
            </label>
          </div>

          {/* <div id="incomeSatement-error" aria-live="polite" aria-atomic="true">
            {state.errors?.balanceSheet &&
              state.errors.balanceSheet.map((error: any) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
        </div>

        <h2 className='text-xl font-bold text-black mb-4'>Thesis Statement</h2>
        <div className="sm:col-span-6">
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            <span className="sr-only">Write your thesis statement here...</span>
          </label>
          <div className="mt-2">
            <textarea
                required
                id="message"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-72"
                placeholder="Write your thesis statement here..."
            ></textarea>
          </div>
        </div>
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Job</Button>
      </div>
    </form>
  );
}