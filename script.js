const intro = document.querySelector(".intro");
const sorting = document.querySelector(".sorting");
const beginButton = document.querySelector(".letter button");

beginButton.addEventListener("click", function() {
    intro.style.display = "none";
    sorting.style.display = "flex";
});