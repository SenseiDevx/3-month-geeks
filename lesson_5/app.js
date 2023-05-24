const som = document.querySelector('#som')
const usd = document.querySelector('#usd')

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })

const convert = (elem, target, isTrue) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
         request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            if (isTrue) {
                target.value = ( elem.value / data.usd ).toFixed(2)
            } else {
                target.value = ( elem.value * data.usd ).toFixed(2)
            }
            elem.value === '' && (target.value = '')
            // elem.value === '' ? target.value = '' : null
            //&& true true / false false
            //|| false true / true false
        })
    })
}
// 0, '', false, undefined, null, NaN
convert(som, usd, true)
convert(usd, som, false)