import blog from './Pages/blog.js';
import news from "./Pages/news.js"
import dashboard from "./Pages/dashboard.js"
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
page('/',dashboard_cb);
page();


function page1_cb(){
  main.replaceChildren(blog({name:'header from blogs'}))
}
function news_cb(){
  console.log('news cb');
  
  main.replaceChildren(news({name:'newsic sarqac header'}))
}
function influencer_cb(){
  console.log('influencer route');
  
  main.replaceChildren(influencer_page().fragment)
}

async function dashboard_cb(){
  console.log('dashboard route');
  main.innerHTML = `<div class="card p-4 text-center">Loading…</div>`;

  const pageObj = await dashboard();
  main.replaceChildren(pageObj.fragment)
  if (typeof pageObj.init === 'function') {
        pageObj.init();
  }
  

  // await import('./assets/libs/js/dashboard-ecommerce.js');
}



