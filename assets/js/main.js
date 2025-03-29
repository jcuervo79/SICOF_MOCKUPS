document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');
    const mainContent = document.getElementById('mainContent');

    // Función para cargar módulos
    const loadModule = (url, tabId = null) => {
        fetch(url).then(res => res.text()).then(html => {
            mainContent.innerHTML = html;

            // Activar pestaña o sección específica si existe
            if(tabId) {
                const event = new CustomEvent('activateTab', { detail: tabId });
                document.dispatchEvent(event);
            }
        }).catch(err => {
            mainContent.innerHTML = '<p>Error al cargar el módulo.</p>';
            console.error(err);
        });
    };

    // Cargar menú lateral UNA sola vez
    fetch('menu.html').then(res => res.text()).then(html => {
        sidebarContainer.innerHTML = html;

        sidebarContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();

                const url = link.getAttribute('href');
                const tab = link.getAttribute('data-tab');

                if (url && url !== '#') {
                    loadModule(url, tab);
                }

                if(link.dataset.toggle === "submenu") {
                    link.nextElementSibling.classList.toggle('active');
                }
            });
        });

        // Por defecto: Carga Dashboard al iniciar
        loadModule('modules/dashboard.html');
    });
});