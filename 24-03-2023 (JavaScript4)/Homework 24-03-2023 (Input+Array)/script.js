const users = [];

function newUser(p1, p2) {
    let user = {
        firstName: p1,
        lastName: p2
    }
    users.push(user);
}

document.getElementById("button_next").addEventListener("click",
    () => {
        // считывание значений из input:
        //let name = document.getElementById("name_input-id").value;
        //let surname = document.getElementById("surname_input-id").value;
        let name = document.getElementsByTagName("input")[0].value; 
        let surname = document.getElementsByTagName("input")[1].value; 
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



