function createPDF(){
    const estoqueDados = localStorage.getItem("estoqueDados");
    if(estoqueDados){
        let names = [];
        let stock = [];
        let input = 0;
        let output = 0;
        const data = JSON.parse(estoqueDados);
        // data.name.forEach((nome, i) => {
        //     names.push(nome);
        //     stock.push(data.estoque[i]);
        // });

        for(let i = 0; i < data.status.length; i++){
            if(data.status[i] == 'entrou'){
                input += data.amt[i];
            } else {
                output += data.amt[i];
            }
        }
        
        // -----> Terminar a parte do grafico e PDF <-----
        // // Importe a biblioteca jspdf
        // const { jsPDF } = window.jspdf;

        // // Defina os dados do gráfico
        // const dadosTeste = {
        // labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        // datasets: [
        //     {
        //     label: 'Vendas',
        //     data: [10, 20, 15, 30, 25, 35],
        //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
        //     borderColor: 'rgba(255, 99, 132, 1)',
        //     borderWidth: 1
        //     }
        // ]
        // };

        // // Defina as opções do gráfico
        // const options = {
        // plugins: {
        //     legend: {
        //     display: false
        //     }
        // },
        // scales: {
        //     y: {
        //     beginAtZero: true
        //     }
        // }
        // };

        // // Crie um novo documento PDF
        // const doc = new jsPDF();

        // // Crie um novo gráfico com a Chart.js
        // const myChart = new Chart(document.getElementById('myChart'), {
        // type: 'line', // ou outro tipo de gráfico
        // data: dadosTeste,
        // options: options
        // });

        // // Obtenha a imagem do gráfico no formato base64
        // const imgData = myChart.toBase64Image();

        // // Adicione a imagem ao PDF
        // doc.addImage(imgData, 'PNG', 10, 10, 150, 100);

        // // Salve o PDF
        // doc.save('grafico.pdf');

        // // Opcional: Remova o canvas do HTML
        // document.getElementById('myChart').remove();
    }
}