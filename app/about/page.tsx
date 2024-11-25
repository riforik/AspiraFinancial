import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Image from "next/image";
import { inter } from '@/app/ui/fonts';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, LightBulbIcon, XMarkIcon, ShieldCheckIcon, TrophyIcon, MapIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import AspiraLogo from '@/app/ui/aspira-logo';
import Link from "next/link";
import {Card, CardTile} from "@/app/ui/card";

export default function Page() {
    return (
      <main>
        {/* About Page Landing - section */}
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gray-100 ">
          <Header />
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://i.ibb.co/rfHFq15/image-2.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <span className="block mb-4 text-lg font-semibold text-aspiraPrimary">
                    About Us
                  </span>
                  <h1 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                    Make your customers happy by giving services.
                  </h1>
                  <p className="mb-5 text-base text-gray-700">
                    At Aspira, we believe in making finance smarter, more intuitive, and accessible 
                    for everyone. Our team of passionate innovators is dedicated to providing 
                    cutting-edge technology solutions that empower individuals to take control 
                    of their financial futures.
                  </p>
                  <h2 className="flex items-center text-2xl font-semibold flex-wrap text-black">
                    <MapIcon className="h-12 w-12 text-aspiraPrimary"/>
                    &nbsp; Mission Statement
                  </h2>
                  <p className="max-w-3xl text-gray-700 mb-8">To revolutionize the financial landscape by creating innovative tools that simplify wealth management, foster smarter investments, and drive financial empowerment for all.</p>
                  <Link
                  key="register"
                  href="/register"
                  className="rounded-md bg-aspiraPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started Today
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 border-b border-1 border-gray-300 flex-nowrap justify-center p-16">
          <div className="flex justify-center mb-8">
            <div className="text-black mb-12 text-center">
              <h2 className="flex items-center justify-center text-2xl font-semibold sm:flex-wrap">
                <TrophyIcon className="h-12 w-12 text-aspiraPrimary"/>
                &nbsp; Our Vision & Values
              </h2>
              <p className="max-w-3xl">Our vision is to be the most trusted platform for individuals looking to unlock their financial potential through seamless technology and expert guidance.</p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 md:px-12">
            {/* Innovation */}
            <Card 
              name={'Innovation'} 
              description={'We strive to stay ahead of the curve with pioneering tech and forward-thinking solutions.'}
              icon={LightBulbIcon}
              >
            </Card>
            {/* Integrity */}
            <Card 
              name={'Integrity'} 
              description={'We believe in transparency, security, and accountability in all our operations.'}
              icon={ScaleIcon}
              >
            </Card>
            {/* Accessibility */}
            <Card 
              name={'Accessibility'} 
              description={'Our platform is designed for everyone, no matter their financial background or experience.'}
              icon={ScaleIcon}
              >
            </Card>
          </div>
        </section>

        <Footer />
      </main>
    );
  }