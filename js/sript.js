function buscarProdutos() {
    const termoBusca = document.querySelector('.search-section input[type="search"]').value;
    
    if (termoBusca) {
        window.location.href = `resultados.html?query=${encodeURIComponent(termoBusca)}`;
    }
}

document.getElementById('search-button').addEventListener('click', buscarProdutos);

document.querySelector('.search-section input[type="search"]').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        buscarProdutos();
    }
});
