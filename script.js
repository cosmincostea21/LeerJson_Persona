// Fetch de un archivo JSON
fetch('personas.json')
    .then(response => response.json()) // Corregido: Retornar response.json()
    .then(data => {
        let personas = data; // Asignar el resultado a la variable personas.
        let contenedor = document.getElementById('resultado')
        
        personas.forEach(element => {
            let contenedorHijo = document.createElement('div');
            contenedorHijo.innerHTML = `
                Nombre de la persona ${element.nombre} <br>
                Edad de la persona ${element.edad} <br>`;
            contenedor.appendChild(contenedorHijo);
        });
        
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

    