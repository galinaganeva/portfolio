import './style.css';
import content from './data/content.json';

const generateSection = (section: any) => {
  switch (section.type) {
    case "projectInfo":
      return `
        <section class="section-project-info">
          <div class="text-content">
            <div class="title-desc-container">
              <h1 class="section-title">${section.title}</h1>
              <h2 class="section-desc">${section.description}</h2>
            </div>
            <div class="visit-site-container">
            <a href="${section.visitSiteLink}" style="text-decoration: none;
    display: flex
;" target="_blank">
              <h3 class="visit-site">${section.visitSiteText}</h3>
              <img class="visit-site-icon" src="${section.visitSiteIcon}" />
            </a>
            </div>
          </div>
        </section>
      `;
    case "projectTools":
      return `
        <section class="section-project-tools">
          ${section.tools.map((tool: any) => `
            <div class="tool-container">
              <h3 class="tool-title">${tool.title}</h3>
              <h3 class="tool-desc">${tool.description}</h3>
            </div>
          `).join('')}
        </section>
      `;
    case "imageSection":
      return `
        <section class="section-image">
          <img class="hero-image" src="${section.src}" />
        </section>
      `;
    case "textSection":
      return `
        <section class="section-text">
          <h3 class="section-text-title">${section.title}</h3>
          <h4 class="section-text-desc">${section.description}</h4>
        </section>
      `;
    case "photosSection":
      return `
        <section class="section-photos">
          ${section.photos.map((photo: string) => `
            <img class="section-photos-photo" src="${photo}" />
          `).join('')}
        </section>
      `;
    case "testimonialSection":
      return `
        <section class="section-testimonial">
          <div class="testimonial-container">
            <h3 class="testimonial-title">${section.title}</h3>
            <h4 class="testimonial-desc">${section.description}</h4>
          </div>
        </section>
      `;
    default:
      return '';
  }
};
const generateMainContent = (sections: any[]) => {
  return sections.map(section => generateSection(section)).join('');
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-container';
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressContainer.appendChild(progressBar);
  header?.insertAdjacentElement('afterend', progressContainer);

  // Add scroll listener to update progress bar
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });
  
  // Extract project ID from the URL path
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get('id') || '1', 10);

  // Find the project with the matching projectId
  const project = content.projects.find((project: any) => project.projectId === projectId);

  if (!project) {
    console.error("Project not found");
    return;
  }

  const main = document.querySelector<HTMLElement>('#main');
  if (main) {
    main.innerHTML = generateMainContent(project.sections);
  }
});