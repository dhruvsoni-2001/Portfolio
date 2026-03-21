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
    jobTitle: "Freelance Web Designer",
    startDate: "August 2025",
    endDate: "Present",
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
    // img: "https://placehold.co/100x100/606060/FFFFFF?text=Free",
    // altImg: "https://placehold.co/100x100/707070/FFFFFF?text=Free_ALT",
  },
  {
    id: 2,
    jobTitle: "Technical Operations Engineer",
    startDate: "May 2024",
    endDate: "August 2025",
    company: "OpsXpress LLP",
    description: `
      Worked as a Technical Operations Engineer managing client infrastructure, monitoring systems, and ensuring high availability of enterprise applications. 
      Played a key role in incident management, cross-team coordination, and operational optimization while gaining hands-on exposure to cloud platforms like AWS and monitoring tools like Datadog. 
      `,
    bulletPoints: [
      "Monitored and managed enterprise-level infrastructure, ensuring system reliability and performance across multiple client environments.",
      "Handled end-to-end incident management including detection, analysis, resolution, and reporting of critical production issues.",
      "Created, tracked, and resolved 300+ incident and service tickets, improving response time and operational efficiency.",
      "Collaborated closely with development teams and leadership to diagnose issues, implement fixes, and streamline operational workflows.",
      "Implemented and utilized monitoring tools such as Datadog to enhance system visibility, alerting, and performance tracking.",
      "Developed detailed documentation, SOPs, and troubleshooting guides to standardize operational processes.",
      "Prepared reports and presentations for stakeholders, providing insights into system performance and incident trends.",
      "Gained hands-on experience with AWS services, contributing to cloud infrastructure management and optimization.",
      "Completed HIPAA training to ensure compliance with data security and privacy standards in client environments."
    ],
    img: "/opsLogo.jpg", // Placeholder for company logo or relevant icon
    altImg: "/opsLogo.jpg",
  },
  {
    id: 3,
    jobTitle: "Junior .NET Developer",
    startDate: "January 2023",
    endDate: "March 2024",
    company: "WebLine India Pvt. Ltd",
    description: `
      Worked as a Junior .NET Developer contributing to backend API development, system maintenance, and application enhancements. 
      Gained hands-on experience in building scalable Web APIs, implementing authentication mechanisms, and working with relational databases.
    `,
    bulletPoints: [
      "Developed and maintained scalable RESTful APIs using .NET Core Web API, enabling efficient backend operations and seamless data exchange.",
      "Implemented JWT-based authentication and authorization to ensure secure user access and robust session management.",
      "Designed and optimized CRUD operations in MS SQL Server, improving query performance and overall data handling efficiency.",
      "Maintained and refactored a legacy VB.NET application, improving system stability while ensuring continuity of critical business features.",
      "Collaborated with cross-functional teams to diagnose and resolve complex application-level and system-level issues.",
      "Integrated React.js frontend with backend APIs, ensuring smooth data flow and consistent user experience across the application.",
      "Diagnosed and resolved device recognition issues by fixing Windows registry conflicts in a desktop application environment.",
      "Utilized Git for version control, contributing to collaborative development workflows and efficient code management.",
      "Troubleshot and resolved production issues, improving system reliability and minimizing downtime.",
      "Applied clean coding principles to build maintainable, scalable, and production-ready code.",
      "Demonstrated strong adaptability by quickly learning new technologies and effectively handling evolving project requirements.",
    ],
    img: "/weblineindia_logo.jpg",
    // altImg: "/weblineindia_logo.jpg",
  },
  // {
  //   id: 3,
  //   jobTitle: "Freelance Web Designer",
  //   startDate: "Apr 2021",
  //   endDate: "Aug 2022",
  //   company: "Self-Employed",
  //   description: `
  //     During this period, I took on various freelance projects, gaining diverse experience in client communication, project management, and custom web development.
  //     It was a valuable experience in self-management and delivering bespoke solutions.
  //   `,
  //   bulletPoints: [
  //     "Designed and developed custom websites for small businesses and individuals.",
  //     "Utilized WordPress, HTML, CSS, and JavaScript to create responsive and user-friendly sites.",
  //     "Managed client expectations, gathered requirements, and provided ongoing support.",
  //     "Focused on SEO best practices to improve website visibility.",
  //   ],
  //   img: "https://placehold.co/100x100/606060/FFFFFF?text=Free",
  //   altImg: "https://placehold.co/100x100/707070/FFFFFF?text=Free_ALT",
  // },
];
