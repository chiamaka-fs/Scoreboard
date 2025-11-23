let scoredisplay = document.getElementById("homeScores");
let guestScoreDisplay = document.getElementById("guestScores");
let homescore = 0;
let guestscore = 0;

function onePlusHome() {
    homescore += 1;
    scoredisplay.textContent = homescore;
}

function onePlusGuest() {
    guestscore += 1;
    guestScoreDisplay.textContent = guestscore;
}
function twoPlusHome() {
    homescore += 2;
    scoredisplay.textContent = homescore;
}   
function twoPlusGuest() {
    guestscore += 2;
    guestScoreDisplay.textContent = guestscore;
}

function threePlusHome() {
    homescore += 3;
    scoredisplay.textContent = homescore;
}

function threePlusGuest() {
    guestscore += 3;
    guestScoreDisplay.textContent = guestscore;
}
function resetScores() {
    homescore = 0;
    guestscore = 0;
    scoredisplay.textContent = homescore;
    guestScoreDisplay.textContent = guestscore;
}