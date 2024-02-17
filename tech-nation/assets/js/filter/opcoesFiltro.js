export const meses = ['-', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
export const trimestres = [ '-', 'Trimestre 1', 'Trimestre 2', 'Trimestre 3', 'Trimestre 4'];
export const anos = ['2022', '2023', '2024', '2025', '2026', '2027','2028','2029', '2030'];

function gerarOpcoesFiltro(array, idFiltro) {
    const filtro = document.getElementById(idFiltro);
    array.forEach((item, index) => {
        const opcao = document.createElement('option');
        opcao.value = index;
        opcao.text = item;
        filtro.add(opcao);
    });
}

window.onload = function() {
    gerarOpcoesFiltro(meses, 'filtro-mes');
    gerarOpcoesFiltro(trimestres, 'filtro-trimestre');
    gerarOpcoesFiltro(anos, 'filtro-ano');
};