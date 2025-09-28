import { projectsList } from "@/data/data";
import { cn } from "@/lib/utils";
import ProjectCard from "../cards/ProjectCard";

const Projects = ({ className }: { className: string }) => {
	return (
    <div className={cn(className)}>
      
      

			<div className="flex flex-col gap-2">
				{projectsList.map((project) => {
					return (
						<ProjectCard
							projectItem={project}
							key={project.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
