import Link from 'next/link';

const data = {
  'dataset-descriptions': {
    name: 'Dataset descriptions',
    description: 'Live spreadsheet with data sources description and metadata',
    src: '/cards/insects.jpg',
  },
  'data-sources-list': {
    name: 'Data sources list',
    description:
      'Simplified version of the live spreadsheet for the Harmonize website',
    src: '/cards/insects.jpg',
  },
  'health-data-questionnaire': {
    name: 'Health data questionnaire',
    description:
      'Digital questionnaire aimed at collecting health data sources and metadata',
    src: '/cards/insects.jpg',
  },
  clim4health: {
    name: 'clim4health',
    description: 'Aggregate climate data to admin level',
    src: '/cards/insects.jpg',
  },
  'health-data-tool': {
    name: 'Health data tool',
    description:
      'A generalised tool to access health data from multiple countries',
    src: '/cards/insects.jpg',
  },
  brclimr: {
    name: 'brclimr',
    description:
      'R package to retrieve zonal statistics from weather indicators that were calculated for each municipality in Brazil',
    src: '/cards/insects.jpg',
  },
};

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="rounded-md border-2 border-solid p-5">
      <img src={data[project].src}></img>
      <h1 className="text-xl font-bold">{data[project].name}</h1>
      <h2 className="text-base">{data[project].description}</h2>
      <Link className="text-base" href={project}>
        Learn more &rarr;
      </Link>
    </div>
  );
}
