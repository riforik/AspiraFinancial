"use client";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function MinimalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-none">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link
                href='/'
                className="-m-1.5 p-1.5"
                >
                <span className="sr-only">Aspira Logo</span>
                <AspiraLogo/>
                </Link>
            </div>
        </nav>
    </header>
  );
}