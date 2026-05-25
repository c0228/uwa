import React from "react";
import { Card, Highlight, FilledHeader } from 'e-ui-react';

const SMTP_SERVER_DETAILS = `SMTP Server: smtp.gmail.com
SMTP Port: 465
SMTP Username: < GMAIL ADDRESS >
SMTP Password: < GENERATED APP PASSWORD >`;

const SMTP_SENDMAIL_DETAILS = `smtp_server=smtp.gmail.com
smtp_port=465
auth_username=<GMAIL ADDRESS>
auth_password=<GENERATED APP PASSWORD>`;

const TEST_EMAIL_CODE = `<?php 

$to = "recipient@example.com";
$subject = "PHP Mail Test";
$message = "This is a test email sent from a PHP script.";
$headers = "From: webmaster@yourdomain.com";

// Attempt to send
if (mail($to, $subject, $message, $headers)) {
    echo "Test email sent successfully!";
} else {
    // Show last error if sending fails
    $error = error_get_last();
    echo "Email failed to send. Error: " . ($error['message'] ?? 'Unknown error');
}

?>`;

const SendMail = () =>{
 return (<div>
    <FilledHeader backgroundColor="#0d6efd" color="#fff" title={<b>SendMail Setup (For Wamp Server)</b>} />
    <div className="mtop15p">
        <ul>
            <li className="mtop5p">
                Download zip file from Official Website & place it in <code><b>C:/wamp64/bin/sendmail</b></code>
            </li>
            <li className="mtop5p">
                    <div>Get SMTP Settings from Gmail -</div>
                    <ul>
                        <li className="mtop5p">Go to <code><b>Manage your Google Accounts</b></code></li>
                        <li className="mtop5p">Search for <code><b>App Passwords</b></code></li>
                        <li className="mtop5p">Under App password, create <code><b>AppName</b></code> & it 
                        generates <code><b>AppPassword</b></code>. This Password is used as Password Credentials</li>
                    </ul>
                <div className="mtop10p"><b>SMTP Details looks like -</b></div>
                <Highlight content={SMTP_SERVER_DETAILS} lang="php" />
            </li>
            <li className="mtop5p">
                <div>In <code><b>c:/wamp64/bin/sendMail</b></code>, open <b>sendMail.ini</b> and set following things-</div>
                <div className="mtop5p"><Highlight content={SMTP_SENDMAIL_DETAILS} lang="php" /></div>
            </li>
            <li className="mtop5p">Next, let <code><b>C:/wamp64/bin/apache</b></code> know about <code><b>sendMail</b></code>. 
            Go to <code><b>C:/wamp64/bin/apache/bin/php.ini</b></code>. 
            Comment <code><b>smtp</b></code>, <code><b>smtp_port</b></code> & <code><b>sendmail_from</b></code> and 
            set <code><b>sendmail_path="&lt; SEND MAIL PATH &gt;/bin/sendmail.exe -t"</b></code></li>
            <li className="mtop5p">
                <div>Then, restart <code><b>Wamp Server</b></code> and test the Email Code.</div>
                <div className="mtop5p"><Highlight content={TEST_EMAIL_CODE} lang="php" /></div>
            </li>
        </ul>
    </div>
 </div>);
};

export default SendMail;