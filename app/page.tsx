import styles from "./pages.module.css";
import { Inter, Spline_Sans_Mono } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex">
        <div className="text-white w-1/2">
          <h1>Ruthlessly Test</h1>
          <h2>Never bad UX</h2>
          <p>
            Lorum Epsum is an open source alternative. Start your project with a
            Lorum Epsum Lorum Epsum is an open source alternative. Start your
            project with a Lorum Epsum.
          </p>
          <div>
            <p>Powered by</p>
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
          <span className="rounded-full">
            <h4>Currently in private beta</h4>
          </span>
          <div className="flex items-center space-x-4">
            <button className="bg-secondary h-[50px] w-[189px] rounded-lg border-2 text-white border-gray-300">
              Request Access
            </button>
            <span className="flex items-center space-x-2">
              <Image src={"/star.png"} height={16} width={16} alt="star" />
              {/* <div id={styles.starFive} /> */}
              <p>Star us on Github</p>
            </span>
          </div>
        </div>
        <div className="w-1/2">
          
        </div>
      </main>
      <section>
        <h3>Product features that unblock your releases.</h3>
        <article>
          <div>
            <Image />
            <h4></h4>
          </div>
          <p></p>
        </article>
        <article>
          <div>
            <Image />
            <h4></h4>
          </div>
          <p></p>
        </article>
        <article>
          <div>
            <Image />
            <h4></h4>
          </div>
          <p></p>
        </article>
        <article>
          <div>
            <Image />
            <h4></h4>
          </div>
          <p></p>
        </article>
      </section>
    </>
  );
}
