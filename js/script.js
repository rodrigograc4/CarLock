function handleClick() {
    const image = document.getElementById('lockImage');
    const originalSrc = 'images/open_lock.png';
    const newSrc = 'images/lock.png';

    // Aumentar a imagem
    image.style.transform = 'translateY(-50%) scale(1.4)';

    // Esperar um pouco antes de mudar a imagem
    setTimeout(() => {
        image.src = newSrc;

        // Obter a data e hora atual
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        const currentDateTime = `${hours}:${minutes}   ${day}/${month}/${year}`;

        
        const lastlock4 = localStorage.getItem('last-lock-4');
        localStorage.setItem('last-lock-5', lastlock4);

        const lastlock3 = localStorage.getItem('last-lock-3');
        localStorage.setItem('last-lock-4', lastlock3);

        const lastlock2 = localStorage.getItem('last-lock-2');
        localStorage.setItem('last-lock-3', lastlock2);

        const lastlock1 = localStorage.getItem('last-lock-1');
        localStorage.setItem('last-lock-2', lastlock1);
        
        const lastlock = localStorage.getItem('last-lock');
        localStorage.setItem('last-lock-1', lastlock);

        localStorage.setItem('last-lock', currentDateTime);

        console.log(localStorage.getItem('last-lock-1'));
        console.log(localStorage.getItem('last-lock-2'));
        console.log(localStorage.getItem('last-lock-3'));
        console.log(localStorage.getItem('last-lock-4'));
        console.log(localStorage.getItem('last-lock-5'));
        console.log(localStorage.getItem('last-lock'));

        // Retornar a imagem ao tamanho original após 1 segundo
        setTimeout(() => {
            image.style.transform = 'translateY(-50%) scale(1)';
        }, 1000);
    }, 400);

    // Desativar o clique na imagem e definir o cursor como padrão
    image.onclick = null;
    image.style.cursor = 'default';
}