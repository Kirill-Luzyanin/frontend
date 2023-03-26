function newUser(p1, p2) {
    return {
        firstName: p1,
        lastName: p2
    }
}

const users = [];

function addToArray(p1, p2) {
    return users.push(newUser(p1, p2));
}

document.getElementById("button_next").addEventListener("click",
    () => {
        // считывание значений из input:
        let name = document.getElementById("name_input-id").value;
        let surname = document.getElementById("surname_input-id").value;
        //let name = document.getElementByTagName("input")[0].value; // почему так не работает???
        //let surname = document.getElementByTagName("input")[1].value; // почему так не работает???

        // выполнение метода по созданию нового пользователя:
        newUser(name, surname);
        console.log(newUser(name, surname));

        // выполнение метода по добавлению нового пользователя в массив:
        addToArray(name, surname);
        console.log(addToArray(name, surname));

        //document.querySelector('input').value = ''; ///Если так, то только одно поле очищается. All не работает.
        // как правильно обнулять input-placeholder?
        document.getElementById("name_input-id").value = '';
        document.getElementById("surname_input-id").value = '';

    }
);



