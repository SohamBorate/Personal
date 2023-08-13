import Head from "next/head";
import Notification from "../components/notification";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Soham Borate</title>
      </Head>
      <div className = "p-6 dark items-center">
        <div className = "dark:bg-neutral-900 dark:text-stone-700">
          <h1 className = "text-3xl text-gray-500 font-bold underline hover:text-gray-500">
            Hello World!
          </h1>
          <div className = "grid grid-cols-4 gap-10">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
          </div>
        </div>
        <Notification></Notification>
      </div>
    </>
  );
}