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

const htmlBlok = `
    <div class="news">
        <div class="news_title">${strNewsTitle}</div>
            <h3 class="news_subtitle">${strNewsSubtitle}</h3>
                <div class="news_time">${strNewsTime}</div>
    </div>
`;

pNews.insertAdjacentHTML("afterend",htmlBlok);

/*
let divNews = document.getElementsByClassName("news");
//console.log(divNews); //  выводит все три
let divNewsId = document.getElementById("news");
console.log(divNewsId); // выводит первый попавшийся?
//divNews
*/




// -------------------------смена фона-------------------------------
let sportNews = document.querySelectorAll(".news_title");
sportNews.forEach((element)=>{
    if(element.innerText == "спорт") {
        element.parentElement.style.backgroundColor = "red"; 
        element.parentElement.style.fontSize="25px";
    }
}
);