<!DOCTYPE html>
<html>
<head>
	<title>计算</title>
</head>
<body>
	<div>
		<p>
		<input id="number1" type="number">
		<input id="number2" type="number">
		</p>
		<?php  
			$str="5";
			echo "$str,world";//php输出中有变量用双引号
			echo '<p>get the answer</p>';
			define('HELLO','hello,world');//定义常量
			echo HELLO;
			echo basename(dirname(__FILE__));
			echo "使用for循环";
			for ($i=0; $i <5 ; $i++) { 
				echo "The number is $i <br>";
			}
			$pwd=md5("hello");
			echo "密码使用md5加密后为：$pwd";
		?>
		<?php 
			class Cat{
				function __constructor(){

				}
				function meow(){
					echo "hello,world!";
				}
				function eat(){
					echo "fish";
				}
			}
			$dog=new Cat();
			echo "获取一个空对象实例的类型".gettype($dog);
			class Cow extends Cat{
				function __constructor(){

				}
				function sleep(){
					echo 'zzzzzzzzzzz';
				}
			}
			$cows=new Cow();
			$cows->eat();
			$cows->sleep();
		 ?>
	</div>
	<p id="result"></p>
	<?php 
		include "map.html"
	 ?>
	 <script type="text/javascript">
	// function result(){
	// 	var number1=document.getElementById('number1').value;
	// 	var number2=document.getElementById('number2').value;
	// 	var dataToSend="?number1"+number1+"&number2="+number2;
	// 	var req=new XMLHttpRequest();

	// }
	// </script>
	<?php 
// 	$number1=$get['number1'];
// 	$number2=$get['number2'];
// 	$num=$number1+$number2;
// 	echo($num);
//  ?>
</body>
</html>