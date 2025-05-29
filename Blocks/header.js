import {renderBlock} from "../utils.js"
import "../Components/header-menu.js";  // ensure custom element is defined
export default (props) => {    
    console.log('header props',props);
    
        let html_str = /*html */`        
        <div style="width:100%; height:100px; background-color:red; color: white">
            this is a header ${props.name}            
            <header-menu></header-menu>
        </div>
        `
          
        return {
            fragment:renderBlock(html_str),
            html: html_str
          }; 
}