import ProjectsGrid from '@/app/ui/components/projects-grid';
import Menu from '@/app/ui/structure/menu';

const projects = require('../../public/related_products/config.json');

export default function Page() {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="w-screen grow p-6 md:p-12 md:p-6">
          <Menu></Menu>
          <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">
            Related products
          </h1>
          <br></br>
          <p className="text-justify text-l text-gray-500">
              Related products are additional dashboards that work alongside the toolkits, 
              offering similar GIS and health data analysis. 
            <br></br>
              They provide extra tools for visualizing and managing this information effectively
          </p>
          <ProjectsGrid projects={projects}></ProjectsGrid>
        </div>
      </div>
    </main>
  );
}