<?php
$to = "melkidwork@gmail.com";
$tema = "Отправка данных";
$message = "Ваше имя: ".$_POST['name']."<br>";
$message .= "Вопрос: ".$_POST['que']."<br>";
$message .= "Номер телефона: ".$_POST['tel']."<br>";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
?>