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

type Tags = "Begineer" | "Intermediate" | "Advanced";

export type ProjectItem = {
	title: string;
	longTitle: string;
	description: string;
	tag: Tags;
	techs?: Tech[];
};
export const projectsList: ProjectItem[] = [
	{
		title: "Chat App",
		longTitle: "Scalable Chat App",
		description: "dss",
		tag: "Advanced",
		techs: ["EXPRESS", "NODE.JS"],
	},
	{
		title: "Chat App",
		longTitle: "Scalable Chat App",
		description: "dss",
		tag: "Advanced",
		techs: ["EXPRESS", "NODE.JS"],
	},
];
