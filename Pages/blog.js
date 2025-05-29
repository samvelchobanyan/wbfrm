import {renderBlock} from "../utils.js"
import header from "../Blocks/header.js"

export default (props) => {
  console.log('blog');
  
  let html_str = /*html */`
        ${header(props.name).html}        
        <div style="width:100%; height:100px; background-color:#ccc">
            This is a blog page
        </div>
        <div style="width:100%; height:100px; background-color:#ccc">
            esel de textna Blog-i
        </div>
        `
  return renderBlock(html_str);
}
