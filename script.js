function startMessage() {
    document.querySelector(".screen").classList.add("hidden");
    document.querySelector(".message").classList.remove("hidden");
}

function showHearts() {
    let questionBox = document.querySelector(".valentine-question");
    let heartsContainer = document.querySelector(".hearts");
    let loveMessage = document.querySelector(".love-message");
    let noMessage = document.querySelector(".no-message");

    // Ocultar la pregunta y cualquier otro mensaje
    if (questionBox) questionBox.style.display = "none";
    if (noMessage) noMessage.classList.add("hidden");

    // Mostrar el contenedor de corazones
    if (heartsContainer) heartsContainer.classList.remove("hidden");

    let hearts = document.querySelectorAll(".heart");
    let totalHearts = hearts.length;

    if (totalHearts === 0) {
        console.error("No hay corazones en el contenedor.");
        return;
    }

    let delay = 500; // Tiempo entre cada corazón

    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add("full");

            // Cuando el último corazón se llena, mostrar el mensaje final
            if (index === totalHearts - 1) {
                setTimeout(() => {
                    if (loveMessage) {
                        loveMessage.classList.remove("hidden");
                        loveMessage.classList.add("show"); // Asegura que la clase correcta se active
                    }
                }, delay); // Pequeño retraso para una mejor transición
            }
        }, index * delay);
    });
}

function showNoMessage() {
    let questionBox = document.querySelector(".valentine-question");
    let noMessage = document.querySelector(".no-message");

    if (questionBox) questionBox.style.display = "none";
    if (noMessage) {
        noMessage.classList.remove("hidden");
        noMessage.classList.add("show"); // Asegurar que la clase correcta se active
    }
}
