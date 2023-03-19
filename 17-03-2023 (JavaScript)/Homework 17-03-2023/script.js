const newBlockNews = document.createElement("div");
//newBlockNews.setAttribute("class", "news");
newBlockNews.classList.add("news");

const newBlockNewsTitle = document.createElement("div");
newBlockNewsTitle.classList.add("news_title");

const newBlockNewsSubtitle = document.createElement("h3");
newBlockNewsSubtitle.classList.add("news_subtitle");

const newBlockNewsTime = document.createElement("div");
newBlockNewsTime.classList.add("news_time");


const textNewsTitle = document.createTextNode("спорт");
const textNewsSubtitle = document.createTextNode("Макдэвид побил рекорд по очкам для игроков в XXI веке");
const textNewsTime = document.createTextNode("03:00");


newBlockNewsTitle.appendChild(textNewsTitle);
newBlockNewsSubtitle.appendChild(textNewsSubtitle);
newBlockNewsTime.appendChild(textNewsTime);


newBlockNews.appendChild(newBlockNewsTitle, newBlockNewsSubtitle, newBlockNewsTime);


//element.setAttribute("class", "selected-text");

//document.body.getElementsByClassName("news").appendChild(newBlockNews);
