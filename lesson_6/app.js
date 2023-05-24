// 1 -example

// console.log('start')
//
// setTimeout(() => {
//     const product = {
//         name: "phone",
//         price: 9000
//     }
//     console.log(product)
//     setTimeout(() =>{
//         product.isModified = true
//         console.log(product, "2")
//         setTimeout(() =>{
//             product.status = "ordered"
//             console.log(product, "3")
//         }, 2000)
//     }, 2000)
// }, 2000)

//
// request.then((product)=>{
//     const request2 = new Promise((resolve) =>{
//         setTimeout(()=>{
//             product.isModified = true
//             console.log(product, "2")
//             resolve()
//         }, 2000)
//
//     })
//     request2.then(() =>{
//         setTimeout(() =>{
//             product.status = "ordered"
//             console.log(product, "3")
//         }, 2000)
//     })
// })


// 2 - example
//
// console.log("start")
//
// const request = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         const product  = {
//             name: "phone",
//             price: 9000
//         }
//         console.log(product, "1")
//         resolve(product)
//     }, 2000)
// })
//
// request.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             product.isModified = true
//             console.log(product, "2")
//             resolve()
//         }, 2000)
//     }).then(() =>{
//         setTimeout(() => {
//             product.status = "ordered"
//             console.log(product, "3")
//         }, 2000)
//     })
//     .catch(() => {
//         console.error("error")
//     }).finally(() =>{
//         console.warn("finally")
//     })
// })
//
// 3 - example
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch((e) =>{
//      console.error(e)
//     })
//     .finally(() =>{
//         console.warn("finally")
//     })

//
// const delay = (ms) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
//
// const url = "https://jsonplaceholder.typicode.com/todos/1"

// const fetchData = () => {
//     console.log("start")
//     return delay(2000)
//         .then(() => fetch(url))
//         .then((data) => data.json())
// }
// fetchData()
//     .then((response) => console.log(response))
//     .catch((e) => console.error(e))
//     .finally(() => console.warn("finally"))
//
// const fetchData = async () => {
//     try{
//         console.log("start")
//         await delay(2000)
//         console.log("after delay")
//         const response  = await fetch(url)
//         console.log(response)
//         const data = await response.json()
//         console.log(data)
//     }catch {
//         console.error("error")
//     }finally {
//         console.log("finally")
//     }
// }
// fetchData()









//
// console.log(1)
//
// setTimeout(() => {
//     console.log(2)
// }, 0)
//
// f()
//
// console.log(3)
//
// function f() {
//     console.log(4)
// }
//
// setTimeout(() =>{
//     console.log(46)
// }, 10000)
