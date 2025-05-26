import {renderBlock} from "../utils.js"

export default (props) => {
        let html_str = `        
        <footer class="site-footer">
          <div class="text-center">
              2014 - Alvarez.is
              <a href="blank.html#" class="go-top">
                  <i class="fa fa-angle-up"></i>
              </a>
          </div>
      </footer>
        `
        return {
            fragment:renderBlock(html_str),
            html: html_str
        };
}
