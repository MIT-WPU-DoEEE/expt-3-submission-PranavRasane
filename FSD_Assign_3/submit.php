<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = ["status" => "error", "message" => "Invalid data.", "errors" => []];

    // Sanitize input data
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
    $phone = filter_input(INPUT_POST, "phone", FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $zip = filter_input(INPUT_POST, "zip", FILTER_SANITIZE_STRING);

    // Validation
    if (empty($name) || !preg_match("/^[A-Za-z ]{3,}$/", $name)) {
        $response["errors"]["name"] = "Invalid name. Please enter at least 3 letters.";
    }
    if (empty($phone) || !preg_match("/^\d{10}$/", $phone)) {
        $response["errors"]["phone"] = "Invalid phone number. It must be 10 digits.";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response["errors"]["email"] = "Invalid email address.";
    }
    if (empty($zip) || !preg_match("/^\d{5,6}$/", $zip)) {
        $response["errors"]["zip"] = "Invalid zip code. It must be 5 or 6 digits.";
    }

    // Success response if no errors
    if (empty($response["errors"])) {
        $response = ["status" => "success", "message" => "Form submitted successfully!"];
    }

    // Return JSON response
    header("Content-Type: application/json");
    echo json_encode($response);
    exit();
}
?>
