const users = [];

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
document.getElementById("button_next").addEventListener("click",
    () => {
        // считывание значений из input:
        let name = document.getElementById("name_input-id").value;
        let surname = document.getElementById("surname_input-id").value;
        //let name = document.getElementsByTagName("input")[0].value; 
        //let surname = document.getElementsByTagName("input")[1].value; 
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
document.getElementById("button_finish").addEventListener("click",
    () => {
        // выполнение метода по выдаче списка:
        printUsers();

    }
);


