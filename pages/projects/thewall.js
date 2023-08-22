import Link from "next/link";
import Layout from "../../components/layout";

export default function TheWall() {
  return (
    <>
      <Layout>
        <div className = "text-stone-700 w-full">
          <div className = "p-6 flex justify-between items-center text-6xl text-gray-300">
            <div>
              The Wall
            </div>
            <div className = "text-3xl">
              <Link href="/projects/thewall/write" className="text-teal-400 text-3xl hover:text-teal-600">
                Write
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}