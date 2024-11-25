import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UserGroupIcon, BanknotesIcon, ReceiptPercentIcon, ShieldCheckIcon, BoltIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import Link from "next/link";
import { ServiceCard } from "../ui/card";

export default function Page() {
    return (
      <main>
        {/* Features and Services Page Landing - section */}
        <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] bg-gray-100">
        <Header />
          <div className="container mx-auto mt-16">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-aspiraPrimary">
                    Features & Services
                  </span>
                  <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-700 sm:text-4xl md:text-[40px]">
                    What We Offer
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                        Powerful Features to Take Control of Your Financial Future.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">Aspira offers a range of intuitive tools designed to simplify your financial management, investment tracking, and client management. With real-time insights, secure transactions, and personalized recommendations, Aspira is your partner in building a brighter financial future.</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
              <ServiceCard
                name="Smart Investment Tools"
                description="Make informed investment decisions with real-time data, market analysis, and automated portfolio tracking."
                icon={BanknotesIcon}
              />
              <ServiceCard
                name="Client Management Dashboard"
                description="Efficiently manage your clients and accounts with a customizable dashboard designed for busy professionals."
                icon={UserGroupIcon}
              />
              <ServiceCard
                name="Automated Financial Planning"
                description="Set your goals, and let Aspira's algorithm guide you toward achieving them with automated, personalized financial planning."
                icon={ReceiptPercentIcon}
              />
              <ServiceCard
                name="Speed Optimized"
                description="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                icon={BoltIcon}
              />
              <ServiceCard
                name="Security & Privacy"
                description="Your data is safeguarded with the highest levels of encryption and privacy protocols, giving you peace of mind."
                icon={ShieldCheckIcon}
              />
              <ServiceCard
                name="Regular Updates"
                description="Continuous improvement on our end means providing you with the best possible resources and tools for client satisfaction."
                icon={ArrowPathIcon}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
