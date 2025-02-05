
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text_2");
    const text = "\"Kau tidak perlu menjadi lebih baik dari orang lain, cukup menjadi dirimu yang lebih baik dari hari kemarin.\"";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80);
        } else {
            textElement.style.borderRight = "none";
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const playPauseBtn = document.getElementById("playPauseBtn");


    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸"; // Ganti ikon ke Pause
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶"; // Ganti ikon ke Play
        }
    });
});

