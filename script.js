const dino = document.getElementById("dino");
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

// Keyboard
document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        isGameOver ? startGame() : jump();
    }
});

// Click
document.addEventListener("click", () => {
    isGameOver ? startGame() : jump();
});

function startGame() {
    isGameOver = false;

    // hapus cactus lama
    cactus.remove();

    // bikin cactus baru
    cactus = document.createElement("div");
    cactus.id = "cactus";
    document.body.appendChild(cactus);

    // start collision
    clearInterval(isAlive);
    isAlive = setInterval(checkCollision, 10);
}

function checkCollision() {
    let dinoTop = parseInt(
        getComputedStyle(dino).getPropertyValue("bottom")
    );

    let cactusRight = parseInt(
        getComputedStyle(cactus).getPropertyValue("right")
    );

    if (cactusRight > 520 && cactusRight < 560 && dinoTop < 40) {
        gameOver();
    }
}

function gameOver() {
    isGameOver = true;
    clearInterval(isAlive);
    cactus.remove();
    alert("Game Over!\nTekan spasi / klik untuk main lagi");
}

// start pertama
startGame();
