import {renderBlock} from '../utils.js'
export default (props) => {
    let html_str = /*html */`
        <div class="card">
            <div class="card-body">
                <h5 class="text-muted">Total Revenue</h5>
                <div class="metric-value d-inline-block">
                    <h1 class="mb-1">props.value</h1>
                </div>
                <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                    <span><i class="fa fa-fw fa-arrow-up"></i></span><span>props.percent</span>
                </div>
            </div>
            <div id="sparkline-revenue"></div>
        </div>
    `
    return{
        fragment:renderBlock(html_str),
        html: html_str
    };
};