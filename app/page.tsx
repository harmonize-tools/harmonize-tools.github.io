import ProjectsGrid from '@/app/ui/components/projects-grid';
import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

const projects = [
  {
    name: 'brclimr',
    description:
      'R package to retrieve zonal statistics from weather indicators that were calculated for each municipality in Brazil',
    src: './cards/Logo-example.png',
    link: '/brclimr',
  },
  {
    name: 'Dataset descriptions',
    description: 'Live spreadsheet with data sources description and metadata',
    src: './cards/dataset_descriptions.jpg',
    link: '/dataset-descriptions',
  },
  {
    name: 'Data sources list',
    description:
      'Simplified version of the live spreadsheet for the Harmonize website',
    src: '.public/cards/data_source_list.svg',
    link: 'data-sources-list',
  },
  {
    name: 'Health data questionnaire',
    description:
      'Digital questionnaire aimed at collecting health data sources and metadata',
    src: './cards/HealthQuestionaire.svg',
    link: 'health-data-questionnaire',
  },
  {
    name: 'clim4health',
    description: 'Aggregate climate data to admin level',
    src: './cards/insects.jpg',
    link: '/clim4health',
  },
  {
    name: 'Health data tool',
    description:
      'A generalised tool to access health data from multiple countries',
    src: './cards/DataTool.svg',
    link: '/health-data-tool',
  },
];

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
            Exercitation consequat esse elit officia ullamco ut. Ea tempor
            eiusmod irure dolore cillum mollit ea irure culpa amet nisi mollit.
            Id esse esse eu est tempor. Et magna qui Lorem incididunt do qui
            anim cupidatat qui elit voluptate magna consequat. Lorem et amet
            dolore consequat aliqua excepteur est id eu sit consequat.
          </p>
          <ProjectsGrid projects={projects}></ProjectsGrid>
        </div>
      </div>
    </main>
  );
}
