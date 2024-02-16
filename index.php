<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hospital_praj";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle login
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $_SESSION['email'] = $email;
        header("Location: dashboard.php");
    } else {
        echo "Invalid email or password";
    }
}

// Handle signup
if (isset($_POST['signup'])) {
    $adminID = $_POST['adminID'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    if ($password == $confirmPassword) {
        $sql = "INSERT INTO users (adminID, email, phone, password) VALUES ('$adminID', '$email', '$phone', '$password')";
        
        if ($conn->query($sql) === TRUE) {
            echo "User registered successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Passwords do not match";
    }
}

$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/008d4cfb20.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css">
    <title>Login</title>
</head>
<body>

    <!--Login-->

    <div class="container login">
        
        <header>Login</header>
        <form action="index.php" method="POST">
            <div class="field EM">
                <div class="input-area">
                    <input name='email' type="email" placeholder="Email" class="mail">
                    <i class="icon fa-solid fa-envelope"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email can't be blank</div>
            </div>
            <div class="field PM">
                <div class="input-area">
                    <input type="password" name="password" placeholder="Password" class="password">
                    <i class="icon fa-solid fa-lock"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="pass-link"><a href="#">Forget password?</a></div>
            <input type="submit" value="login"></input>
        </form>
        <div class="Wa">
            <span>Don't have an account? <a href="#">Sign up</a></span>
        </div>

    </div>

        <!--Sign up-->

    <div class="container sign">

        <header>Sign up</header>
        <form action="index.php" method="POST" class="form2">
            <div class="field AI">
                <div class="input-area">
                    <input type="text" name='adminID' placeholder="Admin ID" class="AgencyID">
                    <i class="icon fa-solid fa-user"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Admin ID can't be blank</div>
            </div>
            <div class="field Email">
                <div class="input-area">
                    <input type="text" name='email' placeholder="Email" class="mail" inputmode="email">
                    <i class="icon fa-solid fa-envelope"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email can't be blank</div>
            </div>
            <div class="field PN">
                <div class="input-area">
                    <input type="text" name="phone" placeholder="Phone number" class="Phone" maxlength="10" inputmode="numeric">
                    <i class="icon fa-solid fa-phone"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Phone number can't be blank</div>
            </div>
            <div class="field PM">
                <div class="input-area">
                    <input type="password" name="password" placeholder="Password" class="password">
                    <i class="icon fa-solid fa-lock"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="field CPM">
                <div class="input-area">
                    <input type="password" placeholder="Confirm password" class="cpassword">
                    <i class="icon fa-solid fa-lock"></i>
                    <i class="error error-icon fa-solid fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Confirm Password can't be blank</div>
            </div>
            <input type="submit" value="Sign up"></input>
        </form>
        <div class="WM">
            <span>Already had a account? <a href="#">Login</a></span>
        </div>
        
    </div>
    
    <script src="javascript.js"></script>
    <script src="javascript2.js"></script>

</body>
</html>