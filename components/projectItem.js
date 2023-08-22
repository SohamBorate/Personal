import Link from "next/link";

export default function ProjectItem({title, href, description}) {
  return (
    <div className="p-6">
      <div className="rounded-xl w-96 h-auto overflow-hidden shadow-lg bg-stone-700 px-6">
        <div className="py-6">
          <Link href={href} className="block mt-4 text-teal-400 text-6xl hover:text-teal-600 mr-4">
            {title}
          </Link>
        </div>
        <div className="text-gray-30 py-6 text-2xl">
          {description}
        </div>
      </div>
    </div>
  );
}