import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UserGroupIcon, BanknotesIcon, ReceiptPercentIcon, ShieldCheckIcon, CheckIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import Link from "next/link";
const tiers = [
    {
      name: 'Professional Plan',
      id: 'tier-professional',
      href: '/register',
      priceMonthly: '$79',
      description: "Access essential features for individuals looking to start their financial journey plus advanced tools for investors and financial planners.",
      features: ['Up to 100 team members', 'Up to 1,000 manageable clients', 'Advanced analytics', '24-hour support response time'],
      featured: false,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '/register',
      priceMonthly: '$249',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited team members',
        'Unlimited manageable clients',
        'Advanced analytics',
        'Dedicated support representative',
        'Marketing automations',
        'Custom integrations',
      ],
      featured: true,
    },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  

export default function Page() {
    return (
      <main>
        {/* Pricing Page Landing - section */}
        <section className="bg-gray-100">
          <Header />

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl pt-48 pb-24">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Pricing
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 mb-6 font-bold">
                    Choose the Plan That Fits Your Needs.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Flexible, transparent pricing with no hidden fees. Pick the plan that&apos;s right for you.</p>
              </div>
            </div>
          
            <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 pb-48">
                {tiers.map((tier, tierIdx) => (
                <div
                    key={tier.id}
                    className={classNames(
                    tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                    tier.featured
                        ? ''
                        : tierIdx === 0
                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                        : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                    'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                    )}
                >
                    <h3
                    id={tier.id}
                    className={classNames(tier.featured ? 'text-aspiraPrimary' : 'text-aspiraPrimary', 'text-base/7 font-semibold')}
                    >
                    {tier.name}
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                    <span
                        className={classNames(
                        tier.featured ? 'text-white' : 'text-gray-900',
                        'text-5xl font-semibold tracking-tight',
                        )}
                    >
                        {tier.priceMonthly}
                    </span>
                    <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                    </p>
                    <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
                    {tier.description}
                    </p>
                    <ul
                    role="list"
                    className={classNames(
                        tier.featured ? 'text-gray-300' : 'text-gray-600',
                        'mt-8 space-y-3 text-sm/6 sm:mt-10',
                    )}
                    >
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                            aria-hidden="true"
                            className={classNames(tier.featured ? 'text-aspiraPrimary' : 'text-aspiraPrimary', 'h-6 w-5 flex-none')}
                        />
                        {feature}
                        </li>
                    ))}
                    </ul>
                    <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                        tier.featured
                        ? 'bg-aspiraPrimary text-white shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline-blue-700' 
                        : 'text-aspiraPrimary ring-2 ring-inset ring-aspiraPrimary hover:ring-aspiraPrimaryHover focus-visible:outline-blue-700',
                        'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                    )}
                    >
                    Get started today
                    </a>
                </div>
                ))}
            </div>
        </div>
        </section>

        <Footer />
      </main>
    );
  }