// components/ui/Timeline.tsx
// This component renders a vertical timeline specifically for work experience entries,
// incorporating scroll-driven animations and flexible content display.
"use client";
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
// Importing the ExperienceEntry interface from the experience data file
import { ExperienceEntry } from "@/data/experienceData"; // Adjust path as needed

export const Timeline = ({ data }: { data: ExperienceEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null); // Ref for the main timeline content area
	const containerRef = useRef<HTMLDivElement>(null); // Ref for the scroll container
	const [height, setHeight] = useState(0); // State to store the dynamic height of the timeline content

	// Effect to measure the height of the timeline content on mount and updates.
	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	// `useScroll` hook to track scroll progress for the container.
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	// `useTransform` hooks to map scroll progress to animation values.
	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		// Main container for the timeline, now with transparent glass effect
		<div
			className="w-full font-sans md:px-10
                bg-black/0 rounded-2xl shadow-lg
                backdrop-blur-3xl border border-white/5 
                bg-gradient-to-br from-neutral-900/20 via-neutral-900/10 to-neutral-900/5
                p-6 md:p-10"
			ref={containerRef}
		>
			{/* Introduction section of the timeline */}
			<div className="max-w-7xl mx-auto py-10 px-0 md:px-4 lg:px-6">
				{" "}
				{/* Adjusted padding */}
				<h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl text-center">
					{" "}
					{/* Centered title */}
					My Professional Journey
				</h2>
				<p className="text-neutral-300 text-sm md:text-base max-w-sm mx-auto text-center">
					{" "}
					{/* Centered description */}
					Here's a detailed look at my work experience and career progression.
				</p>
			</div>

			{/* Main timeline content area */}
			<div ref={ref} className="relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div
						key={item.id}
						className="flex justify-start pt-10 md:pt-40 md:gap-10"
					>
						{/* Sticky Date/Year and optional Image for each timeline item */}
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							{/* The visual "dot" on the timeline line */}
							<div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-700">
								{" "}
								{/* Added border */}
								<div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
							</div>
							{/* Desktop-only Date/Year */}
							<h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
								{item.startDate}
							</h3>
							{/* Optional Company Logo/Image */}
							{item.img && (
								<img
									src={item.img}
									alt={item.company || "Company Logo"}
									width={100}
									height={100}
									className="hidden md:block w-16 h-16 rounded-full object-cover ml-4 border border-neutral-600 shadow-sm" // Added border and shadow
								/>
							)}
						</div>

						{/* Content Area: Job Title, Company, Description, Bullet Points */}
						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							{/* Mobile-only Date/Year */}
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
								{item.startDate}
							</h3>

							{/* Job Title and Company */}
							<h4 className="text-lg md:text-xl font-semibold text-white mb-2">
								{" "}
								{/* Text color changed to white */}
								{item.jobTitle} at {item.company}
							</h4>
							<p className="text-neutral-400 text-sm mb-4">
								{" "}
								{/* Text color changed */}({item.startDate} - {item.endDate})
							</p>

							{/* Main Description */}
							<p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm whitespace-pre-line">
								{" "}
								{/* Text color changed */}
								{item.description}
							</p>

							{/* Detailed Bullet Points */}
							{item.bulletPoints && item.bulletPoints.length > 0 && (
								<ul className="list-none space-y-2 mb-8 text-neutral-300">
									{" "}
									{/* Text color changed */}
									{item.bulletPoints.map((point, pointIndex) => (
										<li
											key={pointIndex}
											className="flex items-start gap-2 text-xs md:text-sm"
										>
											<span className="shrink-0 text-green-400">✅</span>{" "}
											{/* Green checkmark */}
											<span>{point}</span>
										</li>
									))}
								</ul>
							)}

							{/* Optional Image related to the experience */}
							{item.altImg && (
								<div className="mt-4">
									<img
										src={item.altImg}
										alt={`${item.jobTitle} related image`}
										width={500}
										height={300}
										className="w-full rounded-lg object-cover shadow-lg md:h-60 border border-neutral-600" // Added border
									/>
								</div>
							)}
						</div>
					</div>
				))}
				{/* The static background line of the timeline */}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] " // Adjusted via color
				>
					{/* The animated foreground line */}
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
