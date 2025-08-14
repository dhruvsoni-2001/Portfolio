"use client";

import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import AnimatedTitle from "./ui/RecentProjectsTitle";
import { PinContainer } from "./ui/Pin";
import RevealOnScroll from "./ui/RevealOnScroll";
import { useRouter } from "next/navigation";

const RecentProjects = () => {
	const ref = useRef(null);
	const router = useRouter();
	return (
		<div ref={ref} className="py-20">
			<AnimatedTitle />

			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((item) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
						key={item.id}
					>
						<RevealOnScroll direction="left" delay={0.2} duration={0.6}>
							<PinContainer title={item.title} href={item.link}>
								{/* Top image container */}
								<div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
									<div
										className="relative w-full h-full overflow-hidden lg:rounded-3xl"
										style={{ backgroundColor: "#13162D" }}
									>
										<img src="/bg.png" alt="background" />
									</div>
									<img
										src={item.img}
										alt={item.title}
										className="z-10 absolute bottom-0"
									/>
								</div>

								{/* Title */}
								<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
									{item.title}
								</h1>

								{/* Description */}
								<p
									className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
									style={{ color: "#BEC1DD", margin: "1vh 0" }}
								>
									{item.des}
								</p>

								{/* Icons & Button */}
								<div className="flex items-center justify-between mt-7 mb-3">
									<div className="flex items-center">
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
												style={{
													transform: `translateX(-${5 * index + 2}px)`,
												}}
											>
												<img src={icon} alt={`icon-${index}`} className="p-2" />
											</div>
										))}
									</div>

									<div className="flex justify-center items-center">
										<p className="flex lg:text-xl md:text-xs text-sm text-purple">
											Check Live Site
										</p>
										<FaLocationArrow className="ms-3" color="#CBACF9" />
									</div>
								</div>
							</PinContainer>
						</RevealOnScroll>
					</div>
				))}
				<div className="flex justify-center items-center py-10 z-10">
					<span className="mr-3">For more about me, My Projects & work </span>
					{/*
          FIX:
          1. Replaced `window.location.href` with `router.push` for proper Next.js client-side navigation.
          2. Updated button styling to be filled with purple by default.
        */}
					<button
						onClick={() => router.push("/Work-Exp")}
						className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
					>
						Cick Here
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecentProjects;
