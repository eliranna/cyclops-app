import Link from "next/link";
import { Testimonials } from "./components/testimony";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Link
            href="https://github.com/chronark/envshare"
            className="text-zinc-400 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-100/10 hover:ring-zinc-100/30 duration-150"
          >
            This is Open Source on{" "}
            <span className="font-semibold text-zinc-200">
              GitHub <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
        <div>
          <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
            Get Your Favoraite Dish & Extras
          </h1>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
            Unleash your taste buds and let our app guide you on a mouthwatering journey of flavors and surprises. Elevate your dining experience and savor every bite with our awesome app - the ultimate companion for finding your favorite dish with a delectable twist!
          </p>
          <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
            <input type="text" className="w-full outline-none bg-transparent text-zinc-400 relative overflow-hidden rounded-full py-1.5 px-4 text-base font-semibold leading-7 text-white ring-0 ring-zinc-600 duration-150 hover:ring-white hover:drop-shadow-cta leading-6 ring-1"/>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
