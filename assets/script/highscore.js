function writeHighscore() {
    console.log("test")
    var highscore =
    JSON.parse(window.localStorage.getItem('highscore')) || [];
    for (var i=0; i < highscore.length; i++) {
        var showScore = document.createElement("h2");
        showScore.textContent=highscore[i].name + highscore.score;
    }
}