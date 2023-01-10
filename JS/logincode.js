function Email_check(){
	var email = document.getElementById("email").value;
    var e = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;
	if(email == ""){	
		return false;
	}
	if(email != ""){
		if(!(e.test(email))){	
			return false;
		}
		else{
			return true;
		}
	}
}


function Password_check(){
	var psw = document.getElementById("psw").value;
	if(psw == ""){
	    return false;
	}
	else{
		if(psw.length < 8){
		    return false;
		}
        else if(psw.length > 16){
            return false;
        }
        else if(psw.includes(" ")){
            return false;
        }
		else{
			return true;
		}
	}
}


function Check(){
    if(Email_check() && Password_check()){
    	return true;
    }
    else{
		alert("邮箱或密码输入不正确！");
		location.reload();
    	return false;
	}
}