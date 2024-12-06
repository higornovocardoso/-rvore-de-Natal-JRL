
// Inicializa o total arrecadado
let totalArrecadado = 0;

// Função para redirecionar ao site e atualizar o total arrecadado
function handleClick(url) {
    // Abre o site do parceiro em uma nova aba
    window.open(url, "_blank");
    
    // Atualiza o total arrecadado
    totalArrecadado += value;
    document.getElementById("total").innerText = `R$ ${totalArrecadado.toFixed(2)}`;
    
    // Exibe uma mensagem de agradecimento
    alert("Obrigado por apoiar nossos parceiros e contribuir com a escola!");
}
