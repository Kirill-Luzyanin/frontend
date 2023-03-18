console.log("hello JavaScript");
//alert("alert hello JS");
console.log(2+5);
console.log("2"+5);
//console.log(console);
//console.dir(console);

let a=20;
console.log(a); // a - переменная число
a="string value";
console.log(a); // a - string value

//var - в Java определили и всё, а в JS будет переопределяться динамически
// забываем var!!!
// console.log(b);
// var b="text";

const b="string";
console.log(b);

/*
b="qwert";   // Uncaught TypeError: Assignment to constant variable. 
console.log("hello");
*/

// получение элемента по ID
let header = document.getElementById("id_h1");
console.log(header);
console.dir(header);
//header.innerText="JS!!!";
header.innerText+="   Super!!!";


// получение элементов по классу
let pWithClassNormalText = document.getElementsByClassName("normal-text");
console.log(pWithClassNormalText);
//console.log(pWithClassNormalText[1]);

for(let index=0; index<pWithClassNormalText.length; index++){
    const element = pWithClassNormalText[index]; // свойства можем менять для const, а саму ее менять не можем
    console.log(element);
    element.innerHTML=" [" + index + "] " + element.innerHTML;

}

// по имени тега
console.log(document.getElementsByTagName("p"));

// получение элементов по css селектору
console.log("-".repeat(30)+" querySelectorAll() " + "-".repeat(30));
let pWithClassNormalText2 = document.querySelectorAll(".normal-text");
pWithClassNormalText2.forEach((element)=>{
        console.log(element);
        if(element.textContent.length>100){
        element.setAttribute("class", "selected-text");
        }
    }
);


