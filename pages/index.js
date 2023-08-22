import Layout from "../components/layout";

export default function HomePage() {
  return (
    <>
      <Layout>
        <div className = "text-stone-700 w-full">
          <div className = "p-3 flex justify-center items-center text-6xl text-gray-300">
            It's me, hi!
          </div>
        </div>
      </Layout>
    </>
  );
}