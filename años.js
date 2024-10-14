function celebrate() {
    const card = document.querySelector('.card');
    const message = document.getElementById('message');

    // Cambiar el color de fondo de la tarjeta
    card.style.backgroundColor = card.style.backgroundColor === 'lightblue' ? '#ffffff' : 'lightblue';

    // Mostrar el mensaje de cumpleaños
    message.classList.toggle('show');
}
