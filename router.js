import blog from './Pages/blog.js';
import news from "./Pages/news.js"
import home from "./Blocks/main.js"
import {render, renderBlock} from './utils.js';
// import "./Components/input.js"
// const app = document.getElementById("app");

const head = document.getElementById('head');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');
const footer = document.getElementById('footer');

page.base('/');
page('/page1', ()=>{app.replaceChildren(blog({name:'header from blogs'}))});
page('/news', news_cb);
page('/',()=>{render(home,main)});
page();


function page1_cb(){
  main.replaceChildren(blog({name:'header from blogs'}))
}
function news_cb(){
  main.replaceChildren(news({name:'newsic sarqac header'}))
}

