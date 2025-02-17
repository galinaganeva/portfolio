export interface Tool {
  title: string;
  description: string;
}

export interface BaseSection {
  type: string;
}

export interface ProjectInfoSection extends BaseSection {
  type: 'projectInfo';
  title: string;
  description: string;
  visitSiteLink: string;
  visitSiteText: string;
  visitSiteIcon: string;
}

export interface ProjectToolsSection extends BaseSection {
  type: 'projectTools';
  tools: Tool[];
}

export interface ImageSection extends BaseSection {
  type: 'imageSection';
  src: string;
}

export interface TextSection extends BaseSection {
  type: 'textSection';
  title: string;
  description: string;
}

export interface PhotosSection extends BaseSection {
  type: 'photosSection';
  photos: string[];
}

export interface TestimonialSection extends BaseSection {
  type: 'testimonialSection';
  title: string;
  description: string;
}

export type Section = 
  | ProjectInfoSection 
  | ProjectToolsSection 
  | ImageSection 
  | TextSection 
  | PhotosSection 
  | TestimonialSection;

export interface Project {
  projectId: number;
  sections: Section[];
}

export interface ContentData {
  projects: Project[];
}