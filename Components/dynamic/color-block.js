import { store } from '../../core/store.js';

export class ColorBlock extends HTMLElement {
  connectedCallback() {
    const state = store.getState();

    this.style.display = 'inline-block';
    this.style.width = '45px';
    this.style.height = '45px';
    this.style.border = '1px solid #ccc';
    this.style.borderRadius = '8px';
    this.style.backgroundColor = state.color;
  }
}

customElements.define('color-block', ColorBlock);