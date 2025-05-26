import {renderBlock} from "../utils.js"

export default (props) => {    
    console.log('header props',props);
    
        let html_str = `        
        <div style="width:100%; height:100px; background-color:red">
            this is a header ${props.name}
        </div>
        `
        // return renderBlock(html_str);   
        return {
            fragment:renderBlock(html_str),
            html: html_str
          }; 
}