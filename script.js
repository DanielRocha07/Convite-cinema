document.getElementById("confirmar").addEventListener("click", function () {
  const btn = this;
  const mensagem = document.getElementById("mensagem");
  const som = document.getElementById("somConfirmacao");

  btn.disabled = true;
  btn.textContent = "✅ Presença Confirmada!";
  btn.style.backgroundColor = "#4CAF50";

  mensagem.textContent = "Obrigado! Nos vemos lá!";
  som.play();
});