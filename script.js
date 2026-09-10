const intro = document.querySelector(".intro");
const sorting = document.querySelector(".sorting");
const beginButton = document.querySelector(".letter button");

beginButton.addEventListener("click", function() {
    intro.style.display = "none";
    sorting.style.display = "flex";
});

const houseButtons = document.querySelectorAll(".houses button");

const houseResult = document.querySelector("#houseResult");
const houseName = document.querySelector("#houseName");
const houseMessage = document.querySelector("#houseMessage");

const messages = {
    "🦁 Gryffindor": "Courageous, resilient, and never one to back down. There is a little bit of a brave Gryffindor in you.",
    
    "🦅 Ravenclaw": "Curious, clever, and always thinking. Your mind has a way of wandering into places most people never notice.",
    
    "🦡 Hufflepuff": "Loyal, patient, and warm-hearted. You have a way of making the people around you feel like they belong.",
    
    "🐍 Slytherin": "Determined, clever, and ambitious. You know what you want, and you're not afraid to go after it."
};

houseButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const house = button.textContent;

        houseName.textContent = house;
        houseMessage.textContent = messages[house];

        houseResult.style.display = "block";

    });

});