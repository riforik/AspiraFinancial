import { Suspense } from 'react';
import { randomUUID } from 'crypto';
import Link from 'next/link';
import { PlusIcon } from "@heroicons/react/24/outline";
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { CardsSkeleton, RevenueChartSkeleton, LatestInvoicesSkeleton } from '@/app/ui/skeletons';

export default function Dashboard() {
    let id = randomUUID();
    return (
      <main className="bg-gray-100">
        <div className="relative mx-auto flex w-full max-w-[300px] flex-col space-y-2.5 p-4 text-black text-center overflow-scroll">
          <h1 className='text-4xl font-bold'>Hello!</h1>
          <p className='text-gray-500'>Welcome to your dashboard</p>
          <Link className='flex flex-wrap gap-2 items-center justify-center rounded-md bg-aspiraPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            href={`/dashboard/jobs/${id}`}
            key={id}
          >
            <PlusIcon className="pointer-events-none h-[18px] w-[18px]" />
            New Job
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
      </main>
    );
  }