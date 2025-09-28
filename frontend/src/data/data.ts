export const heroData = {
	title: "MERN Projects",
	description:
		"Project ideas to take you from beginner to advanced in Fullstack with MERN.",
	longDescription:
		"Below are project ideas designed to help you gain hands-on experience in building real-world applications with MongoDB, Express.js, React, and Node.js. Each project is structured into manageable components, making the learning process more practical, focused, and engaging.",
};

type Tech =
	| "REACT"
	| "MONGODB"
	| "NODE.JS"
	| "EXPRESS"
	| "SOCKET"
	| "GRAPHQL"
	| "GRPC"
	| "POSTGRES";

export type Tags = "Begineer" | "Intermediate" | "Advanced";

export type ProjectItem = {
	title: string;
	longTitle: string;
	description: string;
	tag: Tags;
	techs?: Tech[];
};
export const projectsList: ProjectItem[] = [
	{
		title: "Project 1",
		longTitle: "Project 1 Long Title",
		description: "Description 1",
		tag: "Begineer",
		techs: ["REACT"],
	},
	{
		title: "Project 2",
		longTitle: "Project 2 Long Title",
		description: "Description 2",
		tag: "Intermediate",
		techs: ["NODE.JS", "EXPRESS"],
	},
	{
		title: "Project 3",
		longTitle: "Project 3 Long Title",
		description: "Description 3",
		tag: "Advanced",
		techs: ["GRAPHQL", "POSTGRES"],
	},
	{
		title: "Project 4",
		longTitle: "Project 4 Long Title",
		description: "Description 4",
		tag: "Begineer",
		techs: ["REACT", "MONGODB"],
	},
	{
		title: "Project 5",
		longTitle: "Project 5 Long Title",
		description: "Description 5",
		tag: "Intermediate",
		techs: ["NODE.JS", "SOCKET"],
	},
	{
		title: "Project 6",
		longTitle: "Project 6 Long Title",
		description: "Description 6",
		tag: "Advanced",
		techs: ["GRPC", "POSTGRES"],
	},
	{
		title: "Project 7",
		longTitle: "Project 7 Long Title",
		description: "Description 7",
		tag: "Begineer",
		techs: ["REACT", "EXPRESS"],
	},
	{
		title: "Project 8",
		longTitle: "Project 8 Long Title",
		description: "Description 8",
		tag: "Intermediate",
		techs: ["MONGODB", "NODE.JS"],
	},
	{
		title: "Project 9",
		longTitle: "Project 9 Long Title",
		description: "Description 9",
		tag: "Advanced",
		techs: ["SOCKET", "GRAPHQL"],
	},
	{
		title: "Project 10",
		longTitle: "Project 10 Long Title",
		description: "Description 10",
		tag: "Begineer",
		techs: ["REACT"],
	},
	{
		title: "Project 11",
		longTitle: "Project 11 Long Title",
		description: "Description 11",
		tag: "Intermediate",
		techs: ["NODE.JS", "EXPRESS"],
	},
	{
		title: "Project 12",
		longTitle: "Project 12 Long Title",
		description: "Description 12",
		tag: "Advanced",
		techs: ["GRAPHQL", "POSTGRES"],
	},
	{
		title: "Project 13",
		longTitle: "Project 13 Long Title",
		description: "Description 13",
		tag: "Begineer",
		techs: ["REACT", "MONGODB"],
	},
	{
		title: "Project 14",
		longTitle: "Project 14 Long Title",
		description: "Description 14",
		tag: "Intermediate",
		techs: ["NODE.JS", "SOCKET"],
	},
	{
		title: "Project 15",
		longTitle: "Project 15 Long Title",
		description: "Description 15",
		tag: "Advanced",
		techs: ["GRPC", "POSTGRES"],
	},
	{
		title: "Project 16",
		longTitle: "Project 16 Long Title",
		description: "Description 16",
		tag: "Begineer",
		techs: ["REACT", "EXPRESS"],
	},
	{
		title: "Project 17",
		longTitle: "Project 17 Long Title",
		description: "Description 17",
		tag: "Intermediate",
		techs: ["MONGODB", "NODE.JS"],
	},
	{
		title: "Project 18",
		longTitle: "Project 18 Long Title",
		description: "Description 18",
		tag: "Advanced",
		techs: ["SOCKET", "GRAPHQL"],
	},
	{
		title: "Project 19",
		longTitle: "Project 19 Long Title",
		description: "Description 19",
		tag: "Begineer",
		techs: ["REACT"],
	},
	{
		title: "Project 20",
		longTitle: "Project 20 Long Title",
		description: "Description 20",
		tag: "Intermediate",
		techs: ["NODE.JS", "EXPRESS"],
	},
	{
		title: "Project 21",
		longTitle: "Project 21 Long Title",
		description: "Description 21",
		tag: "Advanced",
		techs: ["GRAPHQL", "POSTGRES"],
	},
	{
		title: "Project 22",
		longTitle: "Project 22 Long Title",
		description: "Description 22",
		tag: "Begineer",
		techs: ["REACT", "MONGODB"],
	},
	{
		title: "Project 23",
		longTitle: "Project 23 Long Title",
		description: "Description 23",
		tag: "Intermediate",
		techs: ["NODE.JS", "SOCKET"],
	},
	{
		title: "Project 24",
		longTitle: "Project 24 Long Title",
		description: "Description 24",
		tag: "Advanced",
		techs: ["GRPC", "POSTGRES"],
	},
	{
		title: "Project 25",
		longTitle: "Project 25 Long Title",
		description: "Description 25",
		tag: "Begineer",
		techs: ["REACT", "EXPRESS"],
	},
	{
		title: "Project 26",
		longTitle: "Project 26 Long Title",
		description: "Description 26",
		tag: "Intermediate",
		techs: ["MONGODB", "NODE.JS"],
	},
	{
		title: "Project 27",
		longTitle: "Project 27 Long Title",
		description: "Description 27",
		tag: "Advanced",
		techs: ["SOCKET", "GRAPHQL"],
	},
	{
		title: "Project 28",
		longTitle: "Project 28 Long Title",
		description: "Description 28",
		tag: "Begineer",
		techs: ["REACT"],
	},
	{
		title: "Project 29",
		longTitle: "Project 29 Long Title",
		description: "Description 29",
		tag: "Intermediate",
		techs: ["NODE.JS", "EXPRESS"],
	},
	{
		title: "Project 30",
		longTitle: "Project 30 Long Title",
		description: "Description 30",
		tag: "Advanced",
		techs: ["GRAPHQL", "POSTGRES"],
	},
];
