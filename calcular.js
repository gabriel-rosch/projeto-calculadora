

document.addEventListener('DOMContentLoaded', function() {
const faturamentoInput = document.getElementById('final');
const taxaConversaoPagtoInput = document.getElementById('pay');
const valorCaptadoResult = document.getElementById('valor-capturado');
const ticketMedioInput = document.getElementById('avg');
const pedidosCapturadosResult = document.querySelector('.pedidos-capturados .result');
const taxaConversaoVisitasInput = document.getElementById('conversion');
const visitasResult = document.querySelector('.visitas .result');

  document.body.addEventListener('input', function() {
      recalcularValores()
  });

  function recalcularValores() {
    // Obter valores dos inputs
    const faturamento = parseFloat(faturamentoInput.value) || 0;
    const taxaConversaoPagto = (parseFloat(taxaConversaoPagtoInput.value) || 0) / 100;
    const ticketMedio = parseFloat(ticketMedioInput.value) || 0;
    const taxaConversaoVisitas = (parseFloat(taxaConversaoVisitasInput.value) || 0) / 100;

    // Calcular VALOR CAPTADO
    const valorCaptado = faturamento * taxaConversaoPagto;

    // Calcular PEDIDOS CAPTADOS
    const pedidosCaptados = valorCaptado / ticketMedio;

    // Calcular VISITAS
    const visitas = pedidosCaptados / taxaConversaoVisitas;

    // Atualizar os resultados nos elementos correspondentes
    valorCaptadoResult.textContent = valorCaptado.toFixed(2);
    pedidosCapturadosResult.textContent = pedidosCaptados.toFixed(2);
    visitasResult.textContent = visitas.toFixed(2);
  }
});