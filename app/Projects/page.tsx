// app/page.tsx
// This is your main application component that renders the Work Experience timeline.
"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
// Importing the Timeline component
import { Timeline } from "@/components/ui/timeline";
import { TopNavbar } from "@/components/ui/TopNavbar";
import { navItems } from "@/data";
import { projectData } from "@/data/projectData";

const Page = () => {
    const router = useRouter(); // Initialize the router

    return (
        <main className="relative bg-black-100 flex flex-col min-h-screen justify-center items-center overflow-x-hidden overflow-y-visible mx-auto sm:px-10 px-5 font-sans">
            {/* Fixed background with grid and radial gradient effects for visual flair */}
            <div className="fixed inset-0 z-0 w-full h-screen bg-black-100 flex items-center justify-center">
                {/* Grid pattern overlay for subtle texture */}
                <div
                    className="absolute top-0 left-0 h-full w-full
          bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:50px_50px]
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
                ></div>
                {/* Radial gradient mask to create a faded edge effect, blending with the background */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            {/* Content area with the Timeline component.
          `z-10` ensures it's above the background effects. */}
            <div className="pb-20 pt-36 w-full max-w-5xl relative z-10">
                
				<TopNavbar navItems={navItems} />

                    {/* The Timeline component is rendered here, receiving the project data */}
                    <Timeline
                        data={projectData}
                        title="Projects"
                        subtitle="Here's a detailed look at my creative projects."
                    />


                {/* Section for navigation to other content */}
                <div className="flex justify-center items-center py-15 z-10">
                    <span className="mr-3 lg:text-2xl md:text-xl sm:text-lg text-neutral-300">
                        See My Journey Building Real-World Systems
                    </span>
                    <button
                        onClick={() => router.push("/Work-Exp")}
                        // onClick={() => router.push("/Work-Exp")} // Redirects to /Work-Exp page
                        className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all duration-300 shadow-md cursor-pointer"
                    >
                        Explore My Professional Experience
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Page;
