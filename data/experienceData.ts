// data/experienceData.ts
// This file contains the data for your work experience timeline.

export interface ExperienceEntry {
  id: number;
  startDate: string; // e.g., "2023-01-23" - will be displayed as the main title
  endDate: string; // e.g., "2024-02-28" or "Present"
  jobTitle: string;
  company: string;
  description: string; // Can contain multiple paragraphs or formatted text
  bulletPoints?: string[]; // Optional: For detailed responsibilities or achievements
  img?: string; // Optional: Image for the experience entry
  altImg?: string; // Optional: Alt image for the experience entry (if needed for hover/state changes)
}

export const experienceData: ExperienceEntry[] = [
  {
    id: 1,
    jobTitle: "Technical Operation Engineer",
    startDate: "May 2025", // Using a more readable format for display
    endDate: "July 2025",
    company: "OpsXpress LLP",
    description: `
      During my time at OpsXpress LLP, I focused heavily on Learning and Managing the Operations for the Clients. 
      This role allowed me to dive deep into enterprise-level solutions for Infrastructure and how to optimize them. This role was pivotal in shaping my understanding of client needs and operational efficiency. 
    `,
    bulletPoints: [
      "Learned and managed the operations for various clients, focusing on infrastructure optimization.",
      "Implemented new monitoring tools to enhance system performance and reliability.",
      "Collaborated with the different teams to streamline processes and improve service delivery, and solving the Critical incidents, that arose during the operations.",
      "Participated in best practices for incident management and response.",
      "Created documentation for operational procedures and troubleshooting guides. Created over 300+ tickets for various incidents.",
    ],
    img: "https://placehold.co/100x100/A0A0A0/FFFFFF?text=TSI", // Placeholder for company logo or relevant icon
    altImg: "https://placehold.co/100x100/C0C0C0/FFFFFF?text=TSI_ALT",
  },
  {
    id: 2,
    jobTitle: "Junior Full Stack Developer",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    company: "Innovative Web Solutions",
    description: `
      As a junior developer, I contributed to various stages of the software development lifecycle, from conceptualization to deployment.
      This was a foundational role where I gained practical experience in both front-end and back-end technologies.
    `,
    bulletPoints: [
      "Assisted in developing interactive user interfaces using React.js and basic HTML/CSS.",
      "Worked on basic server-side logic with Node.js, handling data processing and API calls.",
      "Learned about version control using Git and collaborative development workflows.",
      "Helped debug and troubleshoot application errors, ensuring smooth functionality.",
    ],
    img: "https://placehold.co/100x100/808080/FFFFFF?text=IWS",
    altImg: "https://placehold.co/100x100/909090/FFFFFF?text=IWS_ALT",
  },
  {
    id: 3,
    jobTitle: "Freelance Web Designer",
    startDate: "Apr 2021",
    endDate: "Aug 2022",
    company: "Self-Employed",
    description: `
      During this period, I took on various freelance projects, gaining diverse experience in client communication, project management, and custom web development.
      It was a valuable experience in self-management and delivering bespoke solutions.
    `,
    bulletPoints: [
      "Designed and developed custom websites for small businesses and individuals.",
      "Utilized WordPress, HTML, CSS, and JavaScript to create responsive and user-friendly sites.",
      "Managed client expectations, gathered requirements, and provided ongoing support.",
      "Focused on SEO best practices to improve website visibility.",
    ],
    img: "https://placehold.co/100x100/606060/FFFFFF?text=Free",
    altImg: "https://placehold.co/100x100/707070/FFFFFF?text=Free_ALT",
  },
];
