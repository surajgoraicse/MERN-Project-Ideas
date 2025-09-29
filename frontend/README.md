# 🚀 MERN Project Ideas Explorer

A simple and interactive frontend app that provides a curated list of project ideas to help you dive into building **real-world applications** using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
Each project is broken down into **manageable sub-problems**, making your learning journey smoother and more enjoyable.

## ✨ Features

- 📚 Collection of project ideas focused on MERN stack learning.
- 🔎 Filter and search functionality to quickly find projects.
- 🧩 Projects broken down into smaller sub-tasks for better clarity.
- 🎨 Modern UI with **Next.js**, **ShadCN**, and **Tailwind CSS**.

## 📂 Project Data Structure

All project ideas are stored in a single **TypeScript file**.  
This makes it easy to add, edit, or extend the list without touching the UI.

### Types

```ts
type Tech =
  | "REACT"
  | "MONGODB"
  | "NODE.JS"
  | "EXPRESS"
  | "SOCKET"
  | "GRAPHQL"
  | "GRPC"
  | "POSTGRES";

export type Tags = {
  level: "Begineer" | "Intermediate" | "Advanced";
  id: number;
};

export type ProjectItem = {
  title: string;
  longTitle: string;
  description: string;
  tag: Tags;
  techs?: Tech[];
};
```

### Example

```ts
{
  title: "Chat App",
  longTitle: "Real-time Chat Application with WebSocket",
  description: "Build a chat app where users can join rooms, send messages, and see typing indicators.",
  tag: { level: "Intermediate", id: 2 },
  techs: ["REACT", "NODE.JS", "SOCKET"]
}
```
