import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			{/**
			 *  UI: Spotlights
			 *  Link: https://ui.aceternity.com/components/spotlight
			 */}
			<div>
				<Spotlight
					conicalGradient="conic-gradient(from 180deg at 50% 0%, #fff 0deg, #a5b4fc 90deg, transparent 360deg)"
					className="top-0 left-1/2 -translate-x-1/2"
				/>
			</div>

			{/**
			 *  UI: grid
			 *  change bg color to bg-black-100 and reduce grid color from
			 *  0.2 to 0.03
			 */}
			<div
				className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
			>
				{/* Radial gradient for the container to give a faded look */}
				<div
					className="absolute top-0 left-0 h-full w-full
      bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
      bg-[size:60px_60px]
      [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
				></div>
				<div
					// chnage the bg to bg-black-100, so it matches the bg color and will blend in
					className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
				/>
			</div>

			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
						Dynamic Web Magic with Next.js
					</p>

					{/**
					 *  Link: https://ui.aceternity.com/components/text-generate-effect
					 *
					 *  change md:text-6xl, add more responsive code
					 */}
					 <TextGenerateEffect words="Welcome to my Portfolio" />

					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m Dhruv, a Software Developer based in India.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
