// Función para mostrar el modal con los detalles del producto
function verDetalles(producto) {
    // Simulamos datos de productos
    const productos = {
        'ventana-pvc': {
            titulo: 'Ventana PVC',
            img: 'ventana-pvc.jpg',
            descripcion: 'Ventana de PVC de alta calidad, ideal para aislamiento térmico y acústico.',
            precio: '$300'
        },
        'ventana-aluminio': {
            titulo: 'Ventana Aluminio',
            img: 'ventana-aluminio.jpg',
            descripcion: 'Ventana de aluminio, duradera y resistente para ambientes exteriores.',
            precio: '$250'
        },
        'puerta-pvc': {
            titulo: 'Puerta PVC',
            img: 'puerta-pvc.jpg',
            descripcion: 'Puerta de PVC, fácil de instalar y mantener.',
            precio: '$400'
        },
        'puerta-aluminio': {
            titulo: 'Puerta Aluminio',
            img: 'puerta-aluminio.jpg',
            descripcion: 'Puerta de aluminio resistente, ideal para seguridad y durabilidad.',
            precio: '$350'
        },
        'cielo-falso': {
            titulo: 'Cielo Falso',
            img: 'cielo-falso.jpg',
            descripcion: 'Cielo falso de alta calidad, perfecto para interiores modernos.',
            precio: '$150'
        },
        'mostrador': {
            titulo: 'Mostrador',
            img: 'mostrador.jpg',
            descripcion: 'Mostrador de oficina elegante, con gran capacidad de almacenamiento.',
            precio: '$500'
        }
    };

    // Accedemos a los detalles del producto seleccionado
    const detalle = productos[producto];

    // Actualizamos el modal con la información
    document.getElementById('tituloModal').textContent = detalle.titulo;
    document.getElementById('imgModal').src = detalle.img;
    document.getElementById('descripcionModal').textContent = detalle.descripcion;
    document.getElementById('precioModal').textContent = `Precio: ${detalle.precio}`;

    // Mostramos el modal
    document.getElementById('modal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Función para solicitar más información
function solicitarInformacion() {
    alert('Gracias por solicitar más información. Nos pondremos en contacto contigo pronto.');
}




function solicitarInformacion() {
    fetch('/enviar-sms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ solicitud: 'más información' })
    })
    .then(response => response.json())
    .then(data => {
        alert('Gracias por solicitar más información. Nos pondremos en contacto contigo pronto.');
    })
    .catch(error => {
        alert('Hubo un problema al enviar el mensaje. Inténtalo más tarde.');
    });
}
