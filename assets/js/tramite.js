const activateTab = (tabId) => {
    document.querySelectorAll('.nav-tab-link').forEach(link => {
        link.classList.toggle('active', link.dataset.tab === tabId);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
    });
};

// Escucha evento personalizado para activar pestaña desde fuera
document.addEventListener('activateTab', e => activateTab(e.detail));

// Por defecto, activa consulta
activateTab('consulta');

document.querySelectorAll('.nav-tab-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        activateTab(link.dataset.tab);
    });
});