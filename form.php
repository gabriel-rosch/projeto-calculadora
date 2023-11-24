<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $nome = $_POST["nome"];
    $mensagem = $_POST["mensagem"];

    $para = "cristianobraier@gmail.com";
    $assunto = "Novo formulário de contato";
    $corpo = "Email: $email\nNome: $nome\nMensagem: $mensagem";

    // Configuração do servidor SMTP (Gmail neste exemplo)
    $servidor_smtp = "smtp.gmail.com";
    $porta_smtp = 587;
    $usuario_smtp = "contato.oss.center@gmail.com";
    $senha_smtp = "0n&$t0p$h0p2023";

    // Configurar o envio de e-mail com autenticação
    ini_set("SMTP", $servidor_smtp);
    ini_set("smtp_port", $porta_smtp);
    ini_set("sendmail_from", $usuario_smtp);

    // Enviar e-mail
    mail($para, $assunto, $corpo);

    // Redirecionar o usuário para uma página de confirmação
    header("Location: confirmacao.html");
}
?>
