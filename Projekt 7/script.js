const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    drwas: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")];

// Pierwsza funkcja
function handSelection() {
    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 4px red"
}

// const handSelection = (e) => {
// // this - nie tworzy
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

function aiChoice() {
    return hands[Math.floor(Math.random()*3)].dataset.option;
}

function checkResult(player, ai) {
    // console.log(player, ai);
    if(player === ai) {
        return "draw"
    } else if((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
    return "win"
    } else {
        return "loss"
    }
}

// Publikacja wyników

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

    if(result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-winqw"]').textContent = "Ty wygrałeś!"
        document.querySelector('[data-summary="who-winqw"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-winqw"]').textContent = "Komputer wygrał :("
        document.querySelector('[data-summary="who-winqw"]').style.color = "red";
    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-winqw"]').textContent = "Remis :\\"
        document.querySelector('[data-summary="who-winqw"]').style.color = "gray";
    }
}

function endGame () {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}

// funkcja sterująca

function startGame() {
    if (!game.playerHand) {
        return alert("wybierze dłoń!")
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click", startGame)