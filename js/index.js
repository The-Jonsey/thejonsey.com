import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

Swiper.use([Navigation, Pagination])

window.onload = () => {

    let darkToggle = document.getElementById("dark-mode");
    let cookies = document.cookie.split(";");
    let dark;
    let darkFound = false;
    for (let cookie of cookies) {
        if (cookie.split("=")[0].includes("dark")) {
            dark = cookie.split("=")[1] === "true";
            darkFound = true;
        }
    }
    if (!darkFound && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.cookie = "dark=true; expires=Thu, 31 Dec 2099 00:00:00 GMT";
        dark = true;
    }
    if (!dark) {
        document.cookie = "dark=false; expires=Thu, 31 Dec 2099 00:00:00 GMT";
        dark = false;
    }
    toggleDarkMode(dark, darkToggle);
    darkToggle.onclick = () => {
        dark = !dark;
        document.cookie = "dark=" + dark + "; expires=Thu, 31 Dec 2099 00:00:00 GMT";
        toggleDarkMode(dark, darkToggle);
    };
    let panes = document.getElementsByClassName("fade-in");
    window.onscroll = () => {
        checkOnScreen(panes);
    };
    window.onresize = () => {
        checkOnScreen(panes);
    };
    checkOnScreen(panes);
};

function checkOnScreen(panes) {
    let top = document.body.scrollTop;
    let bottom = window.innerHeight + top;
    for (let pane of panes) {
        let rect = pane.getBoundingClientRect();
        if (rect.top < bottom && rect.bottom > 0 && !pane.classList.contains("faded")) {
            pane.classList.add("faded");
        }
    }
}

function toggleDarkMode(dark, darkToggle) {
    if (dark) {
        swapClasses("light", "dark");
        darkToggle.classList.remove("fa-moon");
        darkToggle.classList.add("fa-sun");
    } else {
        swapClasses("dark", "light");
        darkToggle.classList.remove("fa-sun");
        darkToggle.classList.add("fa-moon");
    }
}

function swapClasses(oldClass, newClass) {
    for (let elem of document.querySelectorAll("." + oldClass)) {
        elem.classList.remove(oldClass);
        elem.classList.add(newClass);
    }
}

new Swiper(".multiple-slide-carousel", {
    loop: true,
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: document.getElementById("slider-button-right"),
        prevEl: document.getElementById("slider-button-left"),
        enabled: true
    },
    init: true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
        3440: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        2560: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1080: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        990: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});
