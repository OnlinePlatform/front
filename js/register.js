$(function(){
	$(".btn").click(function(){
				var agreenMent=$("#agreement").attr("data");
				
				//alert(agreenMent);0
				var userName= $("#username").val();
				var userPass= $("#password1").val();
				var userPass2=$("#password2").val();
				var userEmail=$("#mail").val();
				var vercode =$("#varcode").val();
				
				userPass=$.trim(userPass);
				userPass2=$.trim(userPass2);
				
				$(".input_div1 span,.input_div2 span,.input_div3 span,.input_div4 span,.input_div6 span,.input_div5 span").html("");
				// $(".btn").val('注册中...').attr('disabled','disabled');
				
				if(!isRegisterUserName(userName)){
					$(".input_div1 span").html('<font color=red>账户名格式不正确!</font>');
					$("#username").focus();
					$(".btn").val('注册').removeAttr('disabled');
					return false;
				}else if(!isEmail(userEmail)){
					$(".input_div2 span").html('<font color=red>邮箱格式不正确!</font>');
					$("#mail").focus();
					$(".btn").val('注册').removeAttr('disabled');
					return false;
				}else if(userPass.length <8){
					$(".input_div3 span").html('<font color=red>密码格式不正确!</font>');
					$("#password1").focus();
					$(".btn").val('注册').removeAttr('disabled');
					return false;
				}else if(userPass != userPass2){
					$(".input_div4 span").html('<font color=red>两次输入的密码不一致!</font>');
					$("#password2").focus();
					$(".btn").val('注册').removeAttr('disabled');
					return false;
				}  else if(agreenMent != '1'){
					//$(".agreenment-tips").html('请先同意用户条款!').fadeIn();
					$(".input_div6 span").html('<font color=red>请先同意用户条款!</font>');
					$(".btn").val('注册').removeAttr('disabled');
					return false;
				}else{
					$("#registerForm").ajaxSubmit(function(e){
						var obj=json_parse(e);
						var code=obj.code;
						var info = '<font color=red>'+obj.info+"</font>";
						if(code=='-1' || code=='-5'){
							$(".input_div1 span").html(info);
							$("#username").focus();
						}else if(code =='-2' || code == '-4'){
							$(".input_div2 span").html(info);
							$("#password1").focus();
						}else if(code =='-3' || code == '-7'){
							$(".input_div2 span").html(info);
							$("#mail").focus();
						}else if(code == '-8'){
							$(".input_div6 span").html(info);							
							$("#varcode").focus();
						}else if(code == '-99'){
							$(".input_div3 span").html(info);							
							$("#mail").focus();
						}else if(code == '1'){
							//alert('恭喜您，注册成功!');
							//window.location.href='register/success';
							window.location.href=obj.acturl;
						}
						//flushCode();
						$(".change").click();
						$(".btn").val('注册').removeAttr('disabled');
					})
				}
				alert('恭喜您，注册成功');
				window.location.href='index.html';
		})
	
	$(".change").click(function(){
		$("#imgcode").attr('src','vercode');
	})
	
	$('.check2').click(function(){
		var rel = $('#agreement').attr("data");
		//alert(rel);
		if(rel =='1'){
			$('#agreement').attr("data","0");
		}else{
			$('#agreement').attr("data","1");
		}
		$('.check2').toggleClass("check1");
	});
	
});

function isRegisterUserName(s){  
	var patrn=/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,19}$/;  
	if (!patrn.exec(s)) return false
	return true
}

function isEmail(email){
	   var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	   if(!myreg.test(email)) return false;
		return true; 
 }