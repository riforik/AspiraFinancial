
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
import { ContactInputBox, ContactTextArea } from "../ui/contact-forms";

export default function Page() {
    return (
      <main className="bg-gray-100 ">
        {/* Contact Page Landing - section */}

      {/* FAQ */}
      <section className="bg-gray-100 p-16 mx-auto w-1/2 hidden">
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
              className="rounded-md bg-aspiraPrimary px-12 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
              Send
          </button>
          </div>
        </div>
      </div>
      </form>

      </section>
      <section className="relative z-10 overflow-hidden bg-gray-100 py-20 lg:py-[120px]">
        <Header />
        <div className="mt-16 text-gray-700 flex flex-wrap lg:justify-center">
          <div className="flex flex-wrap lg:justify-center p-16">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-aspiraPrimary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold text-black sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Get in Touch
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color ">
                  Have a question? We&apos;re here to help! Whether you&apos;re new to Aspira or an existing user looking for assistance, our team is ready to provide the answers and support you need.
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark ">
                      Headquarters
                    </h4>
                    <p className="text-base text-body-color ">
                      123 Main St. Toronto, ON, M1P 1X8
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark ">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color ">
                      (+555) 555-5555
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark ">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color ">
                      info@aspira.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md font-bold border border-primary bg-aspiraPrimary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <Footer />
      </main>
    );
  }