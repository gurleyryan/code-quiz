var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var backButton = document.querySelector("#backButton");
var allScores = localStorage.getItem("allScores");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
};

backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});