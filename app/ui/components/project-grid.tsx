import ProjectCard from '@/app/ui/components/project-card';

export default function ProjectGrid() {
  return (
    <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-4">
      <ProjectCard project="dataset-descriptions"></ProjectCard>
      <ProjectCard project="data-sources-list"></ProjectCard>
      <ProjectCard project="health-data-questionnaire"></ProjectCard>
      <ProjectCard project="clim4health"></ProjectCard>
      <ProjectCard project="health-data-tool"></ProjectCard>
      <ProjectCard project="brclimr"></ProjectCard>
    </div>
  );
}
