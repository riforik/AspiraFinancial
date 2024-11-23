'use client';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton
} from '@/app/ui/skeletons';
import Link from 'next/link';
import Image from 'next/image'
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default async function Page() {

  const date = new Date().toISOString().split('T')[0];

  return (
    <div className='flex justify-center items-center'>
      <h1 className={`mb-4 text-xl md:text-2xl text-black hidden`}>
        Report
      </h1>
      <div className="grid grid-cols-1 w-full">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
      </div>
    </div>
  );
}