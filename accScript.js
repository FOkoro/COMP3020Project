
/*Pre Defined Emails in database already */
var emailArray =["okorof@myumanitoba.ca","jattoe3@myumanitoba.ca","mbahs@myumanitoba.ca","lawalh@myumanitoba.ca"];
var names= ["Francis","Jatto","Somto","Hafiz"];
var temp;
var thesamePass;
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
		window.location.href = "index.html";
	}

}

function getStoredAccount()
{
	if(accAvail){
		document.getElementById("tab5").innerHTML = "Welcome, "+localStorage.getItem("fullname");

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

	var user1 = document.getElementById("email1").value;
	var found= false;

	for (var i = emailArray.length - 1; i >= 0 && !found; i--)
	{
		if(user1.length>0)
		{
			document.getElementById(id).style.display = "inline-block";
			
			if(user1 === emailArray[i])
			{

				document.getElementById(id).style.display = "none";
				document.getElementById(id).src = "cross.png";
				document.getElementById(id).style.display = "inline-block";
				found= true;
			}
			else
			{
				document.getElementById(id).src = "tick.png";
			}
		}
		else
		{
			document.getElementById(id).style.display = "none";
			document.getElementById("pass2").placeholder = "Confirm Password";
		}
	}

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

function checkEmail(ca){
	var e_mail = document.getElementById("email1").value;

	if (e_mail.length>0){
		document.getElementById(ca).style.display = "inline-block";
		/*var emailArray = readTextFile("usersEmail.txt");*/
		if(emailArray.length>0)
		{

			for(var i=0 ; i<emailArray.length ; i++)
			{

				if(e_mail == emailArray[i])
				{
					changeStat(ca,false);
					alert(e_mail);
				}
				else{
					changeStat(ca,true);
				}
			}
		}

	}
	else{

		document.getElementById(ca).style.display = "none";
	}

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