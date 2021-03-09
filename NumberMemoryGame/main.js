let level = 1;
let count = 1;
let correct = new Audio("./sound/correct.mp3");
let wrong = new Audio("./sound/wrong.mp3");

const section = document.querySelector("section");

function game() {
    section.innerHTML = "";
    for (let i = 0; i < level + 1; i++) {
        let squares = document.createElement("div");
        squares.classList.add("square");
        let posX = Math.floor(Math.random() * 800);
        let posY = Math.floor(Math.random() * 500);
        squares.style.top = posY + "px";
        squares.style.left = posX + "px";
        squares.textContent = i + 1;
        section.appendChild(squares);
    }

    document.querySelectorAll("div").forEach((item) => {
        item.style.pointerEvents = "none";
    });

    setTimeout(() => {
        document.querySelectorAll("div").forEach((item) => {
            item.style.color = "transparent";
            item.style.pointerEvents = "all";
        });
    }, 4000)

    document.querySelectorAll("div").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.target.style.color = "white";
            if (e.target.textContent != count) {
                e.target.style.background = "red";
                wrong.play();
                wrong.currentTime = 0;
                document.querySelectorAll("div").forEach((item) => {
                    item.style.pointerEvents = "none";
                });

                if (level != 1) {
                    setTimeout(() => {
                        level--;
                        count = 1;
                        game();
                    }, 2000);
                } else {
                    setTimeout(() => {
                        count = 1;
                        game();
                    }, 2000);
                }
            } else {
                e.target.style.background = "green";
                correct.play();
                correct.currentTime = 0;
                if (count == level + 1) {
                    document.querySelectorAll("div").forEach((item) => {
                        item.style.pointerEvents = "none";
                    });
                    setTimeout(() => {
                        level++;
                        count = 1;
                        game();
                    }, 2000);
                }
                count++;
            }
        });
    });
}

game();