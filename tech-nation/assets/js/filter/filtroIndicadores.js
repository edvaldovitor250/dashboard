import { areaChart } from '../dashboard/area-chart.js'; 
import { data } from '../dados/dashboard-dados.js'; 
import { anos, meses, trimestres } from '../filter/opcoesFiltro.js'; 


function aplicarFiltros() {
    const mesSelecionado = meses[document.getElementById('filtro-mes').value];
    const anoSelecionado = anos[document.getElementById('filtro-ano').value];
    const trimestreSelecionado = trimestres[document.getElementById('filtro-trimestre').value];

    console.log("Mês selecionado:", mesSelecionado);
    console.log("Ano selecionado:", anoSelecionado);
    console.log("Trimestre selecionado:", trimestreSelecionado);

    const dadosFiltrados = data.filter(item => {
        if (item.ano != anoSelecionado) return false;
        if (item.trimestre === trimestreSelecionado || item.mes === mesSelecionado) return true;
    });


    if (dadosFiltrados.length > 0) {

        const dadosProFront = dadosFiltrados.reduce( (acumulado, dadosAtual) => {
            let dados = {}

            if(!acumulado)
                dados = {...dadosAtual};
            else
                dados = {...acumulado};


            dados['Notas Emitidas'] = dados['Notas Emitidas'] + dadosAtual['Notas Emitidas'];
            dados['Notas sem Cobrança'] = dados['Notas sem Cobrança'] + dadosAtual['Notas sem Cobrança'];
            dados['Notas Vencidas'] = dados['Notas Vencidas'] + dadosAtual['Notas Vencidas'];
            dados['Notas a Vencer'] = dados['Notas a Vencer'] + dadosAtual['Notas a Vencer'];
            dados['Notas Pagas'] = dados['Notas Pagas'] + dadosAtual['Notas Pagas'];

            return dados;
        });

        console.log('pro front', dadosProFront);

        document.getElementById('valor-notas-emitidas').innerText = dadosProFront['Notas Emitidas'];
        document.getElementById('valor-notas-sem-cobranca').innerText = dadosProFront['Notas sem Cobrança'];
        document.getElementById('valor-notas-vencidas').innerText = dadosProFront['Notas Vencidas'];
        document.getElementById('valor-notas-a-vencer').innerText = dadosProFront['Notas a Vencer'];
        document.getElementById('valor-notas-pagas').innerText = dadosProFront['Notas Pagas'];

        let seriesPie = []
        
        for (const [key, valor] of Object.entries(dadosProFront)) {
            if(key !== 'mes' && key !== 'ano' && key !== 'trimestre' && key !== 'Notas Emitidas' ){
                seriesPie.push(valor)
            }
        };

        areaChart.updateOptions({ series: seriesPie });
        
        const seriesBar = Object.keys(dadosProFront).filter(key =>
            key !== 'mes' && key !== 'ano' && key !== 'trimestre'
        ).map(key => {
            return {
                name: key,
                data: [{ x: key, y: dadosProFront[key] }] 
            };
        });

        const barChartData = seriesBar.map(item => item.data[0].y);
        barChart.updateSeries([{ data: barChartData }]);
    } else {
        console.log('Nenhum dado filtrado encontrado.');
    }
}

window.aplicarFiltros = aplicarFiltros;