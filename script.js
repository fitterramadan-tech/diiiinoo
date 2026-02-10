const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");

        setTimeout(() => {
            dino.classList.remove("jump");
        }, 500);
    }
}

// Keyboard
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        jump();
    }
});

// Click / tap
document.addEventListener("click", jump);

// Collision detection
let isAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("bottom")
    );

    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("right")
    );

    if (cactusLeft > 520 && cactusLeft < 560 && dinoTop < 40) {
        alert("Game Over!");
        cactus.style.animation = "none";
        cactus.style.display = "none";
        clearInterval(isAlive);
    }
}, 10);
