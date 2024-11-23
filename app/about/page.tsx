import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, LightBulbIcon, XMarkIcon, ShieldCheckIcon, TrophyIcon, MapIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import Link from "next/link";

export default function Page() {
    return (
      <main>
        {/* About Page Landing - section */}
        <section className="bg-gray-100 border-b border-1 border-gray-300">
          <Header />

          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  About Us
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At Aspira, we believe in making finance smarter, more intuitive, and accessible for everyone. Our team of passionate innovators is dedicated to providing cutting-edge technology solutions that empower individuals to take control of their financial futures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What do we do at Aspira? - section */}
        <section className="bg-gray-100 border-b border-1 border-gray-300 p-16">
          {/* Section Description & Card */}
          <div className="flex justify-center">
            <div className="text-black text-center">
              <h2 className="flex items-center justify-center text-2xl font-semibold text-black">
                <MapIcon className="h-12 w-12 text-black"/>
                &nbsp; Mission Statement
              </h2>
              <p className="max-w-3xl">To revolutionize the financial landscape by creating innovative tools that simplify wealth management, foster smarter investments, and drive financial empowerment for all.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 border-b border-1 border-gray-300 flex-nowrap justify-center p-16">
          <div className="flex justify-center mb-8">
            <div className="text-black mb-12 text-center">
              <h2 className="flex items-center justify-center text-2xl font-semibold text-black">
                <TrophyIcon className="h-12 w-12 text-black"/>
                &nbsp; Our Vision & Values
              </h2>
              <p className="max-w-3xl">Our vision is to be the most trusted platform for individuals looking to unlock their financial potential through seamless technology and expert guidance.</p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 px-12">
            {/* Innovation */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
              <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                <LightBulbIcon className="h-8 w-8 text-black"/>
                &nbsp; Innovation
              </h3>
              <p className="text-gray-700 text-base">We strive to stay ahead of the curve with pioneering tech and forward-thinking solutions.</p>
            </div>
            {/* Integrity */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
              <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                <ScaleIcon className="h-8 w-8 text-black"/>
                &nbsp; Integrity
              </h3>
              <p className="text-gray-700 text-base">We believe in transparency, security, and accountability in all our operations.</p>
            </div>
            {/* Accessibility */}
            <div className="border-2 border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md">
                <h3 className="flex items-center text-gray-900 font-bold text-xl mb-2">
                  <UserGroupIcon className="h-8 w-8 text-black"/>
                  &nbsp; Accessibility
                </h3>
                <p className="text-gray-700 text-base">Our platform is designed for everyone, no matter their financial background or experience.</p>
              </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }