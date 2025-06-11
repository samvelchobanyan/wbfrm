import { StaticElement } from '../../core/static-element.js';

class ChartCard extends StaticElement {
  render() {
    return /*html*/`
    <div class="card">
        <div class="card-body">
            <h5 class="text-muted">Total Revenue</h5>
            <div class="metric-value d-inline-block">
                <h1 class="mb-1">${this.getAttribute('value')}</h1>
            </div>
            <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                <span><i class="fa fa-fw fa-arrow-up"></i></span><span>${this.getAttribute('percent')}</span>
            </div>
        </div>
        <div id="sparkline-revenue"></div>
    </div>
    `;
  }
}

customElements.define('chart-card', ChartCard);