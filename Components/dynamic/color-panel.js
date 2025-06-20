// components/dynamic/color-panel.js
import { store } from '../../core/store.js';

export class ColorPanel extends HTMLElement {
  connectedCallback() {
    this._unsubscribe = store.subscribe(state => {
      this.render(state.color);
    });
  }

  disconnectedCallback() {
    this._unsubscribe?.();
  }

  getTemplate(color) {
    return `
      <div class="panel-box" style="
        width: 80px;
        height: 45px;
        border: 1px solid #aaa;
        border-radius: 6px;
        background-color: ${color};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      ">
        ${color.toUpperCase()}
      </div>
    `;
  }

  render(color) {
    this.innerHTML = this.getTemplate(color);
  }
}

customElements.define('color-panel', ColorPanel);
