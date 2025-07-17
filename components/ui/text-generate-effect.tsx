"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");
	const charsArray = words.split("");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration ? duration : 1,
				delay: stagger(0.2),
			}
		);
	}, [scope.current]);

	const highlightWords: { [key: string]: string } = {
		products: "text-purple-600",
		impact: "text-yellow-500",
	};
	const renderWords = () => {
		return (
			<motion.div ref={scope} className="flex flex-wrap justify-center gap-1">
				{wordsArray.map((word, idx) => {
					const cleanWord = word.toLowerCase().replace(/[^a-z]/gi, ""); // Remove punctuation
					const highlightClass =
						highlightWords[cleanWord] ||
						"text-white  opacity-0";

					return (
						<motion.span
							key={word + idx}
							className={`${highlightClass} opacity-0`}
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};
	return (
		<div className={cn("font-bold", className)}>
			<div className="mt-4">
				<div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
