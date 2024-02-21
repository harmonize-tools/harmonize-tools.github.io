import Link from 'next/link';
import ProjectGrid from './ui/components/project-grid';

export default function Page() {
  return (
    <main className="p-6">
      <div className="flex flex-row justify-center items-center">
        <Link
          className="flex h-20 items-end justify-start rounded-md mt-10"
          href="/"
        >
          <div className="w-48">
            <img src="/harmonize-logo.png" className="md:block" alt="Harmonize logo"></img>
          </div>
        </Link>
        </div>
      <div className="ml-3 md-2 md:ml-40 md:mr-40 mt-10">
        <h1 className="font-semibold text-3xl mb-2">All projects</h1>
        <p className="text-gray-500 text-l text-justify">Exercitation consequat esse elit officia ullamco ut. Ea tempor eiusmod irure dolore cillum mollit ea irure culpa amet nisi mollit. Id esse esse eu est tempor. Et magna qui Lorem incididunt do qui anim cupidatat qui elit voluptate magna consequat. Lorem et amet dolore consequat aliqua excepteur est id eu sit consequat.</p>
      </div>
      <ProjectGrid></ProjectGrid>
    </main>
  );
}
