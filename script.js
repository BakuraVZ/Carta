function startMessage() {
    document.querySelector(".screen").classList.add("hidden");
    document.querySelector(".message").classList.remove("hidden");
}

function showHearts() {
    let questionBox = document.querySelector(".valentine-question");
    let heartsContainer = document.querySelector(".hearts");
    let loveMessage = document.querySelector(".love-message");
    let noMessage = document.querySelector(".no-message");

    if (questionBox) questionBox.style.display = "none";
    if (noMessage) noMessage.classList.add("hidden");

    if (heartsContainer) heartsContainer.classList.remove("hidden");

    let hearts = document.querySelectorAll(".heart");
    let totalHearts = hearts.length;

    if (totalHearts === 0) {
        console.error("No hay corazones en el contenedor.");
        return;
    }

    let delay = 500;

    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add("full");

            if (index === totalHearts - 1) {
                setTimeout(() => {
                    if (loveMessage) {
                        loveMessage.style.display = "block"; // <-- Asegura que se muestra
                        loveMessage.classList.remove("hidden");
                        loveMessage.classList.add("show");
                    }
                }, delay);
            }
        }, index * delay);
    });
}

function showNoMessage() {
    let questionBox = document.querySelector(".valentine-question");
    let noMessage = document.querySelector(".no-message");

    if (questionBox) questionBox.style.display = "none";
    if (noMessage) {
        noMessage.style.display = "block"; // <-- Asegura que se muestra
        noMessage.classList.remove("hidden");
        noMessage.classList.add("show");
    }
}
