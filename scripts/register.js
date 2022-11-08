"use strict"

let answer = "";

while (true) {
    answer = prompt("Желаете пройти регистрацию на сайте?");

    if(answer === "Да") {
        alert("Круто!");
        break;
    }

    alert("Попробуй ещё раз");
}
