document.addEventListener('DOMContentLoaded', function() {
    // Tabs principales: Consulta, Registro, Seguimiento
    const tabLinks = document.querySelectorAll('.nav-tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Desactivar todos los tabs
            tabLinks.forEach(l => l.classList.remove('active'));

            // Activar el tab actual
            this.classList.add('active');

            // Mostrar contenido del tab correspondiente
            const tabId = this.getAttribute('data-tab');
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Mostrar/Ocultar sección de trámites relacionados
    const relacionSi = document.getElementById('relacion-si');
    const relacionNo = document.getElementById('relacion-no');
    const seccionRelaciones = document.getElementById('seccion-relaciones');

    if (relacionSi && relacionNo && seccionRelaciones) {
        relacionSi.addEventListener('change', function() {
            if (this.checked) {
                seccionRelaciones.style.display = 'block';
            }
        });

        relacionNo.addEventListener('change', function() {
            if (this.checked) {
                seccionRelaciones.style.display = 'none';
            }
        });
    }

    // Tabs secundarias en Seguimiento
    const secondaryTabs = document.querySelectorAll('.secondary-tab');

    secondaryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            secondaryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // Aquí podrías agregar lógica para cambiar contenido de sección si lo deseas
        });
    });
});
