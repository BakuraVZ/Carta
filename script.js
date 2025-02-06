function startMessage() {
    document.querySelector(".screen").classList.add("hidden");
    document.querySelector(".message").classList.remove("hidden");
}

// Función para mostrar los corazones progresivamente y luego el mensaje
function showHearts() {
    let questionBox = document.querySelector(".valentine-question");
    let heartsContainer = document.querySelector(".hearts");
    let loveMessage = document.querySelector(".love-message");
    let noMessage = document.querySelector(".no-message");

    // Ocultar la pregunta y asegurar que el mensaje de "No" no aparezca
    if (questionBox) questionBox.style.display = "none";
    if (noMessage) noMessage.classList.add("hidden");

    // Mostrar el contenedor de corazones
    if (heartsContainer) heartsContainer.classList.remove("hidden");

    let hearts = document.querySelectorAll(".heart");
    let totalHearts = hearts.length;

    // Animar los corazones uno por uno
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add("full");
            
            // Cuando el último corazón se llena, mostrar el mensaje final
            if (index === totalHearts - 1) {
                setTimeout(() => {
                    if (loveMessage) {
                        loveMessage.classList.remove("hidden");
                    }
                }, 500); // Se da un pequeño retraso para una mejor transición
            }
        }, index * 500); // Cada corazón se llena cada 500ms
    });
}

// Función para mostrar el mensaje de rechazo
function showNoMessage() {
    let questionBox = document.querySelector(".valentine-question");
    let noMessage = document.querySelector(".no-message");
    let heartsContainer = document.querySelector(".hearts");
    let loveMessage = document.querySelector(".love-message");

    if (questionBox) questionBox.style.display = "none";
    if (noMessage) noMessage.classList.remove("hidden"); // Ahora sí muestra el mensaje de rechazo
    if (heartsContainer) heartsContainer.classList.add("hidden"); // Oculta corazones si estaban visibles
    if (loveMessage) loveMessage.classList.add("hidden"); // Oculta mensaje de amor si estaba visible
}
