export default (props) => {
    let html_str = `        
                <section id="main-content">
                  <section class="wrapper site-min-height">
                    <test-component>adsadasdasd</test-component>
                  </section>
                </section>
                `
    // return html_str;
    return {
              fragment:renderBlock(html_str),
              html: html_str
            };
}