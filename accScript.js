
/*Pre Defined Emails in database already */
var emailArray =["okorof@myumanitoba.ca","jattoe3@myumanitoba.ca","mbahs@myumanitoba.ca","lawalh@myumanitoba.ca"];
var names= ["Francis","Jatto","Somto","Hafiz"];
var temp;
var thesamePass;
var validMail;
var psswd;
var accAvail = false;
/*Storage-----------------------------*/

function getAccInfo()
{
	var fullName   = document.getElementById("usrName").value;
	var usrEmail   = document.getElementById("email1").value;
	var usrPhoneNo = document.getElementById("tel").value;
	var usrPass;
	if(thesamePass)
	{
		usrPass    = document.getElementById("pass2").value;
		storeAccInfo(fullName,usrEmail,usrPhoneNo,usrPass);
		accAvail = true;
	}
	else{
		usrPass    = undefined;
		document.getElementById("pass2").value = "";
		alert("Password incorrect! Please Re-eneter confirmation password. Ensure CAPS-LOCK is switched off and the SHIFT key is not pressed down.");
		accAvail = false;
	}
}

function storeAccInfo(fN,eM,pN,pW){
	sessionStorage.setItem("fullname",fN);
	sessionStorage.setItem("useremail",eM);
	sessionStorage.setItem("teleno",pN);
	sessionStorage.setItem("userpwd",pW);
}

function createAccount()
{
	getAccInfo();
	if(accAvail)
	{	
		
		sessionStorage.setItem("avail",accAvail);
		window.location.href = "index.html";
	}

}

function getStoredAccount()
{
	if(sessionStorage.getItem("avail")){
		document.getElementById("tab5").innerHTML = "Welcome, "+sessionStorage.getItem("fullname");
		alert(document.getElementsById("tab5").name);
		document.getElementById("tab5").name= "notGuest";
		alert(2);
	}
}

/*Storage End-------------------------*/
function isEqual(str1,str2)
{
	var bool= false;
	if (str1 == str2) {
		bool=true;
	}
}

function tickX(id)
{

	
	if(id){
		document.getElementById("estat").style.display = "inline-block";
		document.getElementById("estat").src = "tick.png";
	}
	else{
		document.getElementById("estat").src = "cross.png";
		document.getElementById("estat").style.display = "inline-block";
	}
	

}

function finalizeForm()
{
	
}

function validateUsr()
{
	var validated = false;
	var in1=document.getElementById("usrName").value;
	var in2= checkEmail();
	var in3=document.getElementById("tel").value;
	var in45 = thesamePass;
	if(in45 && in2 && (in1.length>0) && (in2.length>0) ){

		validated=true;

	}
return validated;
}

function checkPass(b){
	var psw1 = document.getElementById("pass1").value;
	var psw2 = document.getElementById("pass2").value;
	if(psw2.length>0){
		document.getElementById(b).style.display = "inline-block"
		if(psw1==psw2){
			thesamePass = true;
			psswd = psw1;
		}
		else
		{
			thesamePass = false;
		}
		changeStat(b,thesamePass);
	}
	else{
		document.getElementById(b).style.display = "none";
	}
}

function checkEmail(){

	var e_mail = document.getElementById("email1").value;
	var validatedE =false ;
	if (e_mail.length>0){
	
		if(emailArray.length>0)
		{

			for(var i=0 ;!validatedE && i<emailArray.length ; i++)
			{

				if((!e_mail.includes("@")) && (!e_mail.includes(".")))
				{
					tickX(false);
				}
				else {
					if( ( (e_mail.indexOf("@")) < (e_mail.indexOf(".")) ) && !(e_mail == emailArray[i]) &&  (e_mail.includes("@")) )
					{
						tickX(true);
						validatedE = true;
					}
					else if(e_mail == emailArray[i]){
						tickX(false);
						alert(e_mail+" Already Has An Account.");	
					}
					else{
						tickX(false);	
					}
				}
			}
		}

	}
	else{
	
		document.getElementById("estat").style.display = "none";
	}
	return validatedE;
}

function changeStat(a,aa)
{	

	if(typeof (aa) != 'undefined'){

		if(aa){
			document.getElementById(a).src="tick.png";
		}
		else{

			document.getElementById(a).src="cross.png";	

		}
	}
}