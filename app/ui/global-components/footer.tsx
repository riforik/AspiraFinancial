"use client";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SocialLinks from "./social-links";

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Community', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Pricing', href: '#' },
  ]

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
     
    <footer className="bg-white">
    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <div className="flex justify-between">
        <div>
          <div className="">
            <a href="#" className="">
              <span className="sr-only">Aspira Logo</span>
              <AspiraLogo/>
            </a>
          </div>

          {/* <p className="mt-4 max-w-xs text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
            molestias.
          </p> */}

          <SocialLinks />
        </div>

        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"> */}
          {/* Services */}
          {/* <div>
            <p className="font-medium text-gray-900">Services</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
              </li>
            </ul>
          </div> */}
          {/* Company */}
          {/* <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
              </li>
            </ul>
          </div> */}
          {/* Helpful Links */}
          {/* <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
              </li>
            </ul>
          </div> */}
          {/* Legal */}
          {/* <div>
            <p className="font-medium text-gray-900">Legal</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
              </li>

              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75"> Hiring Statistics </a>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
         {/* Card One */}
        <div className="w-1/2 border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
            <div className="">
              <div className="text-gray-900 font-bold text-l mb-2">Join the Aspira Community</div>
              <p className="text-gray-700 text-base">Receive updates and news from us at Aspira</p>
            </div>
            {/* <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div> */}
            <div className="flex gap-8 mt-2">
              <div className="w-2/3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  <span className="sr-only">Email address</span>
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <Link
                key="register"
                href="/register"
                className="w-1/3 rounded-md bg-aspiraPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Stay Updated
                </Link>
            </div>
            
        </div>
      </div>

      {/* <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p> */}
    </div>
  </footer>
  );
}