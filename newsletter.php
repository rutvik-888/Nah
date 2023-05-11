<?php

// This is the newsletter form.

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Check if the form was submitted with the email field filled out.
  if (isset($_POST['email'])) {
    // Add the user to the newsletter list.
    $to = 'rutvik0888@gamil.com';
    $subject = 'New newsletter subscriber';
    $message = '
      [email] has subscribed to the newsletter.
    ';
    mail($to, $subject, $message);
    // Redirect the user to the newsletter page.
    header('Location: newsletter.php');
    exit;
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter</title>
</head>
<body>
  <h1>Newsletter</h1>
  <p>Sign up for our newsletter to stay up-to-date on the latest news and information.</p>
  <form action="newsletter.php" method="post">
    <input type="email" name="email" placeholder="Your email">
    <input type="submit" value="Subscribe">
  </form>
</body>
</html>
