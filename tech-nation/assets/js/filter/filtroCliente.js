$(document).ready(function() {
    const dadosOriginais = [
        {
            "nomePagador": "Cliente A",
            "numeroNota": "001",
            "dataEmissao": "01/2024",
            "dataCobranca": "02/2024",
            "dataPagamento": "02/2024",
            "valor": "$100.00",
            "status": "Emitida"
        },
        {
            "nomePagador": "Cliente B",
            "numeroNota": "002",
            "dataEmissao": "01/2024",
            "dataCobranca": "02/2024",
            "dataPagamento": "01/2024",
            "valor": "$150.00",
            "status": "Cobrança realizada"
        },
        {
            "nomePagador": "Cliente C",
            "numeroNota": "003",
            "dataEmissao": "02/2024",
            "dataCobranca": "02/2024",
            "dataPagamento": "03/2024",
            "valor": "$200.00",
            "status": "Pagamento em atraso"
        },
        {
            "nomePagador": "Cliente D",
            "numeroNota": "004",
            "dataEmissao": "02/2024",
            "dataCobranca": "03/2024",
            "dataPagamento": "03/2024",
            "valor": "$120.00",
            "status": "Pagamento realizado"
        },
        {
            "nomePagador": "Cliente E",
            "numeroNota": "005",
            "dataEmissao": "03/2024",
            "dataCobranca": "04/2024",
            "dataPagamento": "04/2024",
            "valor": "$180.00",
            "status": "Pagamento realizado"
        },
        {
            "nomePagador": "Cliente F",
            "numeroNota": "006",
            "dataEmissao": "03/2024",
            "dataCobranca": "04/2024",
            "dataPagamento": "05/2024",
            "valor": "$220.00",
            "status": "Pagamento em atraso"
        },
        {
            "nomePagador": "Cliente G",
            "numeroNota": "007",
            "dataEmissao": "04/2024",
            "dataCobranca": "05/2024",
            "dataPagamento": "05/2024",
            "valor": "$90.00",
            "status": "Pagamento realizado"
        },
        {
            "nomePagador": "Cliente H",
            "numeroNota": "008",
            "dataEmissao": "04/2024",
            "dataCobranca": "05/2024",
            "dataPagamento": "06/2024",
            "valor": "$200.00",
            "status": "Pagamento em atraso"
        }
    ];
    
    


    let dadosFiltrados = [...dadosOriginais]; 

    function renderizarTabela() {
        const tbody = $("#tabela-notas");
        tbody.empty(); 
        dadosFiltrados.forEach(nota => {
            tbody.append(`
                <tr>
                    <td>${nota.nomePagador}</td>
                    <td>${nota.numeroNota}</td>
                    <td>${nota.dataEmissao}</td>
                    <td>${nota.dataCobranca}</td>
                    <td>${nota.dataPagamento}</td>
                    <td>${nota.valor}</td>
                    <td>${nota.status}</td>
                </tr>
            `);
        });
    }

    renderizarTabela();

    $("#filtro-mes-emissao").change(function() {
        const filtroMesEmissao = $("#filtro-mes-emissao").val().split("-").reverse().join("/");
    
        dadosFiltrados = dadosOriginais.filter(nota => {
            return filtroMesEmissao == "" || nota.dataEmissao == filtroMesEmissao;
        });
    
        renderizarTabela();
    });
    
    $("#filtro-mes-cobranca").change(function() {
        const filtroMesCobranca = $("#filtro-mes-cobranca").val().split("-").reverse().join("/");
    
        dadosFiltrados = dadosOriginais.filter(nota => {
            return filtroMesCobranca == "" || nota.dataCobranca == filtroMesCobranca;
        });
    
        renderizarTabela();
    });
    
    $("#filtro-mes-pagamento").change(function() {
        const filtroMesPagamento = $("#filtro-mes-pagamento").val().split("-").reverse().join("/");
    
        dadosFiltrados = dadosOriginais.filter(nota => {
            return filtroMesPagamento == "" || nota.dataPagamento == filtroMesPagamento;
        });
    
        renderizarTabela();
    });
    
    $("#filtro-status").change(function() {
        const filtroStatus = $("#filtro-status").val();
    
        dadosFiltrados = dadosOriginais.filter(nota => {
            return filtroStatus == "" || nota.status == filtroStatus;
        });
    
        renderizarTabela();
    });
    
    
    
});
