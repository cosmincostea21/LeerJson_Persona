// Fetch de un archivo JSON
fetch('persona.json')
    .then(response => response.json()) // Corregido: Retornar response.json()
    .then(data => {
        let personas = data; // Asignar el resultado a la variable personas.
        let contenedor = document.getElementById('personas')
        
        personas.forEach(element => {
            let contenedorHijo = document.createElement('div');
            contenedor.innerHTML = `
                <p>Nombre de la persona ${element.nombre}<p> <br>
                <p>Edad de la persona ${element.edad}<p> <br>`;
            contenedor.appendChild(contenedorHijo);
        });
        
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

    