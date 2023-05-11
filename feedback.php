<?php

// This is the feedback form.

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Check if the form was submitted with the name and email fields filled out.
  if (isset($_POST['name']) && isset($_POST['email'])) {
    // Send an email to the administrator with the feedback.
    $to = 'rutvik0888@gamil.com';
    $subject = 'Feedback from [name]';
    $message = '
      [name] sent the following feedback:
    
      [message]
    ';
    mail($to, $subject, $message);
    // Redirect the user to the feedback page.
    header('Location: feedback.php');
    exit;
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback</title>
</head>
<body>
  <h1>Feedback</h1>
  <p>Please leave us some feedback about our website.</p>
  <form action="feedback.php" method="post">
    <input type="text" name="name" placeholder="Your name">
    <input type="email" name="email" placeholder="Your email">
    <textarea name="message" rows="10" cols="50" placeholder="Your message"></textarea>
    <input type="submit" value="Submit">
  </form>
</body>
</html>
