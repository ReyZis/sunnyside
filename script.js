const ham = document.querySelector("#ham");
const modal = document.querySelector("#modal");

const hamHandler = (e) => {
    modal.style.display === "none"
        ? (modal.style.display = "flex")
        : (modal.style.display = "none");
};

ham.addEventListener("click", hamHandler);
