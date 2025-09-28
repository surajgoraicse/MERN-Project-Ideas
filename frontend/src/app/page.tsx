import { Container } from "@/components/base/Container";
import HeroCard from "@/components/cards/HeroCard";
import ProjectCard from "@/components/cards/ProjectCard";
import Projects from "@/components/projects/Projects";
import { projectsList } from "@/data/data";

const page = () => {
	
	return (
		<div>
			<Container maxWidth="md" className="px-4 sm:px-12 lg:px-10">
				<HeroCard className="mt-8" />

				<Projects className="mt-5"/>
			</Container>
		</div>
	);
};

export default page;
