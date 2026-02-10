const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

let isAlive;
let isGameOver = false;

function jump() {
    if (!dino.classList.contains("jump") && !isGameOver) {
        dino.classList.add("jump");

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 500);
    }
}

// Keyboard
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        if (isGameOver) startGame();
        else jump();
    }
});

// Click / tap
document.addEventListener("click", () => {
    if (isGameOver) startGame();
    else jump();
});

function startGame() {
    isGameOver = false;

    // reset cactus
    cactus.style.animation = "none";
    cactus.style.display = "block";
    cactus.offsetHeight; // trigger reflow
    cactus.style.animation = "cactusMove 2s linear infinite";

    // start collision detection
    isAlive = setInterval(checkCollision, 10);
}

function checkCollision() {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("bottom")
    );

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("right")
    );

    if (cactusLeft > 520 && cactusLeft < 560 && dinoTop < 40) {
        gameOver();
    }
}

function gameOver() {
    isGameOver = true;
    clearInterval(isAlive);

    cactus.style.animation = "none";
    cactus.style.display = "none";

    setTimeout(() => {
        alert("Game Over!\nKlik / Spasi untuk main lagi");
    }, 50);
}

// mulai game pertama kali
startGame();
