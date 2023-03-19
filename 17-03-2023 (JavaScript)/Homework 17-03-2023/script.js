const textNewsTitle = document.createTextNode("спорт");
const textNewsSubtitle = document.createTextNode("Макдэвид побил рекорд по очкам для игроков в XXI веке");
const textNewsTime = document.createTextNode("03:00");


const newBlockNewsTitle = document.createElement("div");
newBlockNewsTitle.classList.add("news_title");
newBlockNewsTitle.appendChild(textNewsTitle);

const newBlockNewsSubtitle = document.createElement("h3");
newBlockNewsSubtitle.classList.add("news_subtitle");
newBlockNewsSubtitle.appendChild(textNewsSubtitle);

const newBlockNewsTime = document.createElement("div");
newBlockNewsTime.classList.add("news_time");
newBlockNewsTime.appendChild(textNewsTime);


const newBlockNews = document.createElement("div");
//newBlockNews.setAttribute("class", "news");
newBlockNews.classList.add("news");
//newBlockNews.appendChild(newBlockNewsTitle, newBlockNewsSubtitle, newBlockNewsTime);
newBlockNews.appendChild(newBlockNewsTitle);


// вариант с пустым div в index.html
//document.getElementById("news_empty").appendChild(newBlockNewsTitle, newBlockNewsSubtitle, newBlockNewsTime);
//document.getElementById("news_empty").appendChild(newBlockNewsTitle);



let divNews = document.getElementsByClassName("news");
//console.log(divNews); //  выводит все три
let divNewsId = document.getElementById("news");
console.log(divNewsId); // выводит первый попавшийся?
//divNews

//document.body.getElementsByClassName("news").appendChild(newBlockNews);





// -------------------------смена фона-------------------------------
let sportNews = document.querySelectorAll(".news_title");
sportNews.forEach((element)=>{
    if(element.innerText == "спорт") {
        //sportNews.backgroundColor = "red";
        element.style.backgroundColor = "red"; // так меняется только у элемента фон.
    }
}
);