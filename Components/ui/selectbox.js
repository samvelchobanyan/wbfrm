// ui-select.js
export class UISelect extends HTMLElement {
    static get observedAttributes() {
      return ['options', 'value', 'placeholder', 'class'];
    }
  
    connectedCallback() {
      if (!this._open) this._open = false;
      this.render();
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    getTemplate({ label, options, value, isOpen, cls }) {
      const display = value || label || 'Select...';
      const menuClass = isOpen ? 'menu open' : 'menu';
  
      return `
        <div class="select ${cls}">
          <div class="selected">${display}</div>
          <div class="${menuClass}">
            ${options.map(opt => {
              const val = typeof opt === 'object' ? opt.value : opt;
              const txt = typeof opt === 'object' ? opt.label : opt;
              return `<div class="option" data-value="${val}">${txt}</div>`;
            }).join('')}
          </div>
        </div>
      `;
    }
  
    render() {
      const raw = this.getAttribute('options') || '[]';
      const placeholder = this.getAttribute('placeholder') || '';
      const cls = this.getAttribute('class') || '';
      const value = this.getAttribute('value') || '';
  
      let options = [];
      try {
        options = JSON.parse(raw);
      } catch (e) {
        console.warn('Invalid JSON for <ui-select> options');
      }
  
      this.innerHTML = this.getTemplate({
        label: placeholder,
        options,
        value,
        isOpen: this._open,
        cls,
      });
  
      this.addListeners(); // important!
    }
  
    addListeners() {
      const selected = this.querySelector('.selected');
      const options = this.querySelectorAll('.option');
  
      selected?.addEventListener('click', (e) => {
        e.stopPropagation();
        this._open = !this._open;
        this.render();
      });
  
      options.forEach(opt => {
        opt.addEventListener('click', (e) => {
          const val = opt.getAttribute('data-value');
          this.setAttribute('value', val);
          this._open = false;
          this.dispatchEvent(new CustomEvent('change', {
            detail: { value: val },
            bubbles: true
          }));
          this.render();
        });
      });
  
      document.addEventListener('click', this._closeOutside = (e) => {
        if (!this.contains(e.target) && this._open) {
          this._open = false;
          this.render();
        }
      });
    }
  
    disconnectedCallback() {
      document.removeEventListener('click', this._closeOutside);
    }
  }
  
  customElements.define('ui-select', UISelect);