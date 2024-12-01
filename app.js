// // import { formValidation, formSuccessValidation } from "./function/index.js";

// // const button = document.getElementById("button");
// // const username = document.getElementById("username");
// // const lastname = document.getElementById("lastname");
// // const password = document.getElementById("password");
// // const errorMessage = document.querySelectorAll(".error");
// // const form = document.getElementById("form");
// // const heading = document.querySelector(".heading");
// // const container = document.querySelector(".container");

// // button.addEventListener("click", (event) => {
// //   event.preventDefault();
// //   if (username.value === "" && lastname.value === "" && password.value === "") {
// //     formValidation(username, lastname, password, errorMessage);
// //   } else {
// //     formSuccessValidation(username, lastname,password,errorMessage,form,heading,container)
// //   }
// // });


// const container = document.querySelector(".container");

// // const button = document.createElement("button");
// // button.textContent = "login";
// // container.appendChild(button);

// // button.addEventListener('click', () => {
// //     alert("hello")
// // })

// export function Card(backgroundColor){
//     const div = document.createElement("div");
//     const img = document.createElement("img");
//     div.appendChild(img)
//     // card.style.width = '200px';
//     // card.style.height = '200px';
//     // card.style.display = 'flex';
// img.src = "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
// img.width = '100px';
// img.height = '100px';
//     container.appendChild(div);
// }

// Card('red')
// Card("blue")
// Card("gold")



const container = document.querySelector(".container");


function Header(){
    const header = document.createElement("div");
    header.innerHTML = `
    <ul class="ul">
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    </ul>
    `
    container.appendChild(header)
}

Header()

function Section(){
    const contentContainer = document.createElement('div');
    const image = document.createElement("img");
    image.src = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    image.alt = 'dsdsds';
    const section = document.createElement("section");
    section.innerHTML = `
    <h1>Hello World</h1>
    <p>lorem is psdsdsjdbsdjnsdjsndjsdnsjdsndjsndsdjsdnsd</p>
    `
    contentContainer.appendChild(image);
    contentContainer.appendChild(section);
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'space-around';
    container.appendChild(contentContainer);
}

Section();