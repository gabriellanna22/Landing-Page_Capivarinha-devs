document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links que levam a seções
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();

            // Obtém o ID da seção a qual o link se refere
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Realiza a rolagem suave até a seção
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});