<?php
  $name = $_POST['name'];
  $email = $_POST['email'];

  $email_from = 'amalthea@iitgn.ac.in';
  $subject = 'You registered for Webinar | Amalthea \'20';
  $message = "Hello ".$name.",<br><br> Greetings from Amalthea '20<br><br>Thanks for registering for Webinar. We will send you the joining link soon.<br><br>Regards<br>Webinars Team Amalthea";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: noreply @ amalthea.iitgn.ac.in';
  $to = $email;
  mail($to,$subject,$message,$headers);
  header("Location: webinar_form.html");
?>
