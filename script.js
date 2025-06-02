// Interação do CTA Button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Redirecionando para o diagnóstico gratuito...');
    // window.location.href = "https://www.Privacy-as-a-Service.pt";
});

// Validação do Formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.border = '1px solid red';
            isValid = false;
        } else {
            input.style.border = '1px solid #ddd';
        }
    });

    if (isValid) {
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
        this.reset();
    } else {
        alert('Preencha todos os campos obrigatórios!');
    }
});

// Efeito de Scroll Suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
