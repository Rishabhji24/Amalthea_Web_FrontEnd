<?php

    if(isset($_GET['name'])&&isset($_GET['institute'])&&isset($_GET['professional_status'])&&isset($_GET['email'])&&!empty($_GET['email'])&&!empty($_GET['name'])){
        $name = htmlentities($_GET['name']);
        $email = htmlentities($_GET['email']);
        $institute = htmlentities($_GET['institute']);
        $professional_status = htmlentities($_GET['professional_status']);
        // if(empty($phone)){
        //     $toDisplay = "";
        // } else {
        //     $toDisplay = "<br>Phone : <b>".$phone."</b>";
        // }
        $to_email = $email;
        $subject = 'You registered for Webinar | Amalthea \'20';
        $message = "Hello ".$name.",<br><br> Greetings from Amalthea '20<br><br>Thanks for registering for the webinar. We will send you the joining link soon. <br><br>Regards<br>Webinars Team Amalthea";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: noreply @ amalthea.iitgn.ac.in';
        if(mail($to_email,$subject,$message,$headers)) {
            echo "done";
        }
    } else {
        header("Location:webinar_form.html");
    }
?>
