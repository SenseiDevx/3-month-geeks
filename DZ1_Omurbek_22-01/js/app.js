const email = document.querySelector("#phoneEmail")
const password = document.querySelector("#phonePassword")
const submitBtn = document.querySelector("#submitBtn")

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!emailRegExp.test(email.value)) {
        alert("Пожалуйста, введите действительный адрес электронной почты.");
        email.focus();
        return;
    }else if (!passwordRegExp.test(password.value)) {
        alert("Пароль должен содержать не менее 4 символов, включая 1 букву и 1 цифру.");
        password.focus();
        return;
    }else {
        alert("Вы ввели правильный вариант email и текущий ваш пороль")
    }
});

document.querySelector(".submitBtn").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        this.submit();
    }
});





const box = document.querySelector('.box')
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX <= 499 && positionY <= 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 499 && positionY <= 499) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX >= 0 && positionY >= 499) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY >= 0) {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

function showPassword() {
    const password = "123456"; // здесь нужно заменить на свой пароль или получать его откуда-то еще

    const passwordInput = document.getElementById("passwordInput");
    passwordInput.setAttribute("type", "text");
    passwordInput.setAttribute("value", password);
}



function showPassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}