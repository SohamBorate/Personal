import Layout from "../components/layout";

export default function HomePage() {
  return (
    <>
      <Layout>
        <div className = "text-stone-700 w-max p-3 items-center">
          <p className = "text-3xl items-center text-gray-300">
            It's me, hi!
          </p>
        </div>
      </Layout>
    </>
  );
}