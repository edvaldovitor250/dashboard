const barChartOptions = {
    series: [
        {
            data: [31, 11, 10, 50, 234],
        },
    ],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'], 
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: ['Notas Emitidas', 'Notas sem Cobrança',  'Notas Vencidas', 'Notas a Vencer', 'Notas Pagas'], 
    },
    yaxis: {
        title: {
            text: 'Count',
        },
    },
    tooltip: {
        theme: 'black', 
        background: 'white' 
    },
};

const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
);
barChart.render();
