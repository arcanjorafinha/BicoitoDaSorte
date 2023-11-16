const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const openFortuneCookie = document.querySelector("#openFortuneCookie");
let RandomNumber = Math.round(Math.random() * 5) 
let xAttempts = 1 


const phrasesOfCookie = [
    "You will have a great day today!",
    "Good things are coming your way!",
    "Expect a positive change in your life soon!",
    "You are loved and appreciated by those around you.",
    "A pleasant surprise is in store for you.",
    "Your hard work will soon be rewarded.",
  ];

openFortuneCookie.addEventListener("click", openCookieEvent);

function openCookieEvent(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    screen2.querySelector('p').innerText = phrasesOfCookie[RandomNumber]
    xAttempts++
}

function closedCookieEvent(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    xAttempts = 1
    RandomNumber = Math.round(Math.random() * 5)
}