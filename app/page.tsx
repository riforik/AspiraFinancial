"use client";
import Image from "next/image";
import { useState } from 'react'
import { BoltIcon, ChartBarIcon, ChartBarSquareIcon, LightBulbIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import UnderConstruction from "./under-construction";
import { IsUnderConstruction } from '@/app/lib/definitions';
import {Card, CardTile} from "@/app/ui/card";

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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Working With Aspira - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-100 p-16">
          <div className="flex justify-center mb-8">
            <div className="text-black text-center">
              <h2 className="text-2xl font-semibold mb-4">Discover How Aspira Can Work for You</h2>
              <p className="mb-2 max-w-4xl">At Aspira, we believe in making finance smarter, more intuitive, and accessible for everyone. Our team of passionate innovators is dedicated to providing cutting-edge technology solutions that empower individuals to take control of their financial futures.</p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 md:px-12">
            <Card 
              name={'Smart Investment Tools'} 
              description={'Make informed investment decisions with real-time data, market analysis, and automated portfolio tracking.'}
              icon={LightBulbIcon}
              >
            </Card>
            <Card 
              name={'Powerful Features to Take Control of Your Financial Future'} 
              description={'Aspira offers a range of intuitive tools designed to simplify your financial management, investment tracking, and client management. With real-time insights, secure transactions, and personalized recommendations, Aspira is your partner in building a brighter financial future.'}
              icon={BoltIcon}
              >
            </Card>
            <Card 
              name={'Client Management Dashboard'} 
              description={'Efficiently manage your clients and accounts with a customizable dashboard designed for busy professionals.'}
              icon={ChartBarSquareIcon}
              >
            </Card>
          </div>
        </section>
        {/* Security is key - section */}
        <section className="bg-gray-100 border-b border-2 border-gray-300 flex-nowrap justify-center p-16">
          <div className="flex justify-center mb-8">
            <div className="text-black mb-12 text-center">
              <h2 className="flex items-center justify-center text-2xl font-semibold text-black">
                <ShieldCheckIcon className="h-12 w-12 text-aspiraPrimary"/>
                &nbsp; Security & Privacy: Your Data, Our Priority
              </h2>
              <p className="max-w-4xl">At Aspira, we take your privacy and security seriously. As a financial tech startup, we understand the importance of safeguarding sensitive information. That&apos;s why we&apos;ve implemented state-of-the-art security protocols to ensure your data is protected at every level.</p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 md:px-12">
            <CardTile 
              name={'Advanced Encryption'} 
              description={'All your personal and financial data is encrypted using industry-leading technology, ensuring that it is safe from unauthorized access. Our platform uses 256-bit AES encryption for all communications, making sure that your information remains private and secure at all times.'}
              >
            </CardTile>
            <CardTile 
              name={'Data Privacy Commitment'} 
              description={'We respect your privacy and are committed to transparency. Your personal information will never be shared with third parties without your explicit consent. We operate under strict privacy policies, in line with global data protection regulations, such as GDPR, to ensure that your data remains confidential.'}
              >
            </CardTile>
            <CardTile 
              name={'Continuous Monitoring & Threat Detection'} 
              description={'Our systems are continuously monitored for any suspicious activities or potential threats. We employ advanced threat detection technologies to identify and neutralize any security risks before they can affect you.'}
              >
            </CardTile>
          </div>
        </section>
        {/* Aspira is Proven and Trusted - section */}
        <section className="overflow-hidden bg-gray-100 border-b border-2 border-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-aspiraPrimary">Why Aspira?</h2>
                  <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Aspira is Proven and Trusted
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    Your satisfaction is our priority. Our dedicated support team is available to assist you whenever you need help, ensuring a smooth and stress-free experience.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  <Card 
                    name={'Advanced Security Protocols'} 
                    description={'Your data is protected with state-of-the-art encryption, multi-factor authentication, and continuous threat monitoring.'}
                    icon={ChartBarSquareIcon}
                    >
                  </Card>
                  <Card 
                    name={'Transparent Practices'} 
                    description={'We believe in complete transparency when it comes to your data and our services. Aspira adheres to strict privacy regulations and never shares your information without your explicit consent.'}
                    icon={ChartBarSquareIcon}
                    >
                  </Card>
                  <Card 
                    name={'Proven Expertise'} 
                    description={'Our team of financial and technology experts is dedicated to building tools that work seamlessly and reliably.'}
                    icon={ChartBarSquareIcon}
                    >
                  </Card>
                  </dl>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src="https://isaiahrobinson.ca/assets/img/Aspira-dashboard-showcase-01.png"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </section>

        <Footer />
    </main>
  )
}
