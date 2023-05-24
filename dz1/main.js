//1 - task
// Показать или скрыть пароль при нажатии на чекбокс
const showPasswordCheckbox = document.getElementById('showPassword')
const passwordInput = document.getElementById('password')

showPasswordCheckbox.addEventListener('change', function() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text'
    } else {
        passwordInput.type = 'password'
    }
})

// Проверка пароля на наличие букв верхнего и нижнего регистра, цифр и минимальную длину
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}$/;

// Проверка пароля при отправке формы
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!passwordPattern.test(password)) {
        alert('Пароль должен содержать как минимум одну букву верхнего регистра, одну букву нижнего регистра, одну цифру и быть не короче 4 символов.');
        event.preventDefault();
    } else if (password !== confirmPassword) {
        alert('Пароли не совпадают.');
        event.preventDefault();
    } else {
        alert('Все успешно!');
    }
});


//2 - task
const box = document.querySelector('.box')
let position = 0
const move = () => {
    if (position <= 500) {
        position++
        box.style.left = `${position}px`
        setTimeout(move, 10)
    }
}
move()

