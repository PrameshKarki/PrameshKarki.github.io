// *Grab elements from the DOM
const closeButton = document.querySelector("#close-btn");
const navigationMenu = document.getElementById("navigation-menu");
const navigationButton = document.querySelector("#navigation-btn");


// * Method for showing/hiding spinner
const loader = document.getElementById("cssload-wrapper");
window.addEventListener("load", (e) => {
    loader.style.display = "none";
    navigationButton.style.display="flex";
    document.body.style.height = "initial";
})

navigationButton.addEventListener("mouseenter", (e) => {
    if (!navigationMenu.classList.contains("show"))
        navigationMenu.classList.add("show");
})

navigationButton.addEventListener("mouseleave", (e) => {
    setTimeout(() => {
        if (navigationMenu.classList.contains("show"))
            navigationMenu.classList.remove("show");
    }, 1000)
})


navigationButton.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("navigation"))
        navigationMenu.classList.add("show-navigation");


})
closeButton.addEventListener("click", (e) => {
    if (navigationMenu.classList.contains("show"))
        navigationMenu.classList.remove("show");
    if (navigationMenu.classList.contains("show-navigation"))
        navigationMenu.classList.remove("show-navigation");
})

