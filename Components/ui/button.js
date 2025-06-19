export class UIButton extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'icon', 'type', 'class'];
    }
  
    connectedCallback() {
      this.render();
      this.querySelector('.wrapper')?.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('click', {
          bubbles: true,
          detail: { type: this.getAttribute('type') || 'default' },
        }));
      });
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    getTemplate({ label, icon, cls }) {
      return `
        <div class="wrapper ${cls}">
          ${icon ? `<div class="icon"><img src="${icon}" alt=""></div>` : ''}
          <div class="button">${label}</div>
        </div>
      `;
    }
  
    render() {
      const label = this.getAttribute('label') || '';
      const icon = this.getAttribute('icon') || '';
      const cls = this.getAttribute('class') || '';
      this.innerHTML = this.getTemplate({ label, icon, cls });
    }
  }
  
  customElements.define('ui-button', UIButton);