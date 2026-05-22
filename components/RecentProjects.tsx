"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import AnimatedTitle from "./ui/RecentProjectsTitle";
import RevealOnScroll from "./ui/RevealOnScroll";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
	const ref = useRef(null);
	const router = useRouter();

	return (
		<section id="projects" className="py-20 w-full">
			<div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<AnimatedTitle />

				{/* 10 Steps Ahead: CSS Grid for a perfect 3-column layout instead of messy flex-wrap */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
					{projects.map((item, index) => (
						<RevealOnScroll
							key={item.id}
							direction="left"
							// Stagger the entrance animation based on the index
							delay={index * 0.15}
							duration={0.6}
						>
							{/* The Card: 
                                - 'group' enables nested hover effects.
                                - hover:-translate-y-3 and hover:shadow-2xl give the slow pop-up effect.
                            */}
							<div className="group relative flex flex-col bg-[#04071D] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(139,92,246,0.2)] transition-all duration-500 ease-out h-full cursor-pointer">
								{/* Make the entire card clickable */}
								<Link
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col h-full"
								>
									{/* Image Container: Fixed height, fills width entirely */}
									<div className="relative w-full h-[270px] bg-[#0c0e24] flex items-center justify-center p-4 overflow-hidden border-b border-white/5">
	<Image
		src={item.img}
		alt={item.title}
		fill
		/* 10 Steps Ahead: object-contain reveals the whole phone mockup, 
		   and group-hover lifts the phone up smoothly inside the card */
		className="object-contain p-2 group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500 ease-in-out"
		loading="lazy"
	/>
</div>

									{/* Content Container */}
									<div className="p-6 flex flex-col flex-grow justify-between">
										<div>
											<h1 className="font-bold text-xl md:text-2xl text-white line-clamp-1 mb-3">
												{item.title}
											</h1>
											{/* 10 Steps Ahead: Removed line-clamp to let the description breathe, 
        added min-h to ensure cards stay relatively even, 
        and reduced text size slightly on mobile for better fit */}
											<p className="text-[#BEC1DD] text-xs md:text-sm font-normal mb-6 min-h-[5rem]">
												{item.des}
											</p>
										</div>

										{/* Icons & Button Footer */}
										<div className="flex items-center justify-between mt-auto">
											<div className="flex items-center">
												{item.iconLists.map((icon, i) => (
													<div
														key={i}
														className="border border-white/20 rounded-full bg-black w-8 h-8 md:w-10 md:h-10 flex justify-center items-center relative -ml-2 first:ml-0"
													>
														<Image
															src={icon}
															alt={`icon-${i}`}
															className="p-2"
															fill
														/>
													</div>
												))}
											</div>

											<div className="flex justify-center items-center group/btn">
												<p className="flex text-sm md:text-base text-purple-400 font-semibold group-hover/btn:text-purple-300 transition-colors">
													Check Live Site
												</p>
												{/* Arrow animates up and right on hover */}
												<FaLocationArrow
													className="ms-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
													color="#CBACF9"
												/>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</RevealOnScroll>
					))}
				</div>

				<div className="flex justify-center items-center mt-16 relative z-50">
					<span className="mr-3 text-white/80">
						For more about me, My Projects & work{" "}
					</span>
					<Link
						href="/Work-Exp"
						className="bg-purple-600 text-white px-6 py-2.5 rounded-lg hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 cursor-pointer font-medium"
					>
						Explore More
					</Link>
				</div>
			</div>
		</section>
	);
};

export default RecentProjects;
