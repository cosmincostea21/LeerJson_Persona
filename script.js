// Fetch de un archivo JSON
fetch('personas.json')
    .then(response => response.json()) // Corregido: Retornar response.json()
    .then(data => {
        data.forEach(persona => {
            document.getElementById("nombre").value = persona.nombre[0]});
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

    