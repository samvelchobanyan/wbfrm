let html_str = /*html */`
    <div class="header_menu">
        <div>news</div><div>blog</div>
    </div>
`
return{
    fragment:renderBlock(html_str),
    html: html_str
};