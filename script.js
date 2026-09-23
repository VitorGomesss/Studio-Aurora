/* ==========================================================================
   Integração Amazon Connect Chat Widget (Cores Studio Aurora)
   ========================================================================== */
(function(w, d, x, id){
    s=d.createElement('script');
    s.src='https://testeskillbuilder.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js';
    s.async=1;
    s.id=id;
    d.getElementsByTagName('head')[0].appendChild(s);
    w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
})(window, document, 'amazon_connect', '9cf40dd7-536e-4a11-b50f-848b83b6da67');

amazon_connect('styles', { 
    iconType: 'CHAT', 
    openChat: { 
        color: '#F9F8F6',            // Cor do ícone (Bege claro)
        backgroundColor: '#2B2A27'   // Fundo do botão (Grafite escuro)
    }, 
    closeChat: { 
        color: '#F9F8F6', 
        backgroundColor: '#2B2A27' 
    } 
});

amazon_connect('snippetId', 'QVFJREFIaEZ5ZjhlbTkwTGlJQ0RQVlozbFpkalBOMm91NWh2aGNUZHZhTTZac1lEMndGcW1TUzZTN0hqRnZPN001UHZDYkpFQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNa2RBUC9rZDZBdXRJd1N2bUFnRVFnQ3RBQytlMFNxc0tQQ2tmdmtnSmNseTI0YVFXbThlelVuYzJGWkN3cCs3a2JhVURzZ1AzK1RDNTk2U2w6OlNLd2RTMkk4Q0RmZytJOEpVOVpubENtc0tIbTFwZGp4V0tNaXBYRkhvOEdNQ2FjbStWUTUrVWgwMzNOMzBLanZ3dDdEb0tmRFMrSUFJT3JvK1llSDdnZk9YMUtUY3dDZUJRV01naStXUktsMTN4dnFOVi81Q0MyKzdaNzEzYUlvR0JqR1c5Y2IrZnFKN0EyK2xISEo5N0V3SEZHY1VnST0=');

amazon_connect('supportedMessagingContentTypes', [ 
    'text/plain', 
    'text/markdown', 
    'application/vnd.amazonaws.connect.message.interactive', 
    'application/vnd.amazonaws.connect.message.interactive.response' 
]);

/* ==========================================================================
   Lógica da Interface e Interações da Página
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
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
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
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
        rootMargin: "-10% 0px -10% 0px",
        threshold: [0, 0.2]
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
