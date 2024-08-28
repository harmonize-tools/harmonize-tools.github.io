import ProjectsGrid from '@/app/ui/components/projects-grid';
import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

const projects = require('../public/config.json');

export default function Page() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <aside className="w-full flex-none p-6 md:sticky md:top-0 md:h-screen md:w-72">
          <SideNav />
        </aside>
        <div className="w-screen grow p-6 md:p-12 md:p-6">
          <Menu></Menu>
          <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">
            All toolkits
          </h1>
          <p className="text-justify text-l text-gray-500">
            Explore different R and python libraries tailored for health, climate, and socioeconomic analysis, 
            offering robust statistical methods, data visualization tools, and predictive modeling capabilities to 
            address complex challenges in these domains.
          </p>
          <ProjectsGrid projects={projects}></ProjectsGrid>
        </div>
      </div>
    </main>
  );
}
