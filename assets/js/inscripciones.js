 // Lógica para avanzar entre pasos, verificación, drag-drop de archivos, etc. puede ir aquí.
 document.getElementById('btn-siguiente-paso1').addEventListener('click', () => {
    cambiarPaso('step-datos-basicos', 'step-modalidades');
});
document.getElementById('btn-anterior-paso2').addEventListener('click', () => {
    cambiarPaso('step-modalidades', 'step-datos-basicos');
});
document.getElementById('btn-siguiente-paso2').addEventListener('click', () => {
    cambiarPaso('step-modalidades', 'step-representante');
});
document.getElementById('btn-anterior-paso3').addEventListener('click', () => {
    cambiarPaso('step-representante', 'step-modalidades');
});
document.getElementById('btn-siguiente-paso3').addEventListener('click', () => {
    cambiarPaso('step-representante', 'step-director-tecnico');
});
document.getElementById('btn-anterior-paso4').addEventListener('click', () => {
    cambiarPaso('step-director-tecnico', 'step-representante');
});
document.getElementById('btn-siguiente-paso4').addEventListener('click', () => {
    cambiarPaso('step-director-tecnico', 'step-documentos');
});
document.getElementById('btn-anterior-paso5').addEventListener('click', () => {
    cambiarPaso('step-documentos', 'step-director-tecnico');
});

function cambiarPaso(actual, siguiente) {
    document.getElementById(actual).classList.remove('active');
    document.getElementById(siguiente).classList.add('active');

    const pasos = document.querySelectorAll('.step');
    pasos.forEach(p => p.classList.remove('active'));
    const stepElement = document.querySelector(`.step[data-step="${siguiente.match(/\d+/)[0]}"]`);
    if (stepElement) stepElement.classList.add('active');
}

// Activar input oculto de archivos
document.getElementById('dropzone').addEventListener('click', () => {
    document.getElementById('input-archivos').click();
});