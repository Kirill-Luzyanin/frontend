const strNewsTitle="Новость";
const strNewsSubtitle="Макдэвид побил рекорд по очкам для игроков в XXI веке";
const strNewsTime="03:00";

///

const news = document.createElement("div");
//news.classList.add("news");
news.setAttribute("class", "news");


// div news_title
const newsTitle = document.createElement("div");
newsTitle.classList.add("news_title");
//const textNewsTitle = document.createTextNode(strNewsTitle);
//newsTitle.appendChild(textNewsTitle);
newsTitle.textContent=strNewsTitle; // 15 и 16 строки заменили 17-ой
news.appendChild(newsTitle);

// h3
const newsSubtitle = document.createElement("h3");
newsSubtitle.classList.add("news_subtitle", "header");
newsSubtitle.textContent=strNewsSubtitle;
news.appendChild(newsSubtitle);

// div news_time
const newsTime = document.createElement("div");
newsTime.classList.add("news_time");
newsTime.textContent=strNewsTime;
news.appendChild(newsTime);


const main = document.getElementsByClassName("block_main");
//document.body.appendChild(news);

//main[0].appendChild(news);


/* вставка:
[опорный элемент].insertAdjacentElement(" ", [блок]);
"afterbegin" - После начала элемента (первый ребенок), в начало опорного блока
"afterend" - после(за) опорного элемента
"beforebegin" - перед опорным элементом 
"beforeend" - Перед концом элемента (последний ребенок), в конец опорного блока
*/

const pNews = main[0].querySelector(".block_up");
pNews.insertAdjacentElement("afterend", news);



document.querySelector("#btn1").addEventListener("click", ()=>{
  
    document.getElementsByClassName("block_main")[0].style.fontSize="30px";    
   
  }
);


document.querySelector("#btn2").addEventListener("click", ()=>{
    
    document.getElementsByClassName("main_title")[0].style.cssText = "font-size:10px"; 
    document.getElementsByClassName("subtitle")[0].style.cssText = "font-size:10px"; 
  
    let newss = document.getElementsByClassName("news");
    for(let index=0; index<newss.length; index++){
      const element = newss[index];
    element.style.cssText = "font-size:10px"; 
    }

  }

);

