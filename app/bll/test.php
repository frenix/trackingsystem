 <?php
 	$monthname = $_POST['monthOption'];
 	$sql="SELECT * FROM departments WHERE departmentName = '".$monthname."';";
 	echo $sql;
 	 //$sql = 'SELECT * FROM deposit WHERE MONTH(depdate) = $monthname';
 	//echo $sql;
 ?>