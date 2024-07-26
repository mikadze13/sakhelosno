<?php

$host = 'localhost';
$username = 'losnoinfogec70_root';
$password = 'sakhelosno__db';
$db = 'losnoinfogec70_db';

$conn = new mysqli($host, $username, $password, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $new_count = intval($_POST['count']);
    $sql = "UPDATE counter SET count = ? WHERE id = 1";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $new_count);

    if ($stmt->execute()) {
        echo "Count updated successfully.";
    } else {
        echo "Error updating count: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>
<!DOCTYPE html>
<html>

<head>
    <title>Update Counter</title>
</head>

<body>
    <h2>Update Counter</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="count">Enter new count:</label>
        <input type="number" id="count" name="count" required>
        <input type="submit" value="Update">
    </form>
</body>

</html>