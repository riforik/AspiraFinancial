import { Suspense } from 'react';
import { randomUUID } from 'crypto';
import Link from 'next/link';
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
    let id = randomUUID();
    return (
      <div className="flex items-center justify-center bg-gray-100">
        <div className="relative mx-auto flex w-full max-w-[300px] flex-col space-y-2.5 p-4 md:-mt-32 text-black text-center">
          <h1 className='text-xl font-bold'>Hello!</h1>
          <p className='text-gray-500'>Welcome to your dashboard</p>
          <Link className='flex flex-wrap gap-2 items-center justify-center rounded-md bg-aspiraPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            href={`/dashboard/jobs/${id}`}
            key={id}
          >
            <PlusIcon className="pointer-events-none h-[18px] w-[18px]" />
            New Job
          </Link>
        </div>
      </div>
    );
  }