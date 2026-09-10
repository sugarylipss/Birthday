const intro = document.querySelector(".intro");
const sorting = document.querySelector(".sorting");
const beginButton = document.querySelector(".letter button");

beginButton.addEventListener("click", function() {
    intro.style.display = "none";
    sorting.style.display = "flex";
});

const houseButtons = document.querySelectorAll(".houses button");

houseButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const house = button.textContent;

        alert("The Sorting Hat has chosen: " + house);

    });
});