function makeUser(name,surname) {
    return {
        firstName: name,
        lastName: surname
    }
}

function addToArray(){
    const users = [];
    //users.length=20;
    for (let index = 0; index < 10; index++) {
        users.push(users[index]);
        console.log(users[index]);
    }
 }

document.getElementById("button_next").addEventListener("click",
    () => {
        let name = document.getElementById("name_input-id").value;
        let surname = document.getElementById("surname_input-id").value;
        //let name = document.getElementByTagName("input")[0].value; // почему так не работает???
        //let surname = document.getElementByTagName("input")[1].value;
        
        makeUser(name,surname);
        console.log(makeUser(name,surname)); 
        
        addToArray(name, surname);
        console.log(addToArray());

        //document.querySelector('input').value = ''; ///Если так, то только одно поле очищается. All не работает.
        // как правильно обнулять input-placeholder
        document.getElementById("name_input-id").value = '';
        document.getElementById("surname_input-id").value = '';

        
    }
);



