"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { RequestAccess } from "../modal/handlers";

export default function Nav() {
  const pathName = usePathname();

  console.log(pathName)

  return (
    <header className="flex justify-between items-center min-h-[84px]">
      <Image
        src={"/logo-white.png"}
        height={64}
        width={154}
        alt="abyss-logo-white-png"
        loading="eager"
      />
      {pathName === "/waitlist" ? (
        <></>
      ) : (
        <div>
          <button className="bg-white h-[50px] w-[176px] rounded-lg mr-2 shadow-[0px_0px_11px_4px_rgba(255,255,255,0.37)]">
            Sign In
          </button>
          <button
            onClick={RequestAccess}
            className="bg-secondary h-[50px] w-[260px] rounded-lg border-2 text-white border-gray-300"
          >
            Request Access
          </button>
        </div>
      )}
    </header>
  );
}
