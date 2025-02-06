function startMessage() {
    document.querySelector(".screen").classList.add("hidden");
    document.querySelector(".message").classList.remove("hidden");
}

// Función para mostrar los corazones progresivamente y luego el mensaje
function showHearts() {
    let questionBox = document.querySelector(".valentine-question");
    let heartsContainer = document.querySelector(".hearts");
    let loveMessage = document.querySelector(".love-message");
    let noMessage = document.querySelector(".no-message"); // Asegurar que el mensaje de rechazo no esté visible

    if (questionBox) questionBox.style.display = "none";
    if (heartsContainer) heartsContainer.classList.remove("hidden");
    if (noMessage) noMessage.classList.add("hidden"); // Oculta el mensaje de rechazo si estaba visible

    let hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add("full");
        }, index * 300); // Ajustado a 300ms para una animación más fluida
    });

    // Mostrar el mensaje de amor después de que todos los corazones se llenen
    setTimeout(() => {
        if (loveMessage) loveMessage.classList.remove("hidden");
    }, hearts.length * 300 + 500); // Se asegura que el mensaje aparezca después de la animación
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
