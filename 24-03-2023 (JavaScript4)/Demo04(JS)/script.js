// Деструктуризация
//#1
const arr1 =[1,2,3,];
const[a,b,c]=arr1;
console.log(arr1);
console.log( a);
console.log( b);
console.log( c);

//2
console.log("----------- 2 -----------");
const[a1,b1,c1]=[1,"stroka",17];
console.log(a1);
console.log(b1);

//3
console.log("------------ 3 -----------");
const[a2,,b2]=arr1;
console.log(arr1);
console.log( a2);
console.log( b2);


//4
console.log("------------ 4 -----------");
arr1[3]="the real value";
let[a3,b3,c3,d3="def"]=arr1;
console.log(arr1);
console.log( a3);
console.log( b3);
console.log( c3);
console.log( d3);
console.log("--------- 4a change value -----------");
arr1[3]="value";
console.log(arr1);
[,,,d3="7597"]=arr1;
console.log( a3);
console.log( b3);
console.log( c3);
console.log( d3);


//5
console.log("------------------ 5 -----------------");
let arr2 = [
    ["11","22"],
    [21,22,23,24],
    [33]
]
// стандартный способ обращения к элементам двуммерного массива
console.log(arr2[0][0]);
console.log(arr2[1][3]);
// обращение  к элементам двуммерного массива с синтаксисом деструкторизации
const [,[,,a4],[b4]]  = arr2;
console.log( a4);
console.log( b4);

//5
const arr3=[
    [4,4],
    [5,5]
]

for(let [x,y] of arr3){
    console.log(x,y);
}

// spred
console.log("----------- SPRED -----------");
let arr4=[1,3,19];
let arr5 = [...arr4,"end", ...arr2]; // arr5 = [1,3,19]
console.log(arr5);

// массив ссылочный тип
console.log("-------------- reference -------------");
console.log(arr4);
let arr7 = arr4;
console.log(arr7);
arr7.push("qwe");
arr4.splice(2,1) // удалить с индекса 2, 1 элемемент
console.log(arr4);



// Функции
console.log("------------- function ------------");
function sum(p1,p2){
    return p1+p2;
}
const sub=function(p1,p2){
    return p1-p2;
}

let qwe=sum;

console.log(sum(10,20));
console.log(qwe(10,20));
console.dir(sum);

function operator(p1,p2, oper){
    return oper(p1,p2);
}

//sum=10;
//sub=10;
console.log(operator(14,98,sum));
console.log(operator(144,98,sub));


//scope - область видимости
console.log("------------- SCOPE ------------");
let testValue=100;
console.log("testValue = " + testValue);

const outterfunct=function(p1){
    testValue=0;
    console.log("testValue = " + testValue);
    const innerfunct = function(){return "qwerty"};
    console.log(sum(9,11111));  // данная функция определена во внешнем блоке
    return p1;
}

console.log(outterfunct(1));
console.log("testValue = " + testValue);
//console.log(innerfunct()); // не можем обратиться к внутренней функции из вне


window.console.log("------------");
//window.close();

globalThis.console.log("globalThis");
//globalThis.confirm("globalThis");
//globalThis.prompt("globalThis");   // -  прикольно



// Объекты
console.log("------------- Объекты ------------");

// завели объект "johnie"
const johnie={
    name: "Johnie",
    age: 24,
    "qwe qwe qwa": "qweqweqwa",
    height: 178,
    work: function(){
        console.log(" I work as Walker ");
        return "Johnie Walker"
    }
}

console.dir(johnie);
console.log(johnie.name);
console.log(johnie.work());
johnie.birtday="08.06.1987"; // добавили новое свойство
console.dir(johnie);
//delete johnie.age; // убрали свойство "age"
//console.dir(johnie);

//console.log(johnie.birtday);
console.log(johnie["birtday"]);
console.log(johnie["qwe qwe qwa"]);

let value = "age";
console.log(johnie[value]);


// перебор свойст объекта 
console.log("-------- перебор значений --------");
for(let v in johnie){
    console.log(v);
    console.log(johnie[v]);
}