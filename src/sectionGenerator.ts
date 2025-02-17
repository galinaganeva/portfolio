import './style.css';
import content from './data/content.json';
import { Section, ContentData, ProjectInfoSection, ProjectToolsSection, ImageSection, PhotosSection, TestimonialSection, TextSection } from './types/section';
import { ProgressBar } from './utils/progressBar';

class SectionGenerator {
  private static generateProjectInfo(section: ProjectInfoSection): string {
    return `
      <section class="section-project-info">
        <div class="text-content">
          <div class="title-desc-container">
            <h1 class="section-title">${section.title}</h1>
            <h2 class="section-desc">${section.description}</h2>
          </div>
          <a href="${section.visitSiteLink}" class="visit-site-link" target="_blank">
            <div class="visit-site-wrapper">
              <div class="visit-site-content">
                <h3 class="visit-site">${section.visitSiteText}</h3>
                <img class="visit-site-icon" src="${section.visitSiteIcon}" alt="Visit site" />
              </div>
              <div class="visit-site-content-duplicate">
                <h3 class="visit-site">${section.visitSiteText}</h3>
                <img class="visit-site-icon" src="${section.visitSiteIcon}" alt="Visit site" />
              </div>
            </div>
          </a>
        </div>
      </section>
    `;
}

  private static generateProjectTools(section: ProjectToolsSection): string {
    return `
      <section class="section-project-tools">
        ${section.tools.map(tool => `
          <div class="tool-container">
            <h3 class="tool-title">${tool.title}</h3>
            <h3 class="tool-desc">${tool.description}</h3>
          </div>
        `).join('')}
      </section>
    `;
  }

  private static generateImageSection(section: ImageSection): string {
    return `
      <section class="section-image">
        <img class="hero-image" src="${section.src}" alt="Project image" />
      </section>
    `;
  }

  private static generateTextSection(section: TextSection): string {
    return `
      <section class="section-text">
        <h3 class="section-text-title">${section.title}</h3>
        <h4 class="section-text-desc">${section.description}</h4>
      </section>
    `;
  }

  private static generatePhotosSection(section: PhotosSection): string {
    return `
      <section class="section-photos">
        ${section.photos.map(photo => `
          <img class="section-photos-photo" src="${photo}" alt="Project photo" />
        `).join('')}
      </section>
    `;
  }

  private static generateTestimonialSection(section: TestimonialSection): string {
    return `
      <section class="section-testimonial">
        <div class="testimonial-container">
          <h3 class="testimonial-title">${section.title}</h3>
          <h4 class="testimonial-desc">${section.description}</h4>
        </div>
      </section>
    `;
  }

  private static generateSection(section: Section): string {
    switch (section.type) {
      case 'projectInfo': return this.generateProjectInfo(section);
      case 'projectTools': return this.generateProjectTools(section);
      case 'imageSection': return this.generateImageSection(section);
      case 'textSection': return this.generateTextSection(section);
      case 'photosSection': return this.generatePhotosSection(section);
      case 'testimonialSection': return this.generateTestimonialSection(section);
      default: return '';
    }
  }

  public static generateMainContent(sections: Section[]): string {
    return sections.map(section => this.generateSection(section)).join('');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ProgressBar();
  
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get('id') || '1', 10);

  const typedContent = content as ContentData;
  const project = typedContent.projects.find(project => project.projectId === projectId);

  if (!project) {
    console.error("Project not found");
    return;
  }

  const main = document.querySelector<HTMLElement>('#main');
  if (main) {
    main.innerHTML = SectionGenerator.generateMainContent(project.sections);
  }
});