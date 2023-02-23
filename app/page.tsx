import styles from "./pages.module.css";
import { Inter, Spline_Sans_Mono } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex mt-24 h-[505px]">
        <div className="flex flex-col text-white w-1/2">
          <h1 className="text-6xl font-bold">Ruthlessly test</h1>
          <h2 className="text-6xl font-bold text-thiriary">
            Scale beyond limits
          </h2>
          <p className="mt-4 mb-4 font-light text-xl leading-7 w-[62ch]">
            Abyss is a complete suite for limit testing with ease of developer
            experience and performance at the core. Test ruthlessly and sacle
            beyond limits as you mitigate site downtime leading to bad UX.
          </p>
          <div>
            <p className="text-sm mb-2 text-white/[.75]">Powered by</p>
            <div className="flex space-x-2">
              <Image
                src={"/reauth-logo-abyss.png"}
                height={32}
                width={32}
                alt="reauth-logo-abyss"
              />
              <Image
                src={"/adyen-logo-abyss.png"}
                height={32}
                width={32}
                alt="reauth-logo-abyss"
              />
              <Image
                src={"/graphana-logo-abyss.png"}
                height={32}
                width={32}
                alt="reauth-logo-abyss"
              />

              <Image
                src={"/vercel-logo-abyss.png"}
                height={32}
                width={32}
                alt="reauth-logo-abyss"
              />
              <Image
                src={"/vultr-logo-abyss.png"}
                height={32}
                width={32}
                alt="reauth-logo-abyss"
              />
              <Image
                src={"/supabase-logo-abyss.png"}
                height={32}
                width={32}
                alt="reauth-logo-abyss"
              />
            </div>
          </div>
          <span className="text-slate-200/[.80] rounded-full mt-auto bg-white/[.14] w-fit px-4 py-1 mb-4 font-semibold text-xs">
            <h4>Currently in private beta</h4>
          </span>
          <div className="flex items-center space-x-4">
            <button className="bg-secondary h-[50px] w-[189px] rounded-lg border-2 text-white border-gray-300">
              Request Access
            </button>
            <a
              href="https://github.com/batman-xyz/abyss"
              referrerPolicy="origin"
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex items-center space-x-2">
                <Image src={"/star.png"} height={16} width={16} alt="star" />
                <p>Star us on Github</p>
              </span>
            </a>
          </div>
        </div>
        <div className="relative flex w-1/2 justify-end ">
          <div className="absolute mr-64 mt-28 ml-12 max-w-sm">
            <input
              className="w-full rounded-md text-2xl px-2 py-2 bg-white/[.10] text-white mb-4"
              placeholder="Enter route"
            />
            <div className="flex text-white items-center w-full mb-4">
              <p className="font-semibold text-lg ml-2">
                Authorisation header required?
              </p>
              <div>
                <span className="font-bold rounded-lg bg-white/[.10] py-1 px-3 mr-1">
                  Y
                </span>
                <span className="font-bold rounded-lg bg-white/[.10] py-1 px-3">
                  N
                </span>
              </div>
            </div>
            <div className="flex w-full mb-8 space-x-2">
              <input
                className="bg-white/[.02] w-1/3 rounded-md text-2xl px-2 py-2 text-white"
                placeholder="key"
                disabled
              />
              <input
                className="bg-white/[.02] w-2/3 rounded-md text-2xl px-2 py-2 text-white"
                placeholder="value"
                disabled
              />
            </div>
            <button className="bg-white h-[37px] w-full rounded-lg mr-2 shadow-[0px_0px_11px_4px_rgba(255,255,255,0.37)]">
              Run a test
            </button>
          </div>
          <Image
            src={"/demo-abyss.png"}
            height={505}
            width={739}
            alt="demo-abyss"
          />
        </div>
      </main>
      <h3 className="text-white mt-24">
        Product features that unblock your releases.
      </h3>
      <section className="flex text-white">
        <article>
          <div>
            <Image />
            <h4>Integrated</h4>
          </div>
          <p>
            Supabase is an open source Firebase alternative. Start your project
            with a Postgres database, Authentication
          </p>
        </article>
        <article>
          <div>
            <Image />
            <h4>Seamless</h4>
          </div>
          <p>
            Supabase is an open source Firebase alternative. Start your project
            with a Postgres database, Authentication
          </p>
        </article>
        <article>
          <div>
            <Image />
            <h4>Unlock</h4>
          </div>
          <p>
            Supabase is an open source Firebase alternative. Start your project
            with a Postgres database, Authentication
          </p>
        </article>
        <article>
          <div>
            <Image />
            <h4>Actualize</h4>
          </div>
          <p>
            Supabase is an open source Firebase alternative. Start your project
            with a Postgres database, Authentication
          </p>
        </article>
      </section>
    </>
  );
}
