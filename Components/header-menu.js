// src/components/header-menu.js
import '../Components/ui/selectbox.js';
import { BaseElement } from '../core/base-element.js';

export class HeaderMenu extends BaseElement {
  render() {
    this.innerHTML = /*html*/`
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
        <ui-select
          placeholder="Choose a color"
          class="border-radius stroke"
          options='[{"label":"Red","value":"red"}, {"label":"Blue","value":"blue"}, {"label":"Green","value":"green"}]'
        ></ui-select>
      </div>
    `;
  }
}

customElements.define('header-menu', HeaderMenu);
