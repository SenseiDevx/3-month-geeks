const btn = document.querySelector('button')
const block = document.querySelector('.pizzas')
btn.onclick = () =>
{
    const zapros = new XMLHttpRequest()
    zapros.open('GET', "data.json")
    zapros.setRequestHeader('Content-type', 'application/json')
    zapros.send()
    zapros.onload = () =>
    {
        const data = JSON.parse(zapros.response)
        console.log(data);
        data.map(pizza =>
        {
            const pizzaBlock = document.createElement('div')
            const image = document.createElement('img')
            const title = document.createElement('h2')
            const price = document.createElement('p')
            image.src = pizza.imageUrl
            title.append(pizza.title)
            price.append('Ценна: ' + pizza.price + ' СОМ')
            pizzaBlock.append( title,image, price)
            block.append(pizzaBlock)
        })
    }

}