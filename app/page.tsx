import ProjectGrid from '@/app/ui/components/project-grid';
import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

export default function Page() {
  return (
    <main>
      <div className="min-flex-col flex p-6">
        <div className="flex flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow md:p-12 md:p-6">
            <Menu></Menu>
            <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">
              All toolkits
            </h1>
            <p className="text-justify text-l text-gray-500">
              Exercitation consequat esse elit officia ullamco ut. Ea tempor
              eiusmod irure dolore cillum mollit ea irure culpa amet nisi
              mollit. Id esse esse eu est tempor. Et magna qui Lorem incididunt
              do qui anim cupidatat qui elit voluptate magna consequat. Lorem et
              amet dolore consequat aliqua excepteur est id eu sit consequat.
            </p>
            <ProjectGrid></ProjectGrid>
          </div>
        </div>
      </div>
    </main>
  );
}
