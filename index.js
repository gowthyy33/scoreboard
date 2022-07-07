let homeDisplay = document.getElementById("score-h")

let homeFoul = 0

let homeScore = 0


function addOne() {
    homeScore += 1
    homeDisplay.innerText = homeScore
}

function addThree() {
    homeScore += 3
    homeDisplay.innerText = homeScore
}

function addFive() {
    homeScore += 5
    homeDisplay.innerText = homeScore
}

function bonusHome() {
    homeScore += 2
    homeDisplay.innerText = homeScore
}

function foulHome() {
    homeFoul += 1

    if(homeFoul >= 3) {
        homeScore -= 5
        homeDisplay.innerText = homeScore
        homeFoul = 0
    }
}



let awayDisplay = document.getElementById("score-a")

let awayFoul = 0
let awayScore = 0

function add1() {
    awayScore += 1
    awayDisplay.innerText = awayScore
}

function add3(){
    awayScore += 3
    awayDisplay.innerText = awayScore
}

function add5() {
    awayScore += 5
    awayDisplay.innerText = awayScore
}


function bonusAway() {
    awayScore += 2
    awayDisplay.innerText = awayScore
}

function foulAway () {
    awayFoul += 1
    if (awayFoul >= 3) {
        awayScore -= 5
        awayDisplay.innerText = awayScore
        awayFoul = 0
    }
}

