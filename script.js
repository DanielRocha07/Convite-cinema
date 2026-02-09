document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("confirmar");
  const mensagem = document.getElementById("mensagem");
  const som = document.getElementById("somConfirmacao");

  btn.addEventListener("click", function () {
    btn.disabled = true;
    btn.textContent = "✅ Presença Confirmada!";
    btn.style.backgroundColor = "#4CAF50";

    mensagem.textContent = "Obrigado! Nos vemos lá!";
    som.play();

    emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
      mensagem: "Alguém confirmou presença no convite do cinema!"
    })
    .then(function(response) {
       console.log("Email enviado com sucesso!", response.status, response.text);
    }, function(error) {
       console.log("Erro ao enviar email:", error);
    });
  });
});
