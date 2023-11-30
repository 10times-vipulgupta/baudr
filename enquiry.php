<?php

if (!empty($_POST)) {
    $mailData['type'] = "user_ids";
    $mailData['user_ids'] = 13420258;
    $mailData['subject'] = "evenTELI Access Request by " . $_POST['firstName'] . ' ' . $_POST['lastName'];
    $mailData['from'] = $_POST['busEmail'];
    $mailData['reply_to'] = "mail@10times.com";
    $mailData['from_name'] = "eventeli";
    $mailData['category'] = "user_tranx_board_evenTELIaccessrequest";
    $newsLetter = isset($_POST['firstName']) ? "<br>NewsLetter =>  Yes" : '';
    $mailData['message'] = "Details<br> First Name => " . $_POST['firstName'] . "<br>Last Name => " . $_POST['lastName'] . "<br>Business Email => " . $_POST['busEmail'] . "<br>Company => " . $_POST['companyName'] . "<br>Job Title => " . $_POST['jobTitle'] . "<br>Phone Number => " . $_POST['phoneCode'] . $newsLetter;
    foreach ($_POST['question'] as $question) {
        $mailData['message'] .= '<br>' . $question['question'] . '=> ' . $question['answer'];
    }
    $mailData['message'] .= '<br><br>';
    $options = array('http' =>
        array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($mailData)
        )
    );
    $context = stream_context_create($options);
    $resutl = file_get_contents('http://stg-serve.10times.com/index.php/user/send_mail', false, $context);
    echo $resutl;
    exit;
} else {
    echo json_decode(['success' => false]);
    exit;
}





