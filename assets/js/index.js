// Cargar el menú lateral
fetch('components/menu.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('sidebar-container').innerHTML = html;
    });

// Cargar el contenido del dashboard
fetch('modules/dashboard.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('dashboard-container').innerHTML = html;
    });
