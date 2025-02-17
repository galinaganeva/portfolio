export class ProgressBar {
  private progressBar: HTMLDivElement;

  constructor() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    this.progressBar = document.createElement('div');
    this.progressBar.className = 'progress-bar';
    progressContainer.appendChild(this.progressBar);

    const header = document.querySelector('header');
    header?.insertAdjacentElement('afterend', progressContainer);

    this.initScrollListener();
  }

  private initScrollListener(): void {
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      this.progressBar.style.width = `${scrollPercent}%`;
    });
  }
}