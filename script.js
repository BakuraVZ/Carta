function startMessage() {
    document.querySelector(".screen").classList.add("hidden");
    document.querySelector(".message").classList.remove("hidden");
}

function showHearts() {
    let questionBox = document.querySelector(".valentine-question");
    let heartsContainer = document.querySelector(".hearts");
    let loveMessage = document.querySelector(".love-message");

    if (questionBox) questionBox.style.display = "none";
    if (heartsContainer) heartsContainer.classList.remove("hidden");

    let hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add("full");
        }, index * 500); // Cada corazón se llena cada 500ms
    });

    setTimeout(() => {
        if (loveMessage) loveMessage.classList.remove("hidden");
    }, 3000);
}

function showNoMessage() {
    let questionBox = document.querySelector(".valentine-question");
    let noMessage = document.querySelector(".no-message");

    if (questionBox) questionBox.style.display = "none";
    if (noMessage) noMessage.classList.remove("hidden");
}
