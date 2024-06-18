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


        {/* Download mock PDF */}
        {/* <div className="grid grid-cols-2 gap-12 px-12">
            <div className="p-8 border border-gray-300 bg-white rounded-3xl flex flex-col justify-center leading-normal col-span-2">
                <div>
                  <div className="text-gray-900 flex flex-row justify-between p-8 pl-0">
                    <span className='text-xl'>Report</span>
                    <a className='flex flex-wrap gap-2 items-center justify-center rounded-md bg-equitaryPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-equitaryPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        key="reportDownload"
                        href='data:application/xml;charset=utf-8,../../../public/download/EquitaryDueDilligenceTemplate.pptx'
                        download='DDReport.ppt'
                        target='_blank'
                    >
                        Download
                        <ArrowDownTrayIcon className="pointer-events-none h-[18px] w-[18px]" />
                    </a>
                  </div>
                  <div className='flex flex-nowrap items-center gap-8 p-8 bg-gray-100 rounded-3xl'>
                    <Image
                        src="/PDF-icon.svg"
                        width={125}
                        height={42}
                        alt="Download your due dillegence report"
                    />
                    <p className="text-gray-700 text-base">
                        <span className='font-medium'>Equitary Due Diligence Sample Report Name</span> <br />
                        <span>PDF File | Generated by Equitary.ai {date} </span>
                    </p>
                  </div>
                </div>
              </div>
        </div> */}
      </div>
    </div>
  );
}