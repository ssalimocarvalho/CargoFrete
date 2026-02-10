
export interface ServiceSegment {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  client: string;
  title: string;
  description: string;
  image: string;
}
