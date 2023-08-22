import Link from "next/link";
import Layout from "../../../components/layout";

export default function TheWall() {
  return (
    <>
      <Layout>
        <div className = "w-full">
          <div className = "p-6 flex justify-center items-center text-6xl text-gray-300">
            Write on&nbsp;
            <Link href="/projects/thewall" className="text-teal-400 hover:text-teal-600">
              The Wall
            </Link>
          </div>

          <div className = "p-6 flex justify-center items-center text-gray-300">
            <div class="w-full max-w-xs">
              <form class="bg-stone-700 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-white text-2xl font-bold mb-2" for="content">
                    Content
                  </label>
                  <input class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-white bg-neutral-800 leading-tight focus:outline-none focus:shadow-outline" id="content" type="text" ></input>
                </div>
                <div class="mb-4">
                  <label class="block text-white text-2xl font-bold mb-2" for="name">
                    Name
                  </label>
                  <input class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-white bg-neutral-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Anonymous" ></input>
                </div>
                <div class="flex items-center justify-between">
                  <button class="bg-neutral-800 hover:bg-neutral-900 text-white text-xl font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline" type="button">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}