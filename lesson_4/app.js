// const obj = {
//     name: "alex",
//     age: 21
// }
// console.log(obj)
//
// const data = JSON.stringify(obj)
//
// console.log(data, "stringify")
//
// console.log(JSON.parse(data), "parse")
//
// console.log(JSON.stringify([1, 2, 3, 4, 5, 6]))
// console.log(JSON.parse(JSON.stringify([1, 2, 3, 4, 5, 6])))
//
// const btn = document.querySelector("button")
//
// btn.addEventListener("click", () =>{
//     const request = new XMLHttpRequest() // создание запроса
//     request.open("GET", "data.json")//объявление метода запроса и пути
//     request.setRequestHeader("Content-Type", "application/json")//добавление запроса
//     request.send()//отправка запроса
//
//     request.addEventListener("load", () =>{
//         console.log(request.response)
//         const data = (JSON).parse(request.response)
//         console.log(data)
//         document.querySelector(".name").innerHTML = data.name
//         document.querySelector(".age").innerHTML = data.age
//     })
// })


//пример рекурсии
// const myFunc = () => {
//     console.log("Omurbek")
//     myFunc()
// }
// myFunc()

// const btn = document.querySelector("button")
// const wrapper = document.querySelector(".wrapper")
//
// btn.addEventListener("click", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "https://pokeapi.co/api/v2/pokemon/")
//     request.setRequestHeader("Content-Type", "application/json")
//     request.send()
//
//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         console.log(data)
//         data.results.forEach((item) => {
//             //console.log(item.name)
//             const block = document.createElement("div")
//             block.style.height = "150px"
//             block.style.width = "150px"
//             block.style.marginTop = "10px"
//             block.style.border = "1px solid"
//
//             block.innerHTML = item.name
//             wrapper.append(block)
//         })
//     })
// })
