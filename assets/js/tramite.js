// Función que activa pestañas
const activateTab = (tabId) => {
    document.querySelectorAll('.nav-tab-link').forEach(link => {
        link.classList.toggle('active', link.dataset.tab === tabId);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
    });
};

// Carga automática del menú lateral al abrir tramites.html
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');

    // Cargar menú lateral
    fetch('../menu.html').then(res => res.text()).then(html => {
        sidebarContainer.innerHTML = html;

        sidebarContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const url = link.getAttribute('href');
                const tab = link.getAttribute('data-tab');

                if (url && url !== '#') {
                    window.location.href = tab ? `${url}?tab=${tab}` : url;
                }

                if(link.dataset.toggle === "submenu") {
                    link.nextElementSibling.classList.toggle('active');
                }
            });

            // Mantener abierto submenú de trámites por defecto
            const submenuTramites = document.querySelector('[data-toggle="submenu"]').nextElementSibling;
            submenuTramites.classList.add('active');
        });
    });

    // Obtener la pestaña desde URL
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get('tab') || 'consulta';

    activateTab(activeTab);

    // Control manual de pestañas
    document.querySelectorAll('.nav-tab-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            activateTab(link.dataset.tab);
        });
    });
});