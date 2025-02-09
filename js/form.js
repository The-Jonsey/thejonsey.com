let form = document.getElementById("contact-form")

document.querySelectorAll(".contact-form-button").forEach(elem => elem.onclick = () => {
    form.classList.remove("hidden");
    form.classList.add("flex");
});

document.getElementById("contact-form-close").onclick = () => {
    form.classList.remove("flex");
    form.classList.add("hidden");
};


form.onclick = (e) => {
    if (e.target.id === "contact-form") {
        form.classList.remove("flex")
        form.classList.add("hidden")
    }
};
