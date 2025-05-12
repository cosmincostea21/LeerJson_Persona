// Fetch de un archivo JSON
fetch('personas.json')
    .then(response => response.json()) // Corregido: Retornar response.json()
    .then(data => {
        data.forEach(persona => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${persona.nombre}</strong> (${persona.edad} años)`;
            document.getElementById('lista').appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

    