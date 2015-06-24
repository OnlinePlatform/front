<!DOCTYPE html>
<html>
<head>
	<title>use database</title>
</head>
<body>
<table border="1px solid black">
	<th>name</th>
	<th>number</th>
	<th>sex</th>
	<th>major</th>
<?php 
	session_start();
	$_SESSION['hi']="hello hello";
	echo $_SESSION['hi']."hello";
 ?>
<?php 
include ('db_login.php');

$query='SELECT * FROM basic';
$result=mysql_query($query);
if(!$result){
	die('could not query the database:<br/>'.mysql_error());
}
while ($result_row=mysql_fetch_row(($result))) {
	echo "<tr>";
	echo "<td>$result_row[1]</td>";
	echo "<td>$result_row[2]</td>";
	echo "<td>$result_row[3]</td>";
	echo "<td>$result_row[4]</td>";
	echo "</tr>";
}
mysql_close($connection);
 ?>
 <form action="<?php echo(htmlentities($_SERVER['PHP_SELF']));?>" method="GET">
		用户：
		<input type="text" name="name"><br>
		密码：
		<input type="password" name="password"><br>
		<!-- 单选框 -->
		性别：
		<input type="radio" name="sex" value="male">男
		<input type="radio" name="sex" value="femal">女
		<!-- 复选框 -->
		交通工具：
		<input type="checkbox" value="foot" name="tool[]">步行<br>
		<input type="checkbox" value="bike" name="tool[]">自行车<br>
		<input type="checkbox" value="bus" name="tool[]">公交<br>
		<!-- 下拉框 -->
		最爱的颜色：
		<select name="color">
			<option value="red">红</option>
			<option value="yellow">黄</option>
			<option value="blue">蓝</option>
			<option value="green">绿</option>
			<option value="cyan">青</option>
			<option value="blue">蓝</option>
			<option value="purple">紫</option>
		</select>
		<input type="submit" value="submit" >
	</form>
	<?php 
		$name=htmlentities($_GET['name']);
		$password=md5($_GET['password']);
		$sex=$_GET['sex'];
		$tool=$_GET['tool'];
		$color=$_GET['color'];
		echo $name*2;
		echo "你输入的是：<br>";
		echo $name.$password.$color;
		setcookie("name",$name);
		if (!isset($_COOKIE['name'])) {
			echo "Oops";# code...
		}
		else {
			echo "the stored username is".$_COOKIE['name'];# code...
		}
		if ($tool) {
			foreach ($tool as $key => $value) {
				echo "交通工具是：".$value;
			}
		}
		echo "文档根目录".$_SERVER['DOCUMENT_ROOT'];
	 ?>
</table>
</body>
</html>