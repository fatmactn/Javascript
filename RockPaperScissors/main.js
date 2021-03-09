const modal = document.querySelector(".modal");
const modalbutton = document.querySelector(".modal button");
const game = document.querySelector(".game");
const pscore = document.querySelector(".player-score p");
const cscore = document.querySelector(".computer-score p");
const buttons = document.querySelectorAll(".buttons button");
const playericon = document.querySelector(".player-image img");
const computericon = document.querySelector(".computer-image img");
const score = document.querySelector(".result");
let playerscore = 0;
let computerscore = 0;
const options = ["rock", "paper", "scissors"];

function startgame() {
    modal.classList.toggle("reveal");
}

modalbutton.addEventListener("click", () => {
    modal.classList.toggle("reveal");
    modal.style.pointerEvents = "none";
    game.classList.toggle("reveal");
})

buttons.forEach(item => {
    item.addEventListener("click", (e) => {
        const pchoise = e.target.getAttribute("data-value");
        const cchoise = options[(Math.floor(Math.random() * 3))];
        playericon.src = "./images/rock.png";
        computericon.src = "./images/rock.png";
        playericon.classList.toggle("move");
        computericon.classList.toggle("move");
        game.classList.toggle("disablebuttons");

        setTimeout(() => {
            playericon.classList.toggle("move");
            computericon.classList.toggle("move");
            game.classList.toggle("disablebuttons");
            playericon.src = `./images/${pchoise}.png`;
            computericon.src = `./images/${cchoise}.png`;
            gameresult(pchoise, cchoise);
        }, 2000)
    });
});

function gameresult(pvalue, cvalue) {
    if (pvalue == "rock") {
        if (cvalue == "rock") {
            score.textContent = "It's a tie";
        } else if (cvalue == "paper") {
            score.textContent = "Computer wins";
            computerscore++;
            cscore.textContent = computerscore;
        } else if (cvalue = "scissors") {
            score.textContent = "Player wins";
            playerscore++;
            pscore.textContent = playerscore;
        }
    } else if (pvalue == "paper") {
        if (cvalue == "paper") {
            score.textContent = "It's a tie";
        } else if (cvalue == "scissors") {
            score.textContent = "Computer wins";
            computerscore++;
            cscore.textContent = computerscore;
        } else if (cvalue = "rock") {
            score.textContent = "Player wins";
            playerscore++;
            pscore.textContent = playerscore;
        }
    } else if (pvalue == "scissors") {
        if (cvalue == "scissors") {
            score.textContent = "It's a tie";
        } else if (cvalue == "rock") {
            score.textContent = "Computer wins";
            computerscore++;
            cscore.textContent = computerscore;
        } else if (cvalue = "paper") {
            score.textContent = "Player wins";
            playerscore++;
            pscore.textContent = playerscore;
        }
    }
}

startgame();