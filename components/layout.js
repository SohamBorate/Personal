import { useEffect } from "react";
import Head from 'next/head';
import Navbar from "./navbar";

export default function Layout({ children, home }) {
  useEffect(() => {        
    document.body.classList.add("bg-neutral-900");
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Soham Borate, 16 year old student who can program stuff."
        />
        <meta
          property="og:image"
          content=""
        />
        <meta name="og:title" content="Soham Borate" />
        <title>Soham Borate</title>
      </Head>
      <Navbar></Navbar>
      <div className = "p-6">
        <main>{children}</main>
      </div>
    </>
  );
}