document.addEventListener('DOMContentLoaded', () => {

    const sidebarContainer = document.getElementById('sidebar-container');
    const mainContent = document.getElementById('mainContent');

    // Función que carga cualquier módulo
    const loadModule = (url) => {
        fetch(url)
            .then(res => res.text())
            .then(html => {
                mainContent.innerHTML = html;
            })
            .catch(err => {
                mainContent.innerHTML = '<p>Error al cargar el contenido.</p>';
                console.error('Error:', err);
            });
    };

    // Cargar menú
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            sidebarContainer.innerHTML = html;

            const submenuToggles = document.querySelectorAll('[data-toggle="submenu"]');
            
            submenuToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    const submenu = toggle.nextElementSibling;
                    submenu.classList.toggle('active');
                });
            });

            const menuLinks = document.querySelectorAll('.menu-link, .submenu-link');

            menuLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Remover clase active de todos
                    menuLinks.forEach(lnk => lnk.classList.remove('active'));
                    link.classList.add('active');

                    const url = link.getAttribute('href');
                    loadModule(url);
                });
            });

            // Cargar Dashboard inicialmente
            loadModule('modules/dashboard.html');
        })
        .catch(err => console.error('Error al cargar menú:', err));
});