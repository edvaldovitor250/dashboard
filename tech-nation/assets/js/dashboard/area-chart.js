const areaChartOptions = {
  series: [44, 55, 13, 43],
  chart: {
    width: 600,
    type: 'pie',
  },
  labels: ['Notas sem Cobrança', 'Notas Vencidas', 'Notas a Vencer', 'Notas Pagas'],
  legend: {
    color: 'white',
  },
  colors: ['#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      },
      tooltip: {
        theme: 'white',
      },
      dataLabels: {
        enabled: false
      }
    }
  }]
};

export const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);

areaChart.render();
