import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UserGroupIcon, BanknotesIcon, ReceiptPercentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import Link from "next/link";

export default function Page() {
    return (
      <main>
        {/* Features and Services Page Landing - section */}
        <section className="bg-gray-100">
          <Header />

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Features & Services
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                    Powerful Features to Take Control of Your Financial Future.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Aspira offers a range of intuitive tools designed to simplify your financial management, investment tracking, and client management. With real-time insights, secure transactions, and personalized recommendations, Aspira is your partner in building a brighter financial future.</p>
              </div>
            </div>
          </div>
          {/* Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-12">
            {/* Innovation */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
              <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                <BanknotesIcon className="h-8 w-8 text-black"/>
                &nbsp; Smart Investment Tools
              </h3>
              <p className="text-gray-700 text-base">Make informed investment decisions with real-time data, market analysis, and automated portfolio tracking.</p>
            </div>
            {/* Integrity */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
              <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                <UserGroupIcon className="h-8 w-8 text-black"/>
                &nbsp; Client Management Dashboard
              </h3>
              <p className="text-gray-700 text-base">Efficiently manage your clients and accounts with a customizable dashboard designed for busy professionals.</p>
            </div>
            {/* Accessibility */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                  <ReceiptPercentIcon className="h-8 w-8 text-black"/>
                  &nbsp; Automated Financial Planning
                </h3>
                <p className="text-gray-700 text-base">Set your goals, and let Aspira's algorithm guide you toward achieving them with automated, personalized financial planning.</p>
            </div>
            {/* Accessibility */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                  <ShieldCheckIcon className="h-8 w-8 text-black"/>
                  &nbsp; Security & Privacy
                </h3>
                <p className="text-gray-700 text-base">Your data is safeguarded with the highest levels of encryption and privacy protocols, giving you peace of mind.</p>
            </div>
          </div>
          
        </section>

        <Footer />
      </main>
    );
  }