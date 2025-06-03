import blog from './Pages/blog.js';
import news from "./Pages/news.js"
import dashboard from "./Blocks/dashboard.js"
import influencer_page from "./Pages/influencer.js"
import {render, renderBlock} from './utils.js';
// import "./Components/input.js"
// const app = document.getElementById("app");

const head = document.getElementById('head');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main-content');
const footer = document.getElementById('footer');

page.base('/wbfrm');
page('/news', news_cb);
page('/influencer', influencer_cb);
page('/',()=>{render(dashboard().html,main)});
page();


function page1_cb(){
  main.replaceChildren(blog({name:'header from blogs'}))
}
function news_cb(){
  console.log('news cb');
  
  main.replaceChildren(news({name:'newsic sarqac header'}))
}
function influencer_cb(){
  console.log('home',dashboard().html);
  
  main.replaceChildren(influencer_page().fragment)
}


