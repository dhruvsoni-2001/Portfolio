"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "lottie-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./backgroundGradiantAnimation";
import MagicButton from "./MagicButton";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import RevealOnScroll from "./RevealOnScroll";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				// change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	//   remove unecessary things here
	img,
	imgLight,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgLight?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const leftLists = ["ReactJS", "NextJS", "Typescript", "TailwindCSS"];
	const rightLists = [".NET", "AWS", "JAVA", "SQL"];
	const centerLists = ["DevOps", "Docker", "Kubernetes", "CI/CD"];

	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const text = "dhruvsoni15175@gmail.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<RevealOnScroll direction="scale"
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-black/[0.1] dark:border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 text-stone-900 dark:text-white",
				className
			)}
			style={{
				background: "var(--bento-bg-gradient)",
			}}
		>
			{/* add img divs */}
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{/* If BOTH images exist, render both but hide one based on the theme */}
					{img && imgLight ? (
						<>
							{/* Light Mode Image: Visible by default, hidden in dark mode */}
							<Image
								src={imgLight}
								alt="Light mode graphic"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className={cn(imgClassName, "object-cover object-center block dark:hidden")}
							/>
							{/* Dark Mode Image: Hidden by default, visible in dark mode */}
							<Image
								src={img}
								alt="Dark mode graphic"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className={cn(imgClassName, "object-cover object-center hidden dark:block")}
							/>
						</>
					) : img ? (
						<Image
							// Fallback if only one image is provided (applies to both themes)
							src={img}
							alt="Bento graphic"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className={cn(imgClassName, "object-cover object-center")}
						/>
					) : null}
				</div>
				{id === 6 && (
					// add background animation , remove the p tag
					<BackgroundGradientAnimation>
						{/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					{/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
					<div
						className={cn(
							"font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm z-10",
							/* Force description to light gray if id is 6 */
							id === 6 ? "text-white/80" : "text-stone-600 dark:text-[#C1C2D3]"
						)}
					>
						{description}
					</div>
					<div
						className={cn(
							"font-sans text-lg lg:text-3xl max-w-96 font-bold z-10",
							// 10 Steps Ahead: Force pure white text ONLY for the email card
							id === 6 ? "text-white" : "" 
						)}
					>
						{title}
					</div>

					{/* for the github 3d globe */}
					{id === 2 && <GlobeDemo />}

					{/* Tech stack list div */}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
							{/* LEFT STACK - lifted up */}
							<div className="flex flex-col gap-4 md:gap-5 lg:gap-6 relative -translate-y-6 lg:-translate-y-12 max-w-[30%]">
								{leftLists.map((item, i) => (
									<span
										key={`left-${i}`}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black/5 dark:bg-[#10132E] text-stone-800 dark:text-white"
									>
										{item}
									</span>
								))}
							</div>

							{/* CENTER STACK - centered */}
							<div className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-6 relative max-w-[40%]">
								{centerLists.map((item, i) => (
									<span
										key={`center-${i}`}
										className="lg:py-4 lg:px-4 py-2 px-3 text-xs lg:text-base font-semibold opacity-70 rounded-lg text-center bg-black/10 dark:bg-[#0f112c] text-stone-900 dark:text-white"
									>
										{item}
									</span>
								))}
							</div>

							{/* RIGHT STACK - pushed down */}
							<div className="flex flex-col gap-3 md:gap-4 lg:gap-6 relative translate-y-6 lg:translate-y-12 max-w-[30%]">
								{rightLists.map((item, i) => (
									<span
										key={`right-${i}`}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-black/5 dark:bg-[#10132E] text-stone-800 dark:text-white"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					)}

					{id === 6 && (
						<div className="mt-5 relative">
							{/* button border magic from tailwind css buttons  */}
							{/* add rounded-md h-8 md:h-8, remove rounded-full */}
							{/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
							{/* add handleCopy() for the copy the text */}
							<div
								className={`absolute -bottom-5 right-0 ${
									copied ? "block" : "block"
								}`}
							>
								{/* <img src="/confetti.gif" alt="confetti" /> */}
								<Lottie
									loop={copied}
									autoplay={copied}
									animationData={animationData}
									rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
									height={100}
									width={400}
								/>
							</div>

							<MagicButton
								title={copied ? "Email is Copied!" : "Copy my email address"}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								// FIX: Removed the light-mode text-stone-900 override. 
								// Forced it to a dark, glassy background with white text permanently.
								otherClasses="!bg-[#161A31]/80 backdrop-blur-md !text-white border border-white/10"
			/>
						</div>
					)}
				</div>
			</div>
		</RevealOnScroll>
	);
};
