export function renderBlock(html_str){
    return document.createRange().createContextualFragment(html_str)
}

export function render(html_str,ctx){
    ctx.replaceChildren(renderBlock(html_str));
}

