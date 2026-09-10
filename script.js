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

const magic = document.querySelector("#magic");
const continueButton = document.querySelector("#continueButton");
const wandButton = document.querySelector("#wandButton");
const magicResult = document.querySelector("#magicResult");
const birthdayButton = document.querySelector("#birthdayButton");

continueButton.addEventListener("click", function() {

    sorting.style.display = "none";
    magic.style.display = "flex";

});

wandButton.addEventListener("click", function() {

    wandButton.style.transform = "rotate(-20deg) scale(1.2)";

    magicResult.style.display = "block";

});

const birthday = document.querySelector("#birthday");
const revealText = document.querySelector("#revealText");
const cakeScene = document.querySelector("#cakeScene");
const cake = document.querySelector(".cake");
const wishButton = document.querySelector("#wishButton");
const candleHint = document.querySelector("#candleHint");

birthdayButton.addEventListener("click", function() {

    magic.style.display = "none";
    birthday.style.display = "flex";

    setTimeout(function() {
        revealText.style.display = "none";
        cakeScene.style.display = "block";
    }, 7000);

});

cake.addEventListener("click", function() {

    cake.style.transform = "scale(1.2)";

    candleHint.textContent = "The candles have been blown out. ✨";

    wishButton.style.display = "block";

});

wishButton.addEventListener("click", function() {

    wishButton.textContent = "Wish granted. ...probably. 👀✨";

});