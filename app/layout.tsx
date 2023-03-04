import "./globals.css";
import Image from "next/image";
import Modal from "@/components/modal";
import {
  closeAnywhere,
  closeModal,
  RequestAccess,
} from "@/components/modal/handlers";
import Nav from "@/components/navabr";

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
      <body
        className="max-w-screen-2xl m-auto bg-primary"
        onClick={closeAnywhere}
      >
        <Nav />
        {children}
        <footer className="flex justify-center items-center fixed left-0 bottom-0 h-12 min-w-full bg-secondary text-white">
          <h3 className="text-lg font-bold">
            Abyss secures $50k in pre-seed funding.
          </h3>
        </footer>
        <Modal />
      </body>
    </html>
  );
}
