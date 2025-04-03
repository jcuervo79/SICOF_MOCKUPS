// Cargar el menú desde un archivo externo
fetch('../components/menu.html')
.then(res => res.text())
.then(html => {
    document.getElementById('sidebar-container').innerHTML = html;

    // Activar comportamiento del menú
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Submenús
    const menuLinks = document.querySelectorAll('.nav-link[data-toggle="submenu"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const submenuId = 'submenu-' + link.dataset.section;
            const submenu = document.getElementById(submenuId);
            document.querySelectorAll('.submenu').forEach(menu => {
                if (menu !== submenu) menu.classList.remove('active');
            });
            submenu.classList.toggle('active');
        });
    });

    // ✅ AQUÍ VA el código para navegación normal (actualizado)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const isSubmenu = link.dataset.toggle === 'submenu';

            if (!isSubmenu) {
                // navegación real, no hacer preventDefault
                return;
            }

            // solo bloquear si es submenu
            e.preventDefault();
            const submenuId = 'submenu-' + link.dataset.section;
            const submenu = document.getElementById(submenuId);
            document.querySelectorAll('.submenu').forEach(menu => {
                if (menu !== submenu) menu.classList.remove('active');
            });
            submenu.classList.toggle('active');
        });
    });
});
