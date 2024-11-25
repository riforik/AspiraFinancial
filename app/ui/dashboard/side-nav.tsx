import AspiraLogo from "@/app/ui/aspira-logo";
import { signOut } from "@/auth";
import { randomUUID } from 'crypto';
import { PlusIcon, PowerIcon, ChatBubbleLeftRightIcon, Cog8ToothIcon, ReceiptRefundIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import {UserCircleIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from '@/app/ui/dashboard/nav-links';
import ProfileModal from "@/app/ui/dashboard/profile-modal";


export default function SideNav() {
  let id = randomUUID();
  
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white w-2/12 fixed left-0 top-0 min-w-64">
      <div className="px-8 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg">
          <Link
            href="/dashboard"
            key="dashboard"
          >
            <AspiraLogo />
          </Link>
        </span>
        <Link className='mt-8 mb-8 rounded-md bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex flex-row gap-2 items-center'
            href={`/dashboard/jobs/${id}`}
            key={id}
          > 
            <PlusIcon className="pointer-events-none h-[18px] w-[18px]" />
            New Job
        </Link>
        <NavLinks />
      </div>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <div className="flex items-center gap-2 flex-wrap bg-white p-4 hover:bg-gray-50">
          {/* <Link className="flex flex-wrap gap-2 items-center justify-start w-full text-gray-500 hover:text-gray-700"
          href="/contact"
          key="Contact">
            <ChatBubbleLeftRightIcon className="pointer-events-none h-[24px] w-[24px]"/>
            Contact
          </Link>
          <Link className="mt-2 flex flex-wrap gap-2 items-center justify-start w-full text-gray-500 hover:text-gray-700"
          href=""
          key="Settings">
            <Cog8ToothIcon className="pointer-events-none h-[24px] w-[24px]"/>
            Settings
          </Link> */}
          <ProfileModal></ProfileModal>
          
          <form className="border-t-2 w-full pt-2 mt-4 pb-2 border-gray-300"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <span className="mt-2 flex flex-wrap gap-2 items-center justify-start w-full text-gray-500 hover:text-gray-700">

            {/* <PowerIcon className="pointer-events-none h-[32px] w-[32px] text-gray-300"/> */}

              <ArrowLeftCircleIcon className="pointer-events-none h-[24px] w-[24px]"/>
              
              <button>Exit Dashboard</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
