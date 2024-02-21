import ProjectCard from '@/app/ui/components/project-card';

export default function ProjectGrid() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ml-3 mr-3 xl:ml-40 xl:mr-40 mt-3 mb-3">
        <ProjectCard project="dataset-descriptions"></ProjectCard>
        <ProjectCard project="data-sources-list"></ProjectCard>
        <ProjectCard project="health-data-questionnaire"></ProjectCard>
        <ProjectCard project="clim4health"></ProjectCard>
        <ProjectCard project="health-data-tool"></ProjectCard>
        <ProjectCard project="brclimr"></ProjectCard>
    </div>
    )}