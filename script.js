const dino = document.getElementById("dino");
const game = document.querySelector(".game");
let cactus = document.getElementById("cactus");

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

document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        isGameOver ? startGame() : jump();
    }
});

document.addEventListener("click", () => {
    isGameOver ? startGame() : jump();
});

function startGame() {
    isGameOver = false;

    if (cactus) cactus.remove();

    cactus = document.createElement("div");
    cactus.id = "cactus";
    game.appendChild(cactus); // 🔥 WAJIB ke .game

    clearInterval(isAlive);
    isAlive = setInterval(checkCollision, 10);
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.right > cactusRect.left &&
        dinoRect.left < cactusRect.right &&
        dinoRect.bottom > cactusRect.top
    ) {
        gameOver();
    }
}

function gameOver() {
    isGameOver = true;
    clearInterval(isAlive);
    cactus.remove();
    alert("Game Over!\nTekan spasi / klik untuk main lagi");
}

startGame();
