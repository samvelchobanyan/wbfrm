export default (props) => {
    let html_str = /*html*/`        
                <section id="main-content">
                  <section class="wrapper site-min-height">
                    <test-component>adsadasdasd123123</test-component>
                  </section>
                </section>
                `
    // return html_str;
    return {
              fragment:renderBlock(html_str),
              html: html_str
            };
}