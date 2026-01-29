// app/page.tsx
// This is your main application component that renders the Work Experience timeline.
"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
// Importing the Timeline component
import { Timeline } from "@/components/ui/timeline";

// Importing the work experience data
import { experienceData } from "@/data/experienceData"; // Adjust path as needed

const Page = () => {
	const router = useRouter(); // Initialize the router

	return (
		<main className="relative bg-[#000319] flex flex-col min-h-screen justify-center items-center overflow-x-hidden overflow-y-visible mx-auto sm:px-10 px-5 font-sans">
			{/* Fixed background with grid and radial gradient effects for visual flair */}
			<div className="fixed inset-0 z-0 w-full h-screen dark:bg-[#000319] dark:bg-grid-white/[0.05] bg-grid-black/[0.05] flex items-center justify-center">
				{/* Grid pattern overlay for subtle texture */}
				<div
					className="absolute top-0 left-0 h-full w-full
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:50px_50px]
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
				></div>
				{/* Radial gradient mask to create a faded edge effect, blending with the background */}
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319]
          bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			{/* Content area with the Timeline component.
          `z-10` ensures it's above the background effects. */}
			<div className="pb-20 pt-36 w-full max-w-5xl relative z-10">
				
					{/* The Timeline component is rendered here, receiving the work experience data */}
					<Timeline
						data={experienceData}
						title="Professional Experience"
						subtitle="Here's a detailed look at my work experience and career progression."
					/>


				{/* Section for navigation to other content */}
				<div className="flex justify-center items-center py-15 z-10">
					<span className="mr-3 lg:text-2xl md:text-xl sm:text-lg text-neutral-300">
						Interested in my creative projects?
					</span>
					<button
						onClick={() => router.push("/Projects")}
						// onClick={() => router.push("/Projects")} // Redirects to /more-projects page
						className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md cursor-pointer"
					>
						Explore My Projects
					</button>
				</div>
			</div>
		</main>
	);
};

export default Page;
