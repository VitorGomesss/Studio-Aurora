document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Simples lógica para mostrar/esconder se não houver CSS para .active
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--bg-color)';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1.5rem';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                navLinks.style.zIndex = '1000';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }

    // Smooth Scroll para links internos da navegação
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o pulo padrão da âncora
            e.preventDefault();
            
            // Pega o valor do atributo href (ID da seção alvo)
            const targetId = this.getAttribute('href');
            
            // Verifica se é uma âncora válida
            if (targetId && targetId.startsWith('#')) {
                // Seleciona o elemento correspondente no DOM
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Desliza suavemente até a seção e posiciona no centro da tela
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    // Fecha o menu mobile se estiver aberto
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        navLinks.style.display = 'none';
                    }
                }
            }
        });
    });

    // Header Scroll Logic
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal animation on scroll (Intersection Observer)
    const revealOptions = {
        root: null,
        rootMargin: "-10% 0px -10% 0px", // Reduzido ligeiramente para dar mais espaço de estabilidade
        threshold: [0, 0.2] // Usa múltiplos thresholds para evitar o efeito gangorra
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });
});
