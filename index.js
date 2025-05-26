import "./router.js"
import header from "./Blocks/header.js";
import sidebar from "./Blocks/sidebar.js";
import footer from "./Blocks/footer.js";
// import news from "./Pages/news.js"
import {renderBlock, render} from "./utils.js"

//routing-ic page reloada linum, aisinqn stex app-ic hanvum inch ka u appenda linum nor page
//kara lini tarberak vor ete chenq uzum url-y poxeluc sax ejy reload anenq, nshenq konkret hasceatirin
//aisinqn rout-i functiony kam page update ani, kam ete amboxj page chi znum, block update ani
const head = document.getElementById('head');
const sidebar_container = document.getElementById('sidebar');
const main = document.getElementById('main-content');
const footer_container = document.getElementById('footer');

console.log('defining variables',main);

render(header({'name':'testing123'}).html,head);
render(sidebar().html,sidebar_container)
render(footer().html,footer_container)
// app.append('asdasdasd')
