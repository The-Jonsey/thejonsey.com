window.onload = () => {
    new $(() => {
        alert("Go away.");
    });

    let darkToggle = document.getElementById("dark-mode");
    let cookies = document.cookie.split(";");
    let dark;
    for (let cookie of cookies) {
        if (cookie.split("=")[0].includes("dark")) {
            dark = cookie.split("=")[1] === "true";
        }
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
        swapClasses("bg-light-background", "bg-dark-background");
        swapClasses("text-light-text", "text-dark-text");
        swapClasses("bg-light-panel", "bg-dark-panel");
        swapClasses("text-light-gray", "text-dark-gray");
        darkToggle.classList.remove("fa-moon");
        darkToggle.classList.add("fa-sun");
    } else {
        swapClasses("bg-dark-background", "bg-light-background");
        swapClasses("text-dark-text", "text-light-text");
        swapClasses("bg-dark-panel", "bg-light-panel");
        swapClasses("text-dark-gray", "text-light-gray");
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