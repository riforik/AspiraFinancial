import SideNav from '../ui/dashboard/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
      return (
      <main className="flex items-center justify-end bg-gray-100 min-h-screen">
          <SideNav />
        <div className="flex w-10/12 flex-col p-16 ml-64">
          <div className="">{children}</div>
        </div>
      </main>
    );
  }