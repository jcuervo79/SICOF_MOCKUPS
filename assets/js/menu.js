// Cargar el menú desde un archivo externo
fetch('components/menu.html')
.then(res => res.text())
.then(html => {
    document.getElementById('sidebar-container').innerHTML = html;

    // Luego de insertar el HTML, activar comportamiento del menú
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    sidebarToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

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

    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.dataset.toggle) {
                e.preventDefault();
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                const sectionId = link.dataset.section + '-section';
                console.log('Navegando a sección: ' + sectionId);
            }
        });
    });
});