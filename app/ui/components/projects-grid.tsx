import Link from 'next/link';

export default function ProjectsGrid({ projects }: { projects: any }) {
  return (
    <>
    <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-4">
      {projects.map((project: any) => {
        return (
        <div key={project.id} className="rounded-md border-2 border-solid p-5">
          <img 
            src={project.src}
            width={project.width}
          ></img>
          <h1 className="text-xl font-bold">{project.name}</h1>
          <h2 className="text-base">{project.description}</h2>
          <Link className="text-base" href={project.link}>
            Learn more &rarr;
          </Link>
        </div>
        );
      })}
    </div>
    </>
  );
}