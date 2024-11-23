"use client";
import Image from "next/image";
import { useState } from 'react'
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import UnderConstruction from "./under-construction";
import { IsUnderConstruction } from '@/app/lib/definitions';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return  (
    <main>
      
        {/* Home Page Landing - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-300">

          <Header />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Empowering Your Financial Journey
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Aspira transforms the way you manage, invest, and grow your wealth, making financial freedom accessible to everyone.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    key="register"
                    href="/register"
                    className="rounded-md bg-aspiraPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get Started Today
                  </Link>
                  {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
            {/* <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div> */}
          </div>
        </section>
        {/* Working With Aspira - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-100 p-16">
          <div className="flex justify-center mb-8">
            <div className="text-black ml-12 text-center">
              <h2 className="text-2xl font-semibold mb-4">Discover How Aspira Can Work for You</h2>
              <p className="mb-2 max-w-4xl">At Aspira, we believe in making finance smarter, more intuitive, and accessible for everyone. Our team of passionate innovators is dedicated to providing cutting-edge technology solutions that empower individuals to take control of their financial futures.</p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 px-12">
            {/* Card One */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Smart Investment Tools</div>
                  <p className="text-gray-700 text-base">Make informed investment decisions with real-time data, market analysis, and automated portfolio tracking.</p>
                </div>
              </div>
            {/* Card Two */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Powerful Features to Take Control of Your Financial Future</div>
                  <p className="text-gray-700 text-base">Aspira offers a range of intuitive tools designed to simplify your financial management, investment tracking, and client management. With real-time insights, secure transactions, and personalized recommendations, Aspira is your partner in building a brighter financial future.</p>
                </div>
              </div>
            {/* Card Three */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Client Management Dashboard</div>
                  <p className="text-gray-700 text-base">Efficiently manage your clients and accounts with a customizable dashboard designed for busy professionals.</p>
                </div>
                {/* <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div> */}
              </div>
          </div>
        </section>
        {/* Security is key - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-300 flex-nowrap justify-center p-16">
          <div className="flex justify-center mb-8">
            <div className="text-black mb-12 text-center">
              <h2 className="flex items-center justify-center text-2xl font-semibold text-black">
                <ShieldCheckIcon className="h-12 w-12 text-black"/>
                &nbsp; Security & Privacy: Your Data, Our Priority
              </h2>
              <p className="max-w-4xl">At Aspira, we take your privacy and security seriously. As a financial tech startup, we understand the importance of safeguarding sensitive information. That's why we've implemented state-of-the-art security protocols to ensure your data is protected at every level.</p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 px-12">
            {/* Card One */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Advanced Encryption</div>
                  <p className="text-gray-700 text-base">All your personal and financial data is encrypted using industry-leading technology, ensuring that it is safe from unauthorized access. Our platform uses 256-bit AES encryption for all communications, making sure that your information remains private and secure at all times.</p>
                </div>
                {/* <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div> */}
              </div>
            {/* Card Two */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Data Privacy Commitment</div>
                  <p className="text-gray-700 text-base">We respect your privacy and are committed to transparency. Your personal information will never be shared with third parties without your explicit consent. We operate under strict privacy policies, in line with global data protection regulations, such as GDPR, to ensure that your data remains confidential.</p>
                </div>
              </div>
            {/* Card Three */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Continuous Monitoring & Threat Detection</div>
                  <p className="text-gray-700 text-base">Our systems are continuously monitored for any suspicious activities or potential threats. We employ advanced threat detection technologies to identify and neutralize any security risks before they can affect you.</p>
                </div>
              </div>
          </div>
        </section>
        {/* Aspira is Proven and Trusted - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-200 flex-nowrap justify-center p-16">
          <div className="flex justify-center mb-16">
            <h2 className="flex items-center text-2xl font-semibold text-black">
              {/* <ShieldCheckIcon className="h-12 w-12 text-black"/> */}
              &nbsp; Aspira is Proven and Trusted
            </h2>
          </div>
          {/* Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12">
            {/* Card One */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Advanced Security Protocols</div>
                  <p className="text-gray-700 text-base">Your data is protected with state-of-the-art encryption, multi-factor authentication, and continuous threat monitoring. With Aspira, you can trust that your sensitive information and transactions are safe at every level.</p>
                </div>
            </div>
            {/* Card Two */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Transparent Practices</div>
                  <p className="text-gray-700 text-base">We believe in complete transparency when it comes to your data and our services. Aspira adheres to strict privacy regulations and never shares your information without your explicit consent.</p>
                </div>
            </div>
            {/* Card Three */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Proven Expertise</div>
                  <p className="text-gray-700 text-base">Our team of financial and technology experts is dedicated to building tools that work seamlessly and reliably. Thousands of users trust Aspira to simplify and enhance their financial management experience.</p>
                </div>
            </div>
            {/* Card Four */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">Outstanding Customer Support</div>
                  <p className="text-gray-700 text-base">Your satisfaction is our priority. Our dedicated support team is available to assist you whenever you need help, ensuring a smooth and stress-free experience.</p>
                </div>
            </div>
          </div>
        </section>

        <Footer />
    </main>
  )
}
