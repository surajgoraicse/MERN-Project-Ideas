"use client";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { projectsList, Tags } from "@/data/data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";

import { ToggleGroupItem } from "@/components/ui/toggle-group";

type LevelsType = Tags | "All";

const LOCAL_STORAGE_KEY = "projectLevel";

const Projects = ({ className }: { className: string }) => {
	const [level, setLevel] = useState<LevelsType>("All");
	const filteredProjects = projectsList.filter(
		(project) => level === "All" || project.tag === level
	);

	// load level from localstorage on mount
	useEffect(() => {
		const savedLevel = localStorage.getItem(
			LOCAL_STORAGE_KEY
		) as LevelsType | null;
		if (
			savedLevel &&
			(
				["Begineer", "Intermediate", "Advanced", "All"] as LevelsType[]
			).includes(savedLevel)
		) {
			setLevel(savedLevel);
		} else {
			setLevel("All");
		}
	}, []);

	// Update localStorage whenever level changes
	const handleLevelChange = (newValue: LevelsType) => {
		if (!newValue) return;
		setLevel(newValue);
		localStorage.setItem(LOCAL_STORAGE_KEY, newValue);
	};

	return (
		<div className={cn(className)}>
			<div>
				<ToggleGroup
					value={level}
					defaultValue={level}
					onValueChange={(newValue: LevelsType) => {
						if (newValue) {
							handleLevelChange(newValue);
						}
					}}
					className="min-w-sm"
					variant="outline"
					type="single"
				>
					<ToggleGroupItem value="Begineer">Begineer</ToggleGroupItem>
					<ToggleGroupItem value="Intermediate">
						Intermediate
					</ToggleGroupItem>
					<ToggleGroupItem value="Advanced">Advanced</ToggleGroupItem>
					<ToggleGroupItem value="All">All</ToggleGroupItem>
				</ToggleGroup>
			</div>

			<div className="flex flex-col gap-2 mt-3">
				{filteredProjects.map((project) => {
					return (
						<ProjectCard
							projectItem={project}
							key={project.longTitle}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
