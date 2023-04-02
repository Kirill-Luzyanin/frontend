/*
Реализовать на странице 2 поля для ввода: first name и last name и две кнопки:
next и finish. По нажатию на кнопку next ваша функция должна:
- создавать объект {firstName, lastName}  
- добавлять его в массив users 
По нажатию на кнопку finish на странице должны отображаться в виде списка все введенные пользователи.
*/

//let name = document.getElementsByTagName("input")[0].value; 
//let surname = document.getElementsByTagName("input")[1].value; 

const users = [];

const nextBtn = document.getElementById("btn_next");
const finishBtn = document.getElementById("btn_fihish");
const inputFirstName = document.getElementById("name_input-id");
const inputLastName = document.getElementById("surname_input-id");

//const createUser = function (userName, userSurname){
  
//}



function newUser(userName, userSurname) {
    let user = {
        firstName: userName,
        lastName: userSurname
    }
    if (user.firstName !== '' && user.lastName !== '') {
        users.push(user);
    }
}

function printUsers() {
    let list="";
    for (let i = 0; i < users.length; i++) {
        list += users[i].firstName + " " + users[i].lastName + ";" + '\n';
        
    }
    console.log(list);
}

// кнопка 1
nextBtn.addEventListener("click",
    () => {
        // считывание значений из input:
        const firstNamelet name = document.getElementById("name_input-id").value.trim();
        let surname = document.getElementById("surname_input-id").value.trim();
        
        console.log(name);
        console.log(surname);

        // выполнение метода по созданию нового пользователя:
        newUser(name, surname);
        console.log(users);

        // очистка input
        //document.querySelectorAll('input').value = ''; ///Если так, то получаем массив.
        document.getElementById("name_input-id").value = '';
        document.getElementById("surname_input-id").value = '';

    }
);

// кнопка 2
document.getElementById("btn_finish").addEventListener("click",
    () => {
        // выполнение метода по выдаче списка:
        printUsers();

    }
);


