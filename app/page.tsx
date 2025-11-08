import ProjectsGrid from '@/app/ui/components/projects-grid';
import Menu from '@/app/ui/structure/menu';

const projects = require('../public/config.json');

export default function Page() {
  return (
    <div>
      <Menu />
      <h1 className="mb-2 mt-6 text-3xl font-semibold md:mt-0">
        Toolkits
      </h1>
      <p className="text-justify text-l text-gray-500">
        Explore different R and python libraries tailored for health, climate, and socioeconomic analysis, 
        offering robust statistical methods, data visualization tools, and predictive modeling capabilities to 
        address complex challenges in these domains.
      </p>
      
      <ProjectsGrid projects={projects} />
    </div>
  );
}
