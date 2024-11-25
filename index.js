let totalScoreHome = 0;
let totalScoreGuest = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
homeScore.textContent = 0;
guestScore.textContent = 0;

function plusOneHome() {
   totalScoreHome += 1;
   homeScore.textContent = totalScoreHome;
}

function plusTwoHome() {
   totalScoreHome += 2;
   homeScore.textContent = totalScoreHome;
}

function plusThreeHome() {
   totalScoreHome += 3;
   homeScore.textContent = totalScoreHome;
}

function plusOneGuest() {
   totalScoreGuest += 1;
   guestScore.textContent = totalScoreGuest;
}

function plusTwoGuest() {
   totalScoreGuest += 2;
   guestScore.textContent = totalScoreGuest;
}

function plusThreeGuest() {
   totalScoreGuest += 3;
   guestScore.textContent = totalScoreGuest;
}
