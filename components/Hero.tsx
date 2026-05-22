import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			<div className="hidden dark:block">
				<Spotlight />
				<Spotlight />
				<Spotlight />
			</div>

			<div
				className="fixed inset-0 z-0 w-full h-screen bg-black-100 flex items-center justify-center"
			>
				<div
					className="absolute top-0 left-0 h-full w-full
					bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
					bg-[size:50px_50px]
					[mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
				></div>
				<div
					className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-10 z-10 w-full">
				<div className="max-w-[89vw] w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
					{/* Left Content Area */}
					<div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 mt-10 lg:mt-20">
						<div className="flex items-center gap-2 mb-4">
							<span className="px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-stone-600 dark:text-stone-300 border border-black/10 dark:border-white/10 rounded-full uppercase bg-black/5 dark:bg-white/5">
								Software Developer
							</span>
							<span className="px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-wider text-stone-600 dark:text-stone-300 border border-black/10 dark:border-white/10 rounded-full uppercase bg-black/5 dark:bg-white/5">
								India
							</span>
						</div>
 
						<TextGenerateEffect
							words="Building Scalable Products Engineered for Impact."
							className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-tighter leading-none text-stone-900 dark:text-white"
							duration={0.15}
						/>
 
						<p className="md:tracking-wide my-6 text-sm md:text-lg lg:text-xl text-stone-600 dark:text-stone-300 max-w-xl">
							Hi! I&apos;m Dhruv, a Software Developer connecting modern systems with scalable execution — so ideas become reliable products.
						</p>
 
						<a href="#about" className="mt-4">
							<MagicButton
								className="bg-black text-white dark:bg-white dark:text-black"
								title="Show my work"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</a>
					</div>
 
					{/* Right Image Placeholder */}
					<div className="w-full sm:w-[350px] md:w-[400px] lg:w-[400px] xl:w-[450px] shrink-0">
						<div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-stone-200 dark:bg-stone-800 shadow-xl shadow-black/5">
							<Image 
								src="/PortFolioImage.jpg" 
								alt="Dhruv Profile" 
								fill 
								/* FIX: Replaced object-center with object-top */
								className="object-cover object-top"
								priority 
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
