import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
	return (
		<div className="pb-20 pt-36">
			{/* Spotlight container */}
			<div>
				<Spotlight
					className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
					fill="white"
				/>
				<Spotlight
					className="h-[80vh] w-[50vw] top-10 left-full"
					fill="purple"
				/>
				<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
			</div>

			{/* Background and Grid container */}
			{/* Background and Grid container */}
			<div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319]">
				{/* Grid overlay with soft fade top & bottom using mask */}
				<div
					className="absolute top-0 left-0 h-full w-full
					bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
					dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]
					bg-[size:60px_60px]
					[mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
				></div>

				{/* Radial mask for faded center glow */}
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-transparent"></div>

				{/* Page Content */}
				<div className="flex justify-center">
					<div className=" max-w-[89vw]">
						<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
							Dynamic web magic with Next.js
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
