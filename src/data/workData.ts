// data/workData.ts

export interface WorkItem {
  id: number;
  title: string;
  type: "image" | "youtube" | "local";
  url: string;
}

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Corporate Events",
    type: "youtube",
    url: "https://www.youtube.com/embed/NGbvTeAXVrA?si=3d52TnaQTYPl5_Jz",
  },
  {
    id: 2,
    title: "Music Video",
    type: "youtube",
    url: "https://www.youtube.com/embed/K-q3RPpj-uc?si=x_XGoLsP5znbVLhf", // YouTube embed link
  },
  {
    id: 3,
    title: "Wedding",
    type: "youtube",
    url: "https://www.youtube.com/embed/ELzqqBic87Y?si=uIujbERICCAqSQVo", // YouTube embed link
  },
  {
    id: 4,
    title: "Corporate Events",
    type: "youtube",
    url: "https://www.youtube.com/embed/X8HLKuXAUHQ?si=JMX6YWbTSWj7tANP", // Must exist in /public/assets/videos/
  },
];
