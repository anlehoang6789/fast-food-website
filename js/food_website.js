let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

//Xổ menu khi màn hình ở chế độ phone (768px)
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// Chuyển đổi trạng thái active của thanh navbar 
// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    //Xổ search form khi nhấn vào icon search
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Chuyển đổi trạng thái active của thanh navbar 
    // section.forEach(sec =>{
    //     let top = window.scrollY;
    //     let height = sec.offsetHeight;
    //     let offset = sec.offsetTop - 150;
    //     let id = sec.getAttribute('id');

    //     if(top => offset && top < offset + height){
    //         navLinks.forEach(links =>{
    //             links.classList.remove('active');
    //             document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
    //         });
    //     };
    // });
}
document.querySelector('#search').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
//Tắt search khi nhấn vào dấu cancel trên form search 
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Swiper(Tự động chuyển Slide bằng Swipper của trang Home)
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

// Swiper(Tự động chuyển Slide bằng Swipper của trang Review)
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});



