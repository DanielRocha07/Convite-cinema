document.getElementById("confirmar").addEventListener("click", function () {
  const btn = this;
  const mensagem = document.getElementById("mensagem");
  const som = document.getElementById("somConfirmacao");

  btn.disabled = true;
  btn.textContent = "✅ Presença Confirmada!";
  btn.style.backgroundColor = "#4CAF50";

  mensagem.textContent = "Obrigado! Nos vemos lá!";
  som.play();

  // 🚀 ENVIA EMAIL
  emailjs.send("service_zb8c1ko", "template_ngkst3p", {
    mensagem: "Uma nova pessoa confirmou presença no evento!"
  })
  .then(function(response) {
     console.log("Email enviado com sucesso!", response.status, response.text);
  }, function(error) {
     console.log("Erro ao enviar email:", error);
  });
});
