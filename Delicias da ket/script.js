
document.addEventListener('DOMContentLoaded', () => {

    
    const opcoesPagamento = document.querySelectorAll('.opcao-pagamento');

    
    opcoesPagamento.forEach(opcao => {
        opcao.addEventListener('click', () => {
            
            
            opcoesPagamento.forEach(btn => {
                btn.classList.remove('selecionado');
            });

            
            opcao.classList.add('selecionado');
        });
    });
});