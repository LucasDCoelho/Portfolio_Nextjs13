import Image from "next/image"

import { ToggleDark } from "@/components/ToggleDark"

// Images
import ProfileLogo from "../../public/3.png"
import AboutImg from "../../public/1690200667719.jpg"

export default function Home() {
  return (
    <div className="h-screen bg-zinc-300 dark:bg-zinc-900">
      <header
        className="flex justify-around items-center h-16 border-b-2 border-slate-800 dark:border-slate-200 shadow shadow-slate-800 dark:shadow-slate-200"

      >
        {
          
        }
        <Image
          src={ProfileLogo}
          width={130}
          height={130}
          alt="My Logo"
          priority
        />

        <nav>
          <ul className="flex gap-8">
            <li className="text-zinc-800 dark:text-zinc-50">About</li>
            <li className="text-zinc-800 dark:text-zinc-50">Portfolio</li>
            <li className="text-zinc-800 dark:text-zinc-50">Contact</li>
          </ul>
        </nav>

        <ToggleDark />
      </header>

      <main className="h-[calc(100%-4rem)]">
        <section className="flex-1 flex h-full items-center justify-around gap-48">
          <div>
            <h2 className="text-6xl font-extrabold dark:text-zinc-50">Hello World</h2>
            <p className="dark:text-zinc-50 tracking-widest">I am Full Stack Developer and Mobile</p>
          </div>
          <figure>
            {/* <Image
              src="https://avatars.githubusercontent.com/u/94465173?v=4"
              alt="My picture"
              className="rounded-full border-4 border-zinc-800 dark:border-zinc-50"
              width={500}
              height={500}
            /> */}
          </figure>
        </section>

        <section className="h-full bg-zinc-300 dark:bg-zinc-900 flex flex-col items-center justify-center">
          <div>
            <h2 className="text-5xl font-bold border-zinc-800 dark:text-zinc-50">About</h2>
          </div>

          <div className="flex w-full border">
            <figure>
              <Image
                src={AboutImg}
                alt="Oii"
                className="w-[40rem]"
              />
            </figure>
          </div>

        </section>

      </main>
    </div>
  )
}
