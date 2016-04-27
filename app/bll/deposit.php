<?php
/* Connect to an ODBC database using driver invocation */
$dsn = 'mysql:host=sql203.byethost17.com;dbname=b17_17893521_trackingdb';
$user = 'b17_17893521';
$pwd = 'Silver3950';

try {
    $dbh = new PDO($dsn, $user, $pwd);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 


	echo 'Connection success!', '<b>';
} catch (Exception $e) {
    echo $e->getMessage();
    die();
}

$empname = $_POST['empName'];
$voucher = $_POST['voucherNum'];
$description = $_POST['Description'];
$amount = $_POST['Amount'];
$depositdate = $_POST['depositDate'];
$bankacct = $_POST['BankAcct'];
/*
echo $empname  , "<br>";
echo $voucher  , "<br>";
echo $description  , "<br>";
echo $amount  , "<br>";
echo $depositdate  , "<br>";
echo $bankacct  , "<br>";
*/

$sql = "INSERT INTO deposit(empname, voucher, description, amount, depdate, account) VALUES(?, ?, ?, ?, ?, ?)";

$query = $dbh->prepare($sql);

$query->execute(array($empname, $voucher, $description, $amount, $depositdate, $bankacct));

/*
header("Location: {$_SERVER['HTTP_REFERER']}");
exit;
*/
echo "Deposit information successfully saved!";

?>