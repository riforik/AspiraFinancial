import Header from "@/app/ui/global-components/header";
import Footer from "@/app/ui/global-components/footer";
import Link from "next/link";


export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main>
        <Header />

        <section className="grid place-items-center bg-gray-100 border-b border-2 border-gray-300 min-h-screen">

          <div className="text-center">
            <p className="text-base font-semibold text-aspiraPrimary">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-aspiraPrimary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Go back home
              </Link>
              <a href="/contact" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>

            </div>
          </div>

        </section>
        <Footer />
        </main>
      </>
    )
  }
  