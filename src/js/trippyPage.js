import { triggerTrippy, typeWriter } from './animations.js';

export class TrippyPage {
  constructor() {
    this.createElements();
    this.bindEvents();
  }

  createElements() {
    // Create trippy page
    this.page = document.createElement('div');
    this.page.className = 'trippy-page';
    this.page.innerHTML = `
      <h1 class="trippy-title">The Infinite Spiral of Unfolding Nothingness</h1>
      <div class="trippy-text"></div>
      <button class="neon-button">I TOLD YOU TO NOT CLICK, GO BACK TO THE TV</button>
    `;
    
    // Create main button
    this.mainButton = document.createElement('button');
    this.mainButton.className = 'neon-button';
    this.mainButton.textContent = 'READY FOR THE TRIP, HOOPERS? DO NOT CLICK HERE';
    
    // Add elements to DOM
    document.querySelector('.coming-soon').after(this.mainButton);
    document.body.appendChild(this.page);
    
    // Store elements
    this.trippyText = this.page.querySelector('.trippy-text');
    this.backButton = this.page.querySelector('.neon-button');
  }

  bindEvents() {
    this.mainButton.addEventListener('click', () => this.showTrippyPage());
    this.backButton.addEventListener('click', () => this.hideTrippyPage());
  }

  async showTrippyPage() {
    await triggerTrippy(document.body);
    this.page.classList.add('active');
    await typeWriter(
      this.trippyText,
      "In the depths of digital consciousness, where pixels dance and time dissolves... " +
      "Welcome to the space between spaces, where reality bends and imagination transcends... " +
      "Remember: the TV is not just a window, it's a portal to infinite possibilities..."
    );
  }

  async hideTrippyPage() {
    await triggerTrippy(document.body);
    this.page.classList.remove('active');
    this.trippyText.textContent = '';
  }
}