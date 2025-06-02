// Menu Mobile
document.querySelector('.menu-mobile').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Modal de Pagamento
const buyButtons = document.querySelectorAll('.buy-button');
const paymentModal = document.getElementById('payment-modal');
const closeModal = document.querySelector('.close-modal');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        document.getElementById('product-name').textContent = productName;
        paymentModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) {
        paymentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Validação do Formulário
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const cardNumber = e.target.querySelector('input[type="text"]').value;
    
    // Simulação de pagamento
    if (cardNumber === '4242424242424242') {
        // Animação de sucesso
        const submitButton = e.target.querySelector('button');
        submitButton.innerHTML = '<i class="fas fa-check"></i> Pagamento Aprovado';
        submitButton.style.backgroundColor = 'var(--success)';
        
        setTimeout(() => {
            paymentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            alert('Pagamento bem-sucedido! Um e-mail foi enviado com os detalhes.');
            submitButton.innerHTML = '<i class="fas fa-euro-sign"></i> Confirmar Pagamento';
            submitButton.style.backgroundColor = 'var(--secondary)';
            e.target.reset();
        }, 2000);
    } else {
        // Animação de erro
        const submitButton = e.target.querySelector('button');
        submitButton.innerHTML = '<i class="fas fa-times"></i> Cartão Inválido';
        submitButton.style.backgroundColor = 'var(--accent)';
        
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-euro-sign"></i> Confirmar Pagamento';
            submitButton.style.backgroundColor = 'var(--secondary)';
        }, 1500);
    }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se aberto
            document.querySelector('.nav').classList.remove('active');
        }
    });
});

// Animação ao rolar
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .section-title, .section-subtitle');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar elementos com opacidade 0 para animação
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
    });
    
    document.querySelector('.section-title').style.opacity = '0';
    document.querySelector('.section-title').style.transform = 'translateY(20px)';
    document.querySelector('.section-title').style.transition = 'all 0.6s ease-out';
    
    document.querySelector('.section-subtitle').style.opacity = '0';
    document.querySelector('.section-subtitle').style.transform = 'translateY(20px)';
    document.querySelector('.section-subtitle').style.transition = 'all 0.6s ease-out 0.2s';
});
// Animação dos números na seção Sobre
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.innerText;
        const increment = target / speed;
        
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target;
        }
    });
}

// Observador para animar quando a seção for visível
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

aboutObserver.observe(document.querySelector('.about-section'));

// Validação do formulário de contato
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const submitButton = e.target.querySelector('button');
    
    // Simulação de envio
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
        submitButton.style.backgroundColor = 'var(--success)';
        
        setTimeout(() => {
            e.target.reset();
            submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensagem';
            submitButton.style.backgroundColor = 'var(--secondary)';
            submitButton.disabled = false;
        }, 2000);
    }, 1500);
});
window.addEventListener('scroll', animateOnScroll);
