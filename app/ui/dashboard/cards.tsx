import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { inter } from '@/app/ui/fonts';
  import { fetchCardData } from '@/app/lib/data';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {
    const {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices,
    } = await fetchCardData();
  
    return (
      <>
        <Card title="Average Gain - 24h" value={totalPaidInvoices} type="collected" />
        <Card title="Pending Transactions" value={totalPendingInvoices} type="pending" />
        <Card title="Total Transactions" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Clients"
          value={numberOfCustomers}
          type="customers"
        />
      </>
    );
  }
  
  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium text-gray-700">{title}</h3>
        </div>
        <p
          className={`${inter.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl text-gray-700`}
        >
          {value}
        </p>
      </div>
    );
  }