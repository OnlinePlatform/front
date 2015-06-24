<!DOCTYPE html>
<html>
<head>
	<title>trial</title>
</head>
<body>
	<?php 
		printf('<pre>The number to be printed is % 3d</pre>',10.02);
		$hello="Hello world";
		echo "单词是：".$hello."<br>";
		echo"单词大写是：".strtoupper($hello)."<br>";
		echo"单词小写是：".strtolower($hello)."<br>";	
		$timestap=time();
		echo "当前时间戳：".$timestap."<br>";	
		echo date("m/d/y g.i:s",$timestap);
	 ?>
</body>
</html>