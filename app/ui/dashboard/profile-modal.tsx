'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ProfileModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button className="mt-2 flex flex-wrap gap-2 items-center justify-start w-full text-gray-500 hover:text-gray-700"
          onClick={handleClickOpen}
          key="User">
            <UserCircleIcon className="pointer-events-none h-[24px] w-[24px]"/>
            PartnerAccess
        </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          onClick={handleClose}
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg md:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-aspiraPrimary sm:mx-0 sm:size-10">
                    <UserIcon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                    <DialogTitle as="h3" className="text-2xl font-semibold text-gray-900">
                      Partner Access's Profile
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please review and confirm the following details about your account.
                      </p>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mt-2'>
                      <div className="p-2 rounded-md border-2 overflow-hidden">
                        <p className="text-sm text-gray-500">
                          <span className='font-bold'>First Name</span><br />
                          Partner
                        </p>
                      </div>
                      <div className="p-2 rounded-md border-2 overflow-hidden">
                        <p className="text-sm text-gray-500">
                          <span className='font-bold'>Last Name</span><br />
                          Access
                        </p>
                      </div>
                      <div className="p-2 rounded-md border-2 overflow-hidden">
                        <p className="text-sm text-gray-500">
                          <span className='font-bold'>E-mail</span><br />
                          partnerAccess@aspira.com
                        </p>
                      </div>
                      <div className="p-2 rounded-md border-2 overflow-hidden">
                        <p className="text-sm text-gray-500">
                          <span className='font-bold'>Password</span><br />
                          1****6
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500">
                          <span className='font-bold'>Account Created:</span> June 3, 2024 @ 4:01 PM.
                        
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                {/* <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button> */}
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  )
}
