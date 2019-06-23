<?php

//Check if contact form was submitted
if (isset($_POST['submit'])) {

    $name = $_POST['user_name'];
    $mailFrom = $_POST['user_email'];
    $contactNumber = $_POST['user_phone_number'];
    $message = $_POST['message'];

    $mailTo = "liamrdawson@gmail.com";
    $subject = "Liam R. Dawson Photography - new message from".$name;
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail( $mailTo, $subject, $txt, $headers );
    header("Location: about.html?mailsend");
}

