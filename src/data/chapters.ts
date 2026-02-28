import type { MindMapNode } from "@/types/mindmap";
import { federalSystemMindMap } from "./federalSystemMindMap";

export interface Chapter {
  id: string;
  title: string;
  subject?: string;
  mindMap: MindMapNode;
}

export const chapters: Chapter[] = [
  {
    id: "federal-system",
    title: "Federal System",
    subject: "Polity",
    mindMap: federalSystemMindMap,
  },
  // Add more chapters here, e.g. Fundamental Rights, DPSP, etc.
];
