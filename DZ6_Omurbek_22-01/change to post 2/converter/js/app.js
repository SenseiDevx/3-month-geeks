const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')
const rub = document.querySelector("#rub")
const yuan = document.querySelector("#yuan")

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
         fetch("json/data.json")//Эта строка делает запрос на файл data.json с помощью метода fetch(). Этот метод возвращает промис, который содержит ответ от сервера.
             .then(response => response.json())//Здесь мы обрабатываем промис, который вернул fetch(). Мы вызываем метод json() на ответе от сервера, чтобы преобразовать его в формат JSON. Этот метод тоже возвращает промис.
             .then(data => {//Когда json() завершается успешно, его результат передается в следующий then(). Здесь мы передаем данные из JSON-ответа в функцию, которая будет выполнять конвертацию валют.
                 target.forEach(e => {//Эта строка использует метод forEach() для перебора всех элементов массива target. Мы передаем каждый элемент в функцию, которая следует за этой строкой.
                     target2 === 'som' ?
                         e.value = (elem.value / data[e.id]).toFixed(2)
                         : e === som ?
                             e.value = (elem.value * data[elem.id]).toFixed(2)
                             : e.value = ((elem.value * data[elem.id]) / data[e.id]).toFixed(2)
                     //Эти строчки проверяет, какую валюту нужно конвертировать. Если target2 равен 'som', то мы
                     // конвертируем сомы в другую валюту, иначе мы конвертируем другую валюту в сомы. Затем
                     // мы используем данные из файла data.json для выполнения конвертации и устанавливаем
                     // значение поля ввода с помощью метода toFixed().
                 })
                 elem.value === '' && (target.forEach(e => e.value = ''))
                 //Эта строка очищает значения всех полей ввода, если поле,
                 // в котором пользователь вводит значение, пустое.
             })
             .catch(error => {
                 console.error(error)
                 alert.error("Произошла ошибка!")
             })
    })
}

convert(som,[usd,euro,rub,yuan])
convert(usd ,[som,euro,rub,yuan])
convert(euro,[som,usd,rub,yuan])
convert(rub,[som,usd,euro,yuan])
convert(yuan,[som,usd,euro,rub])