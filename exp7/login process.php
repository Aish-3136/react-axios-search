<?php
session_start();
include "db.php";

$email = trim($_POST['email']);
$password = $_POST['password'];

// Prepared statement
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        $_SESSION['username'] = $row['username'];
        header("Location: dashboard.php");
        exit();
    } else {
        echo "Invalid Password! <a href='login.php'>Try Again</a>";
    }
} else {
    echo "User Not Found! <a href='register.php'>Register Here</a>";
}

$stmt->close();
$conn->close();
?>

