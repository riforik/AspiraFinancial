'use client';

import {
  ReceiptRefundIcon,
  UserCircleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Transactions', href: '/dashboard/transactions', icon: ReceiptRefundIcon },
  {
    name: 'Clients',
    href: '/dashboard/clients',
    icon: UserCircleIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] mb-2 grow items-center text-gray-700 justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
    //       <Link className='mt-8 rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row gap-2 items-center'
    //       href={`/dashboard/transactions`}
    //       key={id}
    //     >
    //       <ReceiptRefundIcon className="pointer-events-none h-[18px] w-[18px]" />
    //       Transactions
    //   </Link>
    //   <Link className='rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row gap-2 items-center'
    //       href={`/dashboard/clients`}
    //       key={id}
    //     >
    //       <UserCircleIcon className="pointer-events-none h-[18px] w-[18px]" />
    //       Clients
    //   </Link>
        );
      })}
    </>
  );
}