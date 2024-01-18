const contenedorPadreLista = document.querySelector('#listaTareas');
const botonTareas = document.querySelector('#boton1');
const input1 = document.querySelector('#input1');

function creadorTarea(e) {

    if (input1.value === '') {
        alert('añade texto, porfavor')

    } else {
        const nuevaTarea = document.createElement('div');
        nuevaTarea.classList.add('tarea');
        contenedorPadreLista.appendChild(nuevaTarea);

        const elementoP = document.createElement('p');
        nuevaTarea.appendChild(elementoP);
        elementoP.textContent = input1.value;

        const botonPapelera = document.createElement('button');
        botonPapelera.innerHTML = '<i class="fa-regular fa-trash-can" id="papelera">';
        botonPapelera.classList.add('boton2');
        nuevaTarea.appendChild(botonPapelera);

        eliminarTarea(nuevaTarea);
    }
}
botonTareas.addEventListener('click', creadorTarea);

function eliminarTarea(tarea) {

    const botonPapelera = tarea.querySelector('.boton2');
    botonPapelera.addEventListener('click', function () {
        tarea.remove();
    });
}
