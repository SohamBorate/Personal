import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";

export default function ProjectsPage() {
  return (
    <>
      <Layout>
        <div className = "text-stone-700 w-full">
          <div className = "p-3 flex justify-center items-center text-gray-300">
            <ul className = "list-inside">
              <li><ProjectItem title = "The Wall" href = "/projects/thewall" description = "Anonymously post anything which is publicly visible."></ProjectItem></li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}