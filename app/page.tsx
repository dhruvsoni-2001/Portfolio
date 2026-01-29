import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects"
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export const metadata = {
	title: "Dhruv's Portfolio",
	description: "Modern Portfolio - Building Scalable Products",
};

export default function Home() {
	return (
		<main className="relative bg-black-100 flex flex-col justify-center items-center overflow-x-hidden overflow-y-visible mx-auto sm:px-10 px-5">

			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Footer />
			</div>
		</main>
	);
}
