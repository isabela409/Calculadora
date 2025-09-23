const display = document.getElementById("display");

// Atualizar hora e data
function atualizarRelogio() {
  const agora = new Date();
  document.getElementById("hora").textContent = agora.toLocaleTimeString();
  document.getElementById("data").textContent = agora.toLocaleDateString();
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Função para executar comandos
function executar(valor) {
  if (!isNaN(valor) || valor === ".") {
    // número ou ponto
    display.value = (display.value === "0") ? valor : display.value + valor;
  } else {
    switch (valor) {
      case "AC":
        display.value = "0";
        break;
      case "CE":
        display.value = display.value.slice(0, -1) || "0";
        break;
      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Erro";
        }
        break;
      default:
        display.value += valor;
        break;
    }
  }
}

// 🎯 ADICIONAR EVENTOS AOS BOTÕES:
document.querySelectorAll(".btn").forEach(botao => {
  botao.addEventListener("click", () => {
    const valor = botao.getAttribute("data-value");
    executar(valor);
  });
});
