const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabsContent = document.querySelectorAll(".tabcontent")

const hideTabcontent = () => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabcontent()
showTabContent()

let slide = 0;
function autoSlider () {
    const slider = setInterval( () => {
        slide++
        if (slide > 3) {
            slide = 0
        }
        hideTabcontent()
        showTabContent(slide)
    },1000)
}
autoSlider()

tabsParent.addEventListener("click", (e) => {
    const target = e.target
    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if (target === item) {
                hideTabcontent()
                showTabContent(i)
                slide = i
            }
        })
    }
})



const modalTrigger = document.querySelector(".btn_white")
const modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = "hidden"
}


modalTrigger.onclick = () => openModal()//для открытия модалки прии нажатии
// setTimeout(openModal, 10000) //для открытия модалки через 10сек


const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ""
}

closeModalBtn.addEventListener("click", closeModal)

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")){
        closeModal()
    }
})

const openScrollModal = () => {
    const  page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        document.body.style.overflow = "hidden"
    }
}
// window.addEventListener("scroll" , openScrollModal)

/////////////////////////////////////////////////////////////////


// function onEntry (entry) {
//     entry.forEach(change => {
//         if (change.isIntersecting) {
//             change.target.classList.add("element-show");
//         }else change.target.classList.remove("element-show");
//     })
// }
// let options = {threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll(".modal__content_scroll");
//
// for (let elm of elements) {
//     observer.observe(elm);
// }


////////////////////////////////////////////

let currentImageIndex = 1;
let totalImages = 4;

let prevButton = document.querySelector('.offer__slider-prev');
let nextButton = document.querySelector('.offer__slider-next');

let currentImageText = document.getElementById('current');
let totalImagesText = document.getElementById('total');
//
function updateImage() {
    let img = document.querySelector('.offer__slide img');

    img.src = `./img/deleted/image${currentImageIndex}.svg`;

    currentImageText.textContent = currentImageIndex.toString().padStart(2, '0');
}
updateImage();

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 2 + totalImages) % totalImages + 1;
    updateImage();
});

nextButton.addEventListener('click', () =>  {
    currentImageIndex = (currentImageIndex % totalImages) + 1;
    updateImage();
});

