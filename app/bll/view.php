<?php
/* Connect to an ODBC database using driver invocation */
$dsn = 'mysql:host=sql203.byethost17.com;dbname=b17_17893521_trackingdb';
$user = 'b17_17893521';
$password = 'Silver3950';

try {
    $dbh = new PDO($dsn, $user, $password);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (Exception $e) {
    //echo $e->getMessage();
    die();
}

class Deposit {
	public 	$id, $empname, $voucher, $description, $amount, $depdate, $account, $trow;

	public function __construct() {
		$this->trow = "<tr><td>{$this->depdate}</td><td>{$this->empname}</td><td>{$this->voucher}</td><td>{$this->description}</td><td>{$this->amount}</td><td>{$this->account}</td></tr>";
	}
}


$monthname = $_POST['monthOption'];

                          if ($monthname == 0) {
                            $sql = 'SELECT * FROM deposit';
                          } else {
                            $sql = "SELECT * FROM deposit WHERE MONTH(depdate) =".$monthname;
                          }

//echo $sql, '<br>';
$query = $dbh->query($sql);

$query->setFetchMode(PDO::FETCH_CLASS, 'Deposit');

while($r = $query->fetch()) {
	echo  $r->trow;
}


/*
$r = $query->fetchAll();
$output = str_replace("'", "\'", json_encode($r->trow));
echo $output;
*/
?>