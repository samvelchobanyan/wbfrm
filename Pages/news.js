import {renderBlock} from "../utils.js"
import header from "../Blocks/header.js"

export default (props) => {
    let html_str = /*html */`
        ${header(props.name).html}        
        <div style="width:100%; height:100px; background-color:#ccc">
            News title
        </div>
        <div style="width:100%; height:100px; background-color:#ccc">
            esel de newsi texta
        </div>
        `
    return renderBlock(html_str);
}
