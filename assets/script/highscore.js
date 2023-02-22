

// writes highscore onto the highscore html page

var highscoreContainer = document.getElementById('highscoreContainer')
writeHighscore();

function writeHighscore() {
    console.log("test")
    var highscore = JSON.parse(window.localStorage.getItem('highscore')) || [];
    console.log(highscore)
    for (var i=0; i < highscore.length; i++) {
        console.log(highscore[i]);
        var showScore = document.createElement("h2");
        
        showScore.textContent=highscore[i].name + '-' + highscore[i].score;
        highscoreContainer.append(showScore);
    }   
}