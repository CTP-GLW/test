function Account_check(){
    var acnt = document.getElementById("account").value;
    if(acnt == ""){	     	    			     	    	
	    document.getElementById("tip1").innerHTML = "<span style='font-size:14px; color:red;'><li>用户名不能为空</li></span>";
	    return false;
	}  
	else if(acnt != ""){
		if(acnt.length > 10){
			document.getElementById("tip1").innerHTML = "<span style='font-size:14px; color:red;'><li>用户名不得超过10位</li></span>";
			return false;
        }
        else if(acnt.includes(" ")){
            document.getElementById("tip1").innerHTML = "<span style='font-size:14px; color:red;'><li>用户名中不得出现空格</li></span>";
            return false;
        }
		else{
			document.getElementById("tip1").innerHTML = "<span style='font-size:14px; color:green;'><li>该用户名可以使用</li></span>";
			return true;
		}
	}
}


function Email_check(){
	var email = document.getElementById("email").value;
    var e = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;
	if(email == ""){
		document.getElementById("tip2").innerHTML = "<span style='font-size:14px; color:red;'><li>邮箱不能为空</li></span>";	
		return false;
	}
	if(email != ""){
		if(!(e.test(email))){
			document.getElementById("tip2").innerHTML = "<span style='font-size:14px; color:red;'><li>邮箱格式不正确</li></span>";	
			return false;
		}
		else{
			document.getElementById("tip2").innerHTML = "<span style='font-size:14px; color:green;'><li>邮箱格式正确</li></span>";
			return true;
		}
	}
}


function Password_check(){
	var psw = document.getElementById("psw").value;
	if(psw == ""){
	    document.getElementById("tip3").innerHTML = "<span style='font-size:14px; color:red;'><li>密码不能为空</li></span>";
	    return false;
	}
	else{
		if(psw.length < 8){
		    document.getElementById("tip3").innerHTML = "<span style='font-size:14px; color:red;'><li>密码不得少于8位</li></span>";
		    return false;
		}
        else if(psw.length > 16){
            document.getElementById("tip3").innerHTML = "<span style='font-size:14px; color:red;'><li>密码不得超过16位</li></span>";
            return false;
        }
        else if(psw.includes(" ")){
            document.getElementById("tip3").innerHTML = "<span style='font-size:14px; color:red;'><li>密码中不得出现空格</li></span>";
            return false;
        }
		else{
			document.getElementById("tip3").innerHTML = "<span style='font-size:14px; color:green;'><li>密码设置成功</li></span>";
			return true;
		}
	}
}


function Password_recheck(){
	var psw = document.getElementById("psw").value;  
	var p = document.getElementById("repsw").value;
	if(!Password_check()){
		document.getElementById("tip4").innerHTML = "<span style='font-size:14px; color:red;'><li>请先输入合法的密码</li></span>";
		return false;
	}
	else if(p != psw){
		document.getElementById("tip4").innerHTML = "<span style='font-size:14px; color:red;'><li>确认密码与密码不同</li></span>";
		return false;
	}
	else{
		document.getElementById("tip4").innerHTML = "<span style='font-size:14px; color:green;'><li>确认密码输入正确</li></span>";
		return true;
	}
}


function Phone_check(){
    var phone = document.getElementById("phone").value;
	var reg = /^\d{11}$/;
	if(phone == ""){
		document.getElementById("tip5").innerHTML = "";
		return true;
	}
	else{
	    if(!(reg.test(phone))){		     	   				  								  
			document.getElementById("tip5").innerHTML = "<ul><span style='font-size:14px; color:red;'><li>联系电话格式不正确</li></span></ul>";
			return false;
	    }
	    else {
			document.getElementById("tip5").innerHTML = "<ul><span style='font-size:14px; color:green;'><li>联系电话格式正确</li></span></ul>";
			return true;
		}
	}
}


function Clause_check(){
	var cls = document.getElementsByName("clause");
	if(cls[0].checked == true){
		return true;
	}
	else{
		return false;
	}
}


function Check(){
	var flag = confirm("确认提交注册信息吗？");
	if(flag == true){
    	if(Account_check() && Email_check() && Password_check() && Password_recheck() && Phone_check() && Clause_check()){
        	return true;
    	}
    	else{
			if(!Account_check()){
				alert("请正确输入用户名！");
			}
			if(!Email_check()){
				alert("请正确输入邮箱！");
			}
			if(!Password_check()){
				alert("请正确输入密码！");
			}
			if(!Password_recheck()){
				alert("请检查您的密码输入是否一致！");
			}
			if(!Phone_check()){
				alert("您输入的联系电话格式不正确！");
			}
			if(!Clause_check()){
				alert("请阅读并同意条款以继续！");
			}
        	return false;
    	}
	}
	else{
		return false;
	}
}