let name = document.getElementById("name_input-id").value;
let surname = document.getElementById("surname_input-id").value;

//let name1 = document.getElementByTagName("input")[0].value;
//let surname1 = document.getElementByTagName("input")[1].value;

function makeUser(name,surname) {
    return {
        firstName: name,
        lastName: surname
    }
}

//let user1 = makeUser("John", 30);
//console.log(user1);

document.getElementById("button_next").addEventListener("click",
    () => {
        makeUser(name,surname);
    }
);

