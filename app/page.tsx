import ProjectsGrid from '@/app/ui/components/projects-grid';
import SideNav from '@/app/ui/structure/sidenav';
import Menu from '@/app/ui/structure/menu';

const projects = [
  {
    name: 'brclimr',
    description:
      'R package to retrieve zonal statistics from weather indicators that were calculated for each municipality in Brazil',
    src: '/cards/insects.jpg',
    link: '/brclimr'
  },
  {
    name: 'Dataset descriptions',
    description: 'Live spreadsheet with data sources description and metadata',
    src: '/cards/insects.jpg',
    link: '/dataset-descriptions'
  },
  {
    name: 'Data sources list',
    description:
      'Simplified version of the live spreadsheet for the Harmonize website',
    src: '/cards/insects.jpg',
    link: 'data-sources-list'
  },
  {
    name: 'Health data questionnaire',
    description:
      'Digital questionnaire aimed at collecting health data sources and metadata',
    src: '/cards/insects.jpg',
    link: 'health-data-questionnaire'
  },
  {
    name: 'clim4health',
    description: 'Aggregate climate data to admin level',
    src: '/cards/insects.jpg',
    link: '/clim4health',
  },
  {
    name: 'Health data tool',
    description:
      'A generalised tool to access health data from multiple countries',
    src: '/cards/insects.jpg',
    link: '/health-data-tool'
  }
]

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
            <ProjectsGrid projects={projects}></ProjectsGrid>
          </div>
        </div>
      </div>
    </main>
  );
}
