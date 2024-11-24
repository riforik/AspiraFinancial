'use client';

import { authenticate } from '@/app/lib/actions';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import SocialLinks from './global-components/social-links';
import Header from './global-components/header';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <section className="max-w-[320px] text-center flex-nowrap justify-center items-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Log in to view your dashboard
        </h1>
        <p className="text-slate-500 mt-4">
          Look out for updates on our socials
        </p>
        <SocialLinks />

        <div className=" tracking-tight text-gray-900 flex gap-2">
          <form action={dispatch} className="space-y-3 w-full">
            <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
              <div className="w-full">
                <div>
                  <label
                    className="mb-3 mt-5 block text-gray-900 font-bold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
                      id="email"
                      type="email"
                      name="email"
                      defaultValue="partnerAccess@aspira.com"
                      placeholder="Enter your email address"
                      required
                    />
                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    className="mb-3 mt-5 block text-gray-900 font-bold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                      minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
              </div>
              <LoginButton />
              <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                {errorMessage && (
                  <>
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </form>
          {/* <Link
            key="login"
            href="/login"
            className="rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-aspiraPrimaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
          </Link> */}

          {/* <LoginButton /> */}
          {/* <LoginAccessButton /> */}
        </div>
      </section>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}