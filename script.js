const intro = document.querySelector(".intro");
const sorting = document.querySelector(".sorting");
const letter = document.querySelector(".letter");
const beginButton = document.querySelector(".letter button");


/* Wait for parchment image to load */

const parchment = new Image();

parchment.onload = function() {
    letter.classList.add("loaded");
};

parchment.src = "assets/parchment.png";


/* Hogwarts Invitation */

beginButton.addEventListener("click", function() {

    intro.style.display = "none";

    sorting.style.display = "flex";

});


/* Sorting Hat */

const houseButtons = document.querySelectorAll(".houses button");

const houseResult = document.querySelector("#houseResult");
const houseName = document.querySelector("#houseName");
const houseMessage = document.querySelector("#houseMessage");


const messages = {

    "Gryffindor":
        "Courageous, resilient, and never one to back down. There is a little bit of a brave Gryffindor in you.",

    "Ravenclaw":
        "Curious, clever, and always thinking. Your mind has a way of wandering into places most people never notice.",

    "Hufflepuff":
        "Loyal, patient, and warm-hearted. You have a way of making the people around you feel like they belong.",

    "Slytherin":
        "Determined, clever, and ambitious. You know what you want, and you're not afraid to go after it."

};


houseButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const house = button.dataset.house;

        houseName.textContent = house;

        houseMessage.textContent = messages[house];

        houseResult.style.display = "block";

    });

});


/* Magical Challenge */

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

    wandButton.style.transform =
        "rotate(-20deg) scale(1.2)";

    magicResult.style.display = "block";

});


/* Birthday Scene */

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

    candleHint.textContent =
        "The candles have been blown out. ✨";

    wishButton.style.display = "block";

});


/* Final Letter */

const finalLetter = document.querySelector("#finalLetter");

const openLetter = document.querySelector("#openLetter");

const floatingLetter = document.querySelector("#floatingLetter");

const letterContent = document.querySelector("#letterContent");

const dawnButton = document.querySelector("#dawnButton");


wishButton.addEventListener("click", function() {

    wishButton.textContent =
        "Wish granted. ...probably. 👀✨";


    setTimeout(function() {

        birthday.style.display = "none";

        finalLetter.style.display = "flex";

    }, 1500);

});


openLetter.addEventListener("click", function() {

    floatingLetter.style.display = "none";

    letterContent.style.display = "block";

});


/* Dawn Ending */

const dawn = document.querySelector("#dawn");

const restartButton = document.querySelector("#restartButton");


dawnButton.addEventListener("click", function() {

    finalLetter.style.display = "none";

    dawn.style.display = "flex";

});


/* Restart */

restartButton.addEventListener("click", function() {

    dawn.style.display = "none";

    intro.style.display = "flex";

});