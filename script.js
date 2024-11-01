document.addEventListener('DOMContentLoaded', function () {
    const telefoneInput = document.getElementById('telefone');

    telefoneInput.addEventListener('input', function () {
        let telefone = telefoneInput.value.replace(/\D/g, ''); 
        telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); 
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); 

        telefoneInput.value = telefone.substring(0, 15); 
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefone = telefoneInput.value;

        if (!emailRegex.test(emailInput.value)) {
            alert('Por favor, insira um e-mail válido.');
            event.preventDefault();
            return;
        }

        if (telefone && !/\(\d{2}\) \d{5}-\d{4}/.test(telefone)) {
            alert('Por favor, insira um telefone válido no formato (99) 99999-9999.');
            event.preventDefault();
        }
    });
});