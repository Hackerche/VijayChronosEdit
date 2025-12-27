
export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  thumbnail: string;
  description: string;
  tags: string[];
  videoUrl?: string;
}

export interface GeminiStory {
  hook: string;
  editorNote: string;
}
