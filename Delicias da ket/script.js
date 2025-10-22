// Espera o documento carregar para rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões de pagamento
    const paymentOptions = document.querySelectorAll('.payment-option');

    // Adiciona um "ouvinte" de clique para cada botão
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            
            // 1. Remove a classe 'selected' de todos os botões
            paymentOptions.forEach(btn => {
                btn.classList.remove('selected');
            });

            // 2. Adiciona a classe 'selected' apenas no botão que foi clicado
            option.classList.add('selected');
        });
    });
});