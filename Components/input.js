class TComponent extends HTMLElement{
  constructor() {
    console.log('component constructor');
    super();
    this.textContent = 'new web component for test'
  }
}
customElements.define('test-component', TComponent)
