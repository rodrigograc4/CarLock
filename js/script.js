function handleClick() {
    const image = document.getElementById('lockImage');
    const originalSrc = 'images/open_lock.png';
    const newSrc = 'images/lock.png';

    // Aumentar a imagem
    image.style.transform = 'translateY(-50%) scale(1.4)';

    // Esperar um pouco antes de mudar a imagem
    setTimeout(() => {
        image.src = newSrc;

        // Imprimir a data e hora no console
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        console.log(`${hours}:${minutes}   ${day}/${month}/${year}`);

        // Retornar a imagem ao tamanho original após 1 segundo
        setTimeout(() => {
            image.style.transform = 'translateY(-50%) scale(1)';
        }, 1000);
    }, 400); // Tempo de espera deve ser igual ao tempo de transição

    image.onclick = null;
    image.style.cursor = 'default';
}
