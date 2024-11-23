import AspiraLogo from '@/app/ui/aspira-logo';
import RegisterForm from '@/app/ui/register-form';
import Link from 'next/link';
import MinimalHeader from '../ui/global-components/minimal-header';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen bg-gray-100 border-b border-2 border-gray-300">
      <MinimalHeader />
      <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
        {/* <div className="flex h-20 w-full items-end rounded-lg bg-gray-200 p-3 md:h-36">
          <div className="w-32 text-black md:w-36">
            <Link
            href="/"
            key="home">
                <span className='sr-only'>Go to home page</span>
                <AspiraLogo />
            </Link>
          </div>
        </div> */}
        <RegisterForm />
      </div>
    </main>
  );
}