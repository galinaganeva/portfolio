import './style.css';

document.addEventListener('DOMContentLoaded',() => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header>
      <div class="logo-container">
        <h1 class="logo">GALINA GANEVA</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">RESUME</a></li>
          <img src="/portfolio-new/arrow.svg" width="32" height="32" />
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
  <section style="position: relative; width: 100%;">
    <div class="hero-container">
      <h1 class="hero-title left">Less Noise,</h1>
      <h1 class="hero-title middle">More Clarity,</h1>
      <h1 class="hero-title right">Bold Impact.</h1>
    </div>
    <div class="spline-container">
      <spline-viewer
        url="https://prod.spline.design/K-5M7t3eeTR7hjzy/scene.splinecode"
      ></spline-viewer>
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

// Projects data
const projects = [
  {
    id: 1,
    number: "01",
    name: "Grandz Bet",
    tools: ["Website", "Figma", "2023"]
  },
  {
    id: 2,
    number: "02",
    name: "Space Fortuna",
    tools: ["Website", "Figma", "2023"]
  },
  {
    id: 3,
    number: "03",
    name: "Grandz Race",
    tools: ["Website", "Figma", "2023"]
  },
  {
    id: 4,
    number: "04",
    name: "Tortuga",
    tools: ["Landing Page", "Webflow", "2023"]
  },
  {
    id: 5,
    number: "05",
    name: "Casino En Ligne Nouveau",
    tools: ["Website", "Figma", "2023"]
  }
];

// Generate projects HTML
const generateProjectsHTML = () => {
  return `
    <section class="projects">
      ${projects.map(project => `
        <div class="project" key="${project.id}">
          <h3 class="project-number">${project.number}</h3>
          <div class="project-info">
            <h2 class="project-name">${project.name}</h2>
            <div class="project-tools">
              ${project.tools.map(tool => `
                <h4 class="project-item">${tool}</h4>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </section>
  `;
};

// Add sections to main
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector<HTMLElement>('#main');
  if (main) {
    main.innerHTML += heroSection;
    main.innerHTML += aboutSection;
    main.innerHTML += generateProjectsHTML();
  }

  // Handle spline viewer logo removal
  const splineViewer = document.querySelector('spline-viewer');
  if (splineViewer) {
    const logoElement = splineViewer.shadowRoot?.querySelector('#logo');
    if (logoElement) {
      logoElement.remove();
    }
  }

  const projectElements = document.querySelectorAll('.project');
  projectElements.forEach((projectElement, index) => {
    projectElement.addEventListener('click', () => {
      window.location.href = `/portfolio-new/project${index + 1}/project${index + 1}.html`;
    });
  });
});

