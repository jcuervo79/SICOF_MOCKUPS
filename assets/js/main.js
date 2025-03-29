document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');

    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            sidebarContainer.innerHTML = html;

            // Esto garantiza que sidebarToggle exista en el DOM antes de usarlo
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebar = document.getElementById('sidebar');

            if (sidebarToggle && sidebar) {
                sidebarToggle.addEventListener('click', () => {
                    sidebar.classList.toggle('collapsed');
                });
            } else {
                console.error('No se encontró sidebarToggle o sidebar.');
            }

            // Aquí puedes agregar el resto de tu código para eventos del menú
        })
        .catch(err => {
            console.error('Error al cargar el menú:', err);
        });

        const mainContent = document.getElementById('mainContent');

        function loadDashboard() {
            fetch('modules/dashboard.html') // Ruta al dashboard
                .then(res => res.text())
                .then(html => {
                    mainContent.innerHTML = html;
                })
                .catch(err => {
                    console.error('Error:', err);
                    mainContent.innerHTML = '<p>Error al cargar el Dashboard.</p>';
                });
        }

        loadDashboard(); 
});