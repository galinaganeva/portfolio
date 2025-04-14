import './style.css';
import projectsData from './data/projects.json';

interface Project {
  id: number;
  number: string;
  name: string;
  tools: string[];
  previewImg: string;
  previewDesc: string;
}

document.addEventListener('DOMContentLoaded',() => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header>
        <div class="logo-container">
          <a href="/portfolio/index.html" class="logo">GALINA GANEVA</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/portfolio/GalinaGaneva_CV.pdf" target="_blank">
                <div class="link-content">
                  <p>Resume</p>
                  <img src="/portfolio/header-arrow.svg" width="28" height="28" />
                </div>
                <div class="link-content-duplicate">
                  <p>Resume</p>
                  <img src="/portfolio/header-arrow.svg" width="28" height="28" />
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    <main id="main">
    </main>
    <footer>
      <p>2025</p>
      <p>Galina Ganeva</p>
    </footer>
  `;
});

// Hero section
const heroSection = `
  <section style="width: 100%; ">
    <div class="hero-container">
      <h1 class="hero-title left" style="animation-delay: 0s;">Less Noise,</h1>
      <h1 class="hero-title middle" style="animation-delay: 0.2s;">More Clarity,</h1>
      <h1 class="hero-title right" style="animation-delay: 0.4s;">Bold Impact.</h1>
    </div>
    <div class="spline-container" style="width: 100vw; overflow:hidden; top: 81px;">
      <div class="spline-container">
        <spline-viewer
          url="https://prod.spline.design/K-5M7t3eeTR7hjzy/scene.splinecode"
        ></spline-viewer>
      </div>
    </div>
  </section>
`;

// About section
const aboutSection = `
  <section class="about-section">
    <h1 class="about-text">
      I am a passionate designer in the iGaming industry, crafting
      visually engaging experiences that captivate players and enhance
      brand identity.
    </h1>
  </section>
`;

// Helper to generate a single project item
const generateProjectItem = (project: Project, projectNumber : string): string => {
  return `
    <a class="project-container project-link" href="/portfolio/project/project.html?id=${project.id}">
      <div class="line"></div>
      <div class="project" data-project-id="${project.id}">
        <div class="project-number-container">
          <h3 class="project-number">${projectNumber}</h3>
          <img src="/portfolio/arrow.svg" class="arrow" alt="Arrow icon" />
        </div>
        <img class="preview-img not-landscape" src="${project.previewImg}" alt="${project.name}"/>
        <div class="project-info">
          <h2 class="project-name">${project.name}</h2>
          <div class="project-tools">
            ${project.tools.map(tool => `<h4 class="project-item">${tool}</h4>`).join('')}
          </div>
        </div>
        <div class="project-preview">
          <img class="preview-img" src="${project.previewImg}" alt="${project.name}"/>
          <p class="preview-text">${project.previewDesc}</p>
        </div>
        <p class="preview-text not-landscape">${project.previewDesc}</p>
      </div>
    </a>
  `;
};

// Modular function to generate all projects HTML
export const generateProjectsHTML = (): string => {
  const projects = projectsData.projects;
  const urlParams = new URLSearchParams(window.location.search);
  const currentProjectId = parseInt(urlParams.get('id') || '', 10);
  let html = `<section class="projects">`;

  // First project (in focus)
  if (projects.length > 0 && isNaN(currentProjectId)) {
    html += `<div class="project-focus">`;
    html += generateProjectItem(projects[0],"0" + 1);
    html += `</div>`;
  }

  // Group the remaining projects by two
  if (projects.length > 1) {
    for (let i = 1; i < projects.length; i += 2) {
      html += `<div class="project-group">`;
      html += generateProjectItem(projects[i], "0" + i);
      if (i + 1 < projects.length) {
        html += generateProjectItem(projects[i + 1], "0" + (i + 1));
      }
      html += `</div>`;
    }
  }

  html += `</section>`;
  return html;
};

// Add sections to main
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector<HTMLElement>('#main');
  if (main) {
    main.innerHTML += heroSection;
    main.innerHTML += aboutSection;
    main.innerHTML += generateProjectsHTML();
  }

  // Function to check element visibility
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  // Function to handle scroll events
  const handleScroll = () => {
    // Handle about text animation
    const aboutText = document.querySelector('.about-text');
    if (aboutText && !aboutText.classList.contains('visible')) {
      if (isElementInViewport(aboutText)) {
        aboutText.classList.add('visible');
      }
    }

    // Handle line animations
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
      if (!line.classList.contains('line-visible')) {
        if (isElementInViewport(line)) {
          line.classList.add('line-visible');
        }
      }
    });

    // Handle projects container animation
    const projectsContainer = document.querySelector('.projects');
    if (projectsContainer && !projectsContainer.classList.contains('line-visible')) {
      if (isElementInViewport(projectsContainer)) {
        projectsContainer.classList.add('line-visible');
      }
    }
  };

  // Initial check
  handleScroll();

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Handle spline viewer logo removal
  const splineViewer = document.querySelector('spline-viewer');
  if (splineViewer) {
    const logoElement = splineViewer.shadowRoot?.querySelector('#logo');
    if (logoElement) {
      logoElement.remove();
    }
  }
});

