export interface ProjectEntry {
	id: number;
	startDate: string; // e.g., "2023-01-23" - will be displayed as the main title
	endDate: string; // e.g., "2024-02-28" or "Present"
	projectTitle: string;
	clientName: string;
	projectDescription: string; // Can contain multiple paragraphs or formatted text
	bulletPoints?: string[]; // Optional: For detailed responsibilities or achievements
	img?: string; // Optional: Image for the experience entry
	altImg?: string; // Optional: Alt image for the experience entry (if needed for hover/state changes)
}

export const projectData: ProjectEntry[] = [
	{
		id: 1,
		startDate: "2023-01-23",
		endDate: "2024-02-28",
		projectTitle: "Project Alpha",
		clientName: "Client A",
		projectDescription: "Description for Project Alpha.",
		bulletPoints: [
			"Developed feature X",
			"Implemented API integration",
			"Collaborated with team Y",
		],
		img: "https://placehold.co/100x100/A0A0A0/FFFFFF?text=TSI", // Placeholder for company logo or relevant icon
		altImg: "https://placehold.co/100x100/C0C0C0/FFFFFF?text=TSI_ALT",
	},
	{
		id: 2,
		startDate: "2024-03-01",
		endDate: "2024-12-31",
		projectTitle: "Project Beta",
		clientName: "Client B",
		projectDescription: "Description for Project Beta.",
		bulletPoints: [
			"Developed feature Y",
			"Implemented API integration",
			"Collaborated with team Z",
		],
		img: "https://placehold.co/100x100/808080/FFFFFF?text=IWS",
		altImg: "https://placehold.co/100x100/909090/FFFFFF?text=IWS_ALT",
	},
];
