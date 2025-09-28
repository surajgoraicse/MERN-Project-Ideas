import { Container } from "@/components/base/Container";
import HeroCard from "@/components/cards/HeroCard";

const page = () => {
	return (
		<div>
			<Container maxWidth="md" className="px-4 sm:px-12 lg:px-10">

				<HeroCard />
			</Container>
		</div>
	);
};

export default page;
