let gameSeq = [];
let userSeq = [];
let btn = ["pink", "green", "orange", "blue"];
let started = false;
let level = 0;
let highScore = localStorage.getItem("highScore") || 0;

const h3 = document.querySelector("h3");
const body = document.querySelector("body");
const highScoreDisplay = document.querySelector("#highScore");

// Initialize high score display
highScoreDisplay.textContent = highScore;

document.addEventListener("keypress", function() {
    if (!started) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.textContent = `Level ${level}`;

    // Update high score if current level surpasses it
    if (level > highScore) {
        highScore = level;
        localStorage.setItem("highScore", highScore);
        highScoreDisplay.textContent = highScore;
    }

    const randIdx = Math.floor(Math.random() * 4);
    const randColor = btn[randIdx];
    const randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b>.<br>Press any key to restart.`;
        body.classList.add("danger");
        setTimeout(() => body.classList.remove("danger"), 150);
        reset();
    }
}

function btnPress() {
    const btn = this;
    btnFlash(btn);
    const userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("click", btnPress));

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}