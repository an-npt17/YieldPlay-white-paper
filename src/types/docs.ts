export interface DocSection {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
}

export type DocsData = Record<string, DocSection>;
