document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Trámites cargada");

    const tabs = document.querySelectorAll(".secondary-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });
});
