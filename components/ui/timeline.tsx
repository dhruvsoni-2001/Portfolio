// components/ui/Timeline.tsx
// This component renders a vertical timeline specifically for work experience entries,
// incorporating scroll-driven animations and flexible content display.
"use client";
import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
// FIX: Define a more generic type that can handle both work experience and projects.
// This makes the component flexible and reusable.
export interface TimelineEntry {
	id: number;
	startDate: string;
	endDate: string;
	// Work Experience fields
	jobTitle?: string;
	company?: string;
	description?: string;
	// Project fields
	projectTitle?: string;
	clientName?: string;
	projectDescription?: string;
	// Common fields
	bulletPoints?: string[];
	img?: string;
	altImg?: string;
}

export const Timeline = ({ data, title, subtitle }: { data: TimelineEntry[], title: string, subtitle: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    // Effect to measure and update the height of the timeline content
    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref, data.length]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // FIX: Adjusted the offset to ensure the animation completes
        // when the bottom of the container reaches the bottom of the viewport.
        // This makes the animation feel more complete and satisfying.
        offset: ["start 10%", "end end"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10
                       rounded-2xl shadow-lg
                       backdrop-blur-xl border border-white/10
                       p-6 md:p-10"
            ref={containerRef}
        >
            {/* Introduction section */}
            <div className="max-w-7xl mx-auto py-10 px-0 md:px-4 lg:px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white max-w-4xl text-center font-bold">
                    {title}
                </h2>
                <p className="text-neutral-300 text-base md:text-lg max-w-sm mx-auto text-center">
                    {subtitle}
                </p>
            </div>

            {/* Main timeline content area */}
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        {/* Sticky Date/Year and optional Image */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-700">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-4xl md:pl-20 lg:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                                {item.startDate}
                            </h3>
                            {item.img && (
                                <img
                                    src={item.img}
                                    alt={item.company || item.clientName || "Logo"}
                                    width={100}
                                    height={100}
                                    className="hidden md:block w-16 h-16 rounded-full object-cover ml-4 border border-neutral-600 shadow-sm"
                                />
                            )}
                        </div>

                        {/* Content Area */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-3xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.startDate}
                            </h3>
                            <h4 className="text-xl md:text-2xl font-semibold text-white mb-2">
                                {item.jobTitle ? `${item.jobTitle} at ${item.company}` : `${item.projectTitle} for ${item.clientName}`}
                            </h4>
                            <p className="text-neutral-400 text-sm mb-4">
                                ({item.startDate} - {item.endDate})
                            </p>
                            <p className="mb-4 text-sm font-normal text-neutral-300 md:text-base whitespace-pre-line">
                                {item.description || item.projectDescription}
                            </p>
                            {item.bulletPoints && item.bulletPoints.length > 0 && (
                                <ul className="list-none space-y-2 mb-8 text-neutral-300">
                                    {item.bulletPoints.map((point, pointIndex) => (
                                        <li
                                            key={pointIndex}
                                            className="flex items-start gap-2 text-sm md:text-base"
                                        >
                                            <span className="shrink-0 text-green-400">✅</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {item.altImg && (
                                <div className="mt-4">
                                    <img
                                        src={item.altImg}
                                        alt={`${item.jobTitle || item.projectTitle} related image`}
                                        width={500}
                                        height={300}
                                        className="w-full rounded-lg object-cover shadow-lg md:h-60 border border-neutral-600"
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
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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