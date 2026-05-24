export interface ProjectEntry {
    id: number;
    startDate: string; 
    endDate: string; 
    projectTitle: string;
    clientName: string;
    projectDescription: string; 
    bulletPoints?: string[]; 
    img?: string; 
    altImg?: string; 
    projectLink?: string;
}

export const projectData: ProjectEntry[] = [
    {
        id: 1,
        startDate: "2024-10-01",
        endDate: "2024-11-30",
        projectTitle: "Aaven Pharmaceuticals Corporate Platform",
        clientName: "Aaven Pharmaceuticals",
        projectDescription: "Engineered a robust corporate web presence for a generic medicine manufacturing company facilitating exports to Africa, Southeast Asia, and South America.",
        bulletPoints: [
            "Architected the foundational CMS using WordPress for client hand-off.",
            "Injected custom HTML, CSS, and JavaScript to bypass template limitations and build specialized interactive features.",
            "Optimized global loading performance for international client access."
        ],
        img: "/aaven.svg", 
        altImg: "/aaven.svg",
        projectLink: "https://aavenpharmaceutical.com/",
    },
    {
        id: 2,
        startDate: "2025-09-01",
        endDate: "2025-12-31",
        projectTitle: "Jewelry & Bullion Calculator",
        clientName: "Independent",
        projectDescription: "Developed a dedicated mobile application engineered to digitalize and securely store jewelry transaction details, completely eliminating manual bookkeeping errors.",
        bulletPoints: [
            "Built end-to-end using React Native for cross-platform mobile compatibility.",
            "Implemented robust local data persistence utilizing AsyncStorage.",
            "Engineered complex state management architecture using Zustand to handle real-time calculation logic."
        ],
        img: "/Jewellcal.png",
        altImg: "/Jewellcal.png",
        //projectLink: "https://github.com/dhruvsoni-2001",
    },
    {
        id: 3,
        startDate: "2025-11-01",
        endDate: "Present",
        projectTitle: "Shivam Gold Tharad",
        clientName: "Shivam Gold",
        projectDescription: "A real-time, precision-driven tracking platform displaying live gold and silver bullion market rates, built as an installable Progressive Web App (PWA).",
        bulletPoints: [
            "Engineered highly accurate market data pipelines for real-time UI updates.",
            "Continuously maintaining and deploying new feature updates based on market requirements.",
            "Built with a modern tech stack featuring React, Tailwind CSS, and TypeScript."
        ],
        img: "/shivamgold.svg",
        altImg: "/shivamgold.svg",
        projectLink: "https://shivamgold.store/",
    },
    {
        id: 4,
        startDate: "2026-04-01",
        endDate: "Present",
        projectTitle: "Nexclock: AI Productivity Suite",
        clientName: "Independent Product",
        projectDescription: "A comprehensive cross-platform productivity application blending advanced mobile UI with deep, hardware-level native Android functionality and local AI integration.",
        bulletPoints: [
            "Designed the primary user interface using React Native while writing native Kotlin modules to handle strict background alarm executions.",
            "Integrated comprehensive SDLC tools and a reminder calendar for strict meeting and appointment scheduling.",
            "Architected a built-in AI chatbot capable of interfacing with free APIs and guiding users to provision small, local LLMs (300M to 1B parameters)."
        ],
        img: "/nex.jpeg",
        altImg: "/nex.jpeg",
        projectLink: "https://github.com/dhruvsoni-2001/alarmclock",
    },
    {
        id: 5,
        startDate: "2026-05-01",
        endDate: "Present",
        projectTitle: "OrnaDesk: Wholesale Bullion Portal",
        clientName: "B2B Wholesale Jewelers",
        projectDescription: "An enterprise-level operational portal actively in development, designed to meticulously track the daily entry, exit, and workflow of precious metals.",
        bulletPoints: [
            "Architecting secure data pipelines for bulk inventory management.",
            "Developing a high-performance Next.js and Tailwind CSS frontend for rapid administrative data entry.",
            "Implementing strict role-based access controls for wholesale operations."
        ],
        img: "/ornadesk.png",
        altImg: "/ornadesk.png",
    },
    {
        id: 6,
        startDate: "Planning Phase",
        endDate: "TBD",
        projectTitle: "Universal Billing Software",
        clientName: "Commercial SaaS",
        projectDescription: "A cross-platform billing solution currently in architectural planning, engineered to provide seamless invoicing, financial tracking, and receipt generation across both mobile and desktop environments.",
        bulletPoints: [
            "Drafting database schemas for universal synchronization between web and native applications.",
            "Designing a seamless, scalable React/TypeScript architecture."
        ],
        img: "/bg.png",
        altImg: "/bg.png",
    },
    {
        id: 7,
        startDate: "Planning Phase",
        endDate: "TBD",
        projectTitle: "Restaurant Management Architecture",
        clientName: "Commercial SaaS",
        projectDescription: "A comprehensive restaurant management and point-of-sale system, engineered to handle complex table routing, kitchen display systems, and inventory tracking.",
        bulletPoints: [
            "Currently defining the system architecture and tech stack requirements for high-availability, low-latency transaction processing."
        ],
        img: "/bg.png",
        altImg: "/bg.png",
    }
];