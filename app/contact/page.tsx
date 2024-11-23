
import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
    return (
      <main className="bg-gray-100 ">
        {/* Contact Page Landing - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-300">
          <Header />

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl mt-[180px]">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Get in Touch
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Have a question? Any kind of inquires are welcome.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-nowrap justify-center px-16 pb-16">
            <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 px-12 mt-32">
                {/* Founder tile 1 */}
                <div className="col-span-1 text-left">
                    <div className="border-2 border-gray-200 bg-white rounded-lg p-8 flex flex-col justify-center leading-normal shadow-md">
                        <div className="text-gray-700 text-base">
                            <div className="text-gray-900 font-bold text-xl mb-2 text-center">How do I get access?</div>
                            <p><strong>Step 1: Create Your Account: </strong></p>
                            <p className="mb-4">Visit our Sign-Up Page and provide some basic information to create your free Aspira account. All we need to get started is your name, email address, and a secure password of your choice.</p>
                            <p><strong>Step 2: Verify Your Identity: </strong></p>
                            <p className="mb-4">To ensure the safety of your data and compliance with industry regulations, we'll ask you to verify your identity. This quick process is essential for maintaining a secure and trustworthy platform for all our users.</p>
                            <p><strong>Step 3: Select Your Plan: </strong></p>
                            <p>Explore our Pricing Options and choose the plan that suits your financial goals. Whether you're just starting out or managing complex portfolios, we have a plan tailored to your needs.</p>
                        </div>
                    </div>
                </div>
                {/* Founder tile 1 */}
                <div className="col-span-1 text-left">
                    <div className="border-2 border-gray-200 bg-white rounded-lg p-8 flex flex-col justify-center leading-normal shadow-md">
                        <div className="text-gray-700 text-base"> 
                            <div className="text-gray-900 font-bold text-xl mb-2 text-center">How does it work?</div>
                              <p>
                                <strong>Step 1: Sign Up and Set Your Profile</strong>
                                <ul className="mb-4">
                                  <li className="list-disc">Begin by creating an account on our platform. Provide some basic details, and we’ll guide you through setting up your profile.</li>
                                  <li className="list-disc">Once you’re signed up, customize your dashboard to focus on the financial goals and tools most relevant to you.</li>
                                </ul>
                              </p>
                              <p>
                                <strong>Step 2: Connect Your Accounts</strong>
                                <ul className="mb-4">
                                  <li className="list-disc">Link your financial accounts securely to Aspira. Whether it’s bank accounts, investment portfolios, or payment services, our platform integrates seamlessly with major providers.</li>
                                  <li className="list-disc">Your data is encrypted and protected throughout the process, ensuring the utmost security.</li>
                                </ul>
                              </p>
                              <p>
                                <strong>Step 3: Explore Tools and Features</strong>
                                <ul>
                                  <li className="list-disc">Investment Insights: Access real-time market analysis, automated portfolio tracking, and personalized investment suggestions tailored to your goals.</li>
                                  <li className="list-disc">Financial Planning: Use our smart algorithms to create a financial roadmap. Set targets for saving, spending, or investing, and let Aspira help you stay on track.</li>
                                  <li className="list-disc">Client Management (For Professionals): Simplify client interactions with intuitive tools for tracking performance, generating reports, and managing accounts all in one place.</li>
                                </ul>
                              </p>
                            </div>
                    </div>
                </div>
                {/* Founder Tile 2 */}
                <div className="col-span-1 text-left">
                    <div className="border-2 border-gray-200 bg-white rounded-lg p-8 flex flex-col justify-center leading-normal shadow-md">
                        <div className="text-gray-700 text-base">
                            <div className="text-gray-900 font-bold text-xl mb-2 text-center">General inquiries</div>
                            <p className="text-gray-700 text-base mb-4">Have a question? We're here to help! Whether you're new to Aspira or an existing user looking for assistance, our team is ready to provide the answers and support you need.</p>
                            <p>
                                <strong>Step 3: Explore Tools and Features</strong>
                                <ul>
                                  <li className="list-disc">Account Setup: Need help creating or managing your account? We’ve got you covered.</li>
                                  <li className="list-disc">Platform Features: Want to learn more about our tools and how to make the most of them? Reach out for a personalized overview.</li>
                                  <li className="list-disc">Plan Selection: Unsure which plan suits your needs? Let us guide you through your options.</li>
                                  <li className="list-disc">Billing and Payments: Have questions about payments, invoices, or account updates? Contact our billing team for assistance.</li>
                                </ul>
                              </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 p-16 mx-auto w-1/2">
        <form>
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Contact Us</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Reach out to us with any questions you have</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                <span className="sr-only">First name</span>
              </label>
              <div className="mt-2">
                <input
                  placeholder="First name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                <span className="sr-only">Last name</span>
              </label>
              <div className="mt-2">
                <input
                  placeholder="Last name"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                <span className="sr-only">Email address</span>
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email address"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                <span className="sr-only">Company</span>
              </label>
              <div className="mt-2">
                <input
                  placeholder="Company"
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                <span className="sr-only">Message</span>
              </label>
              <div className="mt-2">
                <textarea
                    id="message"
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Message"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-6 place-self-end">
            <button
                className="rounded-md bg-aspiraPrimary px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Send
            </button>
            </div>
          </div>
        </div>
        </form>

        </section>
        <Footer />
      </main>
    );
  }