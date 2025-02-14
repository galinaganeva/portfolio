import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <div class="logo-container">
      <h1 class="logo">GALINA GANEVA</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#">ABOUT ME</a></li>
        <li><a href="#">RESUME</a></li>
      </ul>
    </nav>
  </header>
  <main id="main">
    <section style="position: relative">
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
  </main>
`;

document.addEventListener('DOMContentLoaded', () => {
  const splineViewer = document.querySelector('spline-viewer');
  if (splineViewer) {
    const logoElement = splineViewer.shadowRoot?.querySelector('#logo');
    if (logoElement) {
      logoElement.remove();
    }
  }
});
