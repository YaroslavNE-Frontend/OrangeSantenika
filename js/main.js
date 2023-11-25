


// // МОДАЛЬНОЕ ОКНО
// //Открыть/Закрыть модальное окно

// const OpenBtn = document.getElementById('sign-in');
// const ModalWrapper = document.querySelector('.modal__wrapper');
// const CloseBtn = document.querySelector('.icon-close-btn');
// const ModalAll = document.querySelector('.modal__wrapper .modal');

// OpenBtn.addEventListener('click', (e) => {
//     ModalWrapper.classList.toggle('open');
// })

// CloseBtn.addEventListener('click', (e) => {
//     ModalWrapper.classList.toggle('open');
// })

// // Закрыть модальное окно Esc

// window.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//         ModalWrapper.classList.remove('open')
//     }
// });

// //Закрыть модальное окно при клике в не окна
// ModalAll.addEventListener('click', event => {
//     event._isClickWithInModal = true;
// });

// ModalWrapper.addEventListener('click', event => {
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
// });

// // ПОИСК

// document.querySelector('#product').oninput = function () {
//     let val = this.value.trim();
//     let productItem = document.querySelectorAll('.product-text');
//     if (val != '') {
//         productItem.forEach(function (elem) {
//             if (elem.innerText.search(val) == -1) {
//                 elem.classList.add('none');
//                 elem.innerHTML = elem.innerText;
//             }
//             else {
//                 elem.classList.remove('none');
//                 let str = elem.innerText;
//                 elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//             }
//         });
//     }
//     else {
//         productItem.forEach(function (elem) {
//             elem.classList.remove('none');
//             elem.innerHTML = elem.innerText;
//         });
//     }
// }

// // ВЫДЕЛЕНИЕ ТЕКСТА ПРИ ВВОДЕ В ПОИСК

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<span class="excretion-text">' + string.slice(pos, pos + len) + '</span>' + string.slice(pos + len);
// }

// // Подстановка нужной ссылки по клику
// let ShopButtons = document.querySelectorAll(".shop-button")
// let BtnsList = document.querySelector(".ourshops-list").querySelectorAll(".shop-button");

// BtnsList.forEach(element => {
//     element.addEventListener("click", function () {
//         BtnsList.forEach(btns => btns.classList.remove("active"))

//         this.classList.add("active");
//     })
// });

// const shopData = {
//     shop1: [{
//         lat: 55.75222,
//         lon: 37.61556,
//         name: 'Светофор'
//     }
//     ],
//     shop2: [{
//         lat: 51.400682,
//         lon: 37.818970,
//         name: 'Магнит'

//     }
//     ],
//     shop3: [{
//         lat: 55.75444,
//         lon: 37.61833,
//         name: 'Пятерочка',
//     }
//     ],
//     shop4: [{
//         lat: 55.75230,
//         lon: 37.61560,
//         locationUrl: 'https://yandex.ru/maps/-/CDeB70Nx',
//         name: 'Экономыч'
//     }
//     ],
// };

// const init = () => {
//     const map = new ymaps.Map('map', {
//         center: [55.753215, 37.622504],
//         zoom: 14,
//     });

//     let activeShop = "shop1";

//     const showShop = (shop) => {
//         map.geoObjects.removeAll();

//         shopData[shop].forEach((item) => {
//             const placemark = new ymaps.Placemark([item.lat, item.lon], {
//                 hintContent: item.name,
//                 balloonContent: item.name,
//             });

//             map.geoObjects.add(placemark);


//         });

//         activeShop = shop;
//     }

//     ShopButtons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             const shop = e.currentTarget.dataset.shop;
//             showShop(shop);
//         });
//     });

//     showShop(activeShop);
// };

// ymaps.ready(init);

// // МОДАЛЬНОЕ ОКНО
// //Открыть/Закрыть модальное окно

// const OpenBtn = document.getElementById('sign-in');
// const ModalWrapper = document.querySelector('.modal__wrapper');
// const CloseBtn = document.querySelector('.icon-close-btn');
// const ModalAll = document.querySelector('.modal__wrapper .modal');

// // Закрыть модальное окно Esc

// window.addEventListener('keydown', (e) => {
//     if (e.key === "Escape") {
//         ModalWrapper.classList.remove('open')
//     }
// });

// //Закрыть модальное окно при клике в не окна
// ModalAll.addEventListener('click', event => {
//     event._isClickWithInModal = true;
// });

// ModalWrapper.addEventListener('click', event => {
//     if (event._isClickWithInModal) return;
//     event.currentTarget.classList.remove('open');
// });






const SearchBtn = document.querySelector(".main__header-profile-menu-search-icon");
const SearchForm = document.querySelector(".main__header-profile-menu-form__wrapper");
const SearchAll = document.querySelector(".main__header-profile-menu-form__wrapper .main__header-profile-menu-form");

SearchBtn.addEventListener('click', (e) => {
    SearchForm.classList.toggle('none');
});

// Закрыть модальное окно Esc

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        SearchForm.classList.add('none')
    }
});

const scrollBox = document.querySelector(".collections__left-box-text");
const scrollText = document.querySelector(".collections__left-text");


if (scrollText.clientHeight <= 192) {
    scrollBox.style.overflowY = 'hidden';

} else {
    scrollBox.style.overflowY = 'scroll';
}

// $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     responsive: {
//         1440: {
//             items: 1,
//         },
//     },
// });

// let point = document.querySelectorAll('.point')
// let imageSlider = document.querySelectorAll('.imageSlider')
// let leftBtn = document.getElementById('leftBtn')
// let rightBtn = document.getElementById('rightBtn')

// point[0].classList.add('active')
// imageSlider[0].classList.add('activeImage')

// let counter = 0;

// for (let i = 0; i < point.length; i++) {
//     point[i].addEventListener('click', () => {
//         for (let k = 0; k < imageSlider.length; k++) {
//             point[k].classList.remove('active')
//             imageSlider[k].classList.remove('activeImage')
//         }
//         counter = i;
//         imageSlider[counter].classList.add('activeImage');
//         point[counter].classList.add('active');
//     })
// }

// leftBtn.addEventListener('click', () => {
//     for (let k = 0; k < imageSlider.length; k++) {
//         point[k].classList.remove('active')
//         imageSlider[k].classList.remove('activeImage')
//     }
//     counter--
//     if (counter < 0) {
//         counter = imageSlider.length - 1
//     }
//     imageSlider[counter].classList.add('activeImage');
//     point[counter].classList.add('active');
// })

// rightBtn.addEventListener('click', () => {
//     for (let k = 0; k < imageSlider.length; k++) {
//         point[k].classList.remove('active')
//         imageSlider[k].classList.remove('activeImage')
//     }
//     counter++
//     if (counter >= imageSlider.length) {
//         counter = 0
//     }
//     imageSlider[counter].classList.add('activeImage');
//     point[counter].classList.add('active');
// })


// function slowSlider() {
//     for (let k = 0; k < imageSlider.length; k++) {
//         point[k].classList.remove('active')
//         imageSlider[k].classList.remove('activeImage')
//     }
//     counter++
//     if (counter >= imageSlider.length) {
//         counter = 0
//     }
//     imageSlider[counter].classList.add('activeImage');
//     point[counter].classList.add('active');
// }

// let second = 1000 * 2
// let TimerImage = setInterval(() => slowSlider(), second)

// let blockSlider = document.getElementById('blockSlider')
// blockSlider.addEventListener('mouseover', () => {
//     clearInterval(TimerImage)
// })

// blockSlider.addEventListener('mouseleave', () => {
//     TimerImage = setInterval(() => slowSlider(), second)
// })

// SliderOld

// let pointInner = document.querySelectorAll('.point__inner')
// let point = document.querySelectorAll('.point')
// let imageSlider = document.querySelectorAll('.imageSlider')
// let leftBtn = document.getElementById('leftBtn')
// let rightBtn = document.getElementById('rightBtn')

// point[0].classList.add('active')
// imageSlider[0].classList.add('activeImage')

// let counter = 0;



// for (let i = 0; i < point.length; i++) {
//     pointInner[i].addEventListener('click', () => {
//         for (let k = 0; k < imageSlider.length; k++) {
//             point[k].classList.remove('active')
//             imageSlider[k].classList.remove('activeImage')
//         }
//         counter = i;
//         imageSlider[counter].classList.add('activeImage');
//         point[counter].classList.add('active');
//     })
// }

// leftBtn.addEventListener('click', () => {
//     for (let k = 0; k < imageSlider.length; k++) {
//         point[k].classList.remove('active')
//         imageSlider[k].classList.remove('activeImage')
//     }
//     counter--
//     if (counter < 0) {
//         counter = imageSlider.length - 1
//     }
//     imageSlider[counter].classList.add('activeImage');
//     point[counter].classList.add('active');
// })

// rightBtn.addEventListener('click', () => {
//     for (let k = 0; k < imageSlider.length; k++) {
//         point[k].classList.remove('active')
//         imageSlider[k].classList.remove('activeImage')
//     }
//     counter++
//     if (counter >= imageSlider.length) {
//         counter = 0
//     }
//     imageSlider[counter].classList.add('activeImage');
//     point[counter].classList.add('active');
// })


// function slowSlider() {
//     for (let k = 0; k < imageSlider.length; k++) {
//         point[k].classList.remove('active')
//         imageSlider[k].classList.remove('activeImage')
//     }
//     counter++
//     if (counter >= imageSlider.length) {
//         counter = 0
//     }
//     imageSlider[counter].classList.add('activeImage');
//     point[counter].classList.add('active');
// }

// let second = 1300 * 2
// let TimerImage = setInterval(() => slowSlider(), second)

// let blockSlider = document.getElementById('blockSlider')
// blockSlider.addEventListener('mouseover', () => {
//     clearInterval(TimerImage)
// })

// blockSlider.addEventListener('mouseleave', () => {
//     TimerImage = setInterval(() => slowSlider(), second)
// })

// // Arrow Scrol-top

// window.onscroll = function() {
//     let scrollElem = document.getElementById("main-footer__arrow");
//     if (document.documentElement.scrollTop > document.documentElement.clientHeight) {
//         scrollElem.style.opacity = "1";
//     } else {
//         scrollElem.style.opacity = "0";
//     }
// }

// let timeOut;
// function goUp() {
//     let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
//     if(top > 0) {
//         window.scrollBy(0,-100);
//         timeOut = setTimeout('goUp()',20);
//     } else clearTimeout(timeOut);
// }



const swiper = new Swiper(".mySwiper", {
    // cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});











