import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="max-w-screen-2xl m-auto bg-primary">
        <header className="flex justify-between items-center min-h-[84px]">
          <Image
            src={"/logo-white.png"}
            height={64}
            width={154}
            alt="abyss-logo-white-png"
            loading="eager"
          />
          <div>
            <button className="bg-white h-[50px] w-[176px] rounded-lg mr-2 shadow-[0px_0px_11px_4px_rgba(255,255,255,0.37)]">
              Sign In
            </button>
            <button className="bg-secondary h-[50px] w-[260px] rounded-lg border-2 text-white border-gray-300">
              Request Access
            </button>
          </div>
        </header>
        {children}
        <footer className="flex justify-center items-center fixed left-0 bottom-0 h-12 min-w-full bg-secondary text-white">
          <h3 className="text-lg font-bold">
            Abyss secures $50k in pre-seed funding.
          </h3>
        </footer>
      </body>
    </html>
  );
}
