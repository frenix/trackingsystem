<?php
/* Connect to an ODBC database using driver invocation */
$dsn = 'mysql:host=sql203.byethost17.com;dbname=b17_17893521_trackingdb';
$user = 'b17_17893521';
$pwd = 'Silver3950';

try {
    $dbh = new PDO($dsn, $user, $pwd);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (Exception $e) {
    echo $e->getMessage();
    die();
}

$empid = $_POST['empNo'];
$fname = $_POST['fName'];
$mname = $_POST['mInitial'];
$lname = $_POST['lName'];
$username = $_POST['userName'];
$password = $_POST['passPhrase'];
/*
echo $empid  , "<br>";
echo $fname  , "<br>";
echo $mname  , "<br>";
echo $lname  , "<br>";
echo $username  , "<br>";
echo $password  , "<br>";
*/
$sql = "INSERT INTO employee(empid, fname, mname, lname, username, password) VALUES(?, ?, ?, ?, ?, ?)";

$query = $dbh->prepare($sql);

$query->execute(array($empid, $fname, $mname, $lname, $username, $password));
echo "Employee successfully saved!";

?>