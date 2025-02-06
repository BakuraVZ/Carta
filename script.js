function startMessage() {
  document.querySelector(".screen").style.display = "none";
  document.querySelector(".message").classList.remove("hidden");
}

function showHearts() {
    document.querySelector(".valentine-question").style.display = "none";
    document.querySelector(".hearts").classList.remove("hidden");

    let hearts = document.querySelectorAll(".heart");
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.classList.add("full");
        }, index * 500); // Cada corazón se llena cada 500ms
    });

    setTimeout(() => {
        document.querySelector(".love-message").classList.remove("hidden");
    }, 3000); // Muestra el mensaje después de llenar los corazones
}

function showNoMessage() {
    document.querySelector(".valentine-question").style.display = "none";
    document.querySelector(".no-message").classList.remove("hidden");
}
