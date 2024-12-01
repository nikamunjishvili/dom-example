function formValidation (username,lastname,password,errorMessage){
    username.style.border = "2px solid red";
    lastname.style.border = "2px solid red";
    password.style.border = "2px solid red";
    errorMessage[0].style.display = "block";
    errorMessage[1].style.display = "block";
    errorMessage[2].style.display = "block";
};

function formSuccessValidation(username, lastname,password,errorMessage,form,heading,container){
    username.style.border = "1px solid black";
    lastname.style.border = "1px solid black";
    password.style.border = "1px solid black";
    errorMessage[0].style.display = "none";
    errorMessage[1].style.display = "none";
    errorMessage[2].style.display = "none";
    form.style.display = "none";
    alert("შენ დარეგისტრირდი წარმატებით!!");
    heading.style.display = "block";
    container.innerHTML = `
    <ul>
    <li>username: ${username.value}</li>
    <li>lastname: ${lastname.value}</li>
    <li>password: ${password.value}</li>
    </ul>
    `
}

export {
    formValidation,
    formSuccessValidation
}
