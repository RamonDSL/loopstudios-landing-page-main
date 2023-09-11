const btnMenu = document.querySelector(".btn-menu")

const handleMenuClick = () => {
    const sectionNavbar = document.querySelector(".section-navbar")

    sectionNavbar.classList.toggle("active")
    changeMenuImage()
    changeRestOfContentVisibility()
}

const changeMenuImage = () => {
    const btnImage = btnMenu.firstElementChild

    const newImageSRC = btnImage.src.includes("hamburger") ? "./src/images/icon-close.svg" : "./src/images/icon-hamburger.svg"
    
    btnImage.src = newImageSRC
}

const changeRestOfContentVisibility = () => {
    const documentBody = document.body
    documentBody.style.overflow = documentBody.style.overflow === "hidden" ? "visible" : "hidden"
}

btnMenu.addEventListener("click", handleMenuClick)