// src/components/header-menu.js
import { BaseElement } from '../core/base-element.js';

export class HeaderMenu extends BaseElement {
  render() {
    this.innerHTML = `
      <style>
        .header_menu {
          display: flex;
          gap: 1rem;
          font-weight: bold;
        }
        .header_menu div:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      </style>
      <div class="header_menu">
        <div>news</div>
        <div>blog</div>
      </div>
    `;
  }
}

customElements.define('header-menu', HeaderMenu);
