
// Get the modal
function lunchModal(id)
{
	document.getElementById(id).style.display="block";
}
function closeModal(id)
{
	document.getElementById(id).style.display="none"
}

var globalFoodModal;

function setFoodModal(id,imgName,price,discription,qtyId){
	//this should help create all modals
}

var modal= document.getElementById("myModal");
var modal1= document.getElementById("myModal1");
var modal2= document.getElementById("myModal2");
var modal3= document.getElementById("myModal3");
var modalPO= document.getElementById("myModalPO");
var modalL= document.getElementById("myModalL");
var modalC= document.getElementById("myModalL");
var modalPOMain= document.getElementById("myModalPOMain");

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
	else if (event.target == modal1) {
		modal1.style.display = "none";
	}
	else if (event.target == modal2) {
		modal2.style.display = "none";
	}
	else if (event.target == modal3) {
		modal3.style.display = "none";
	}
	else if (event.target == modalPO) {
		modalPO.style.display = "none";
	}
	else if (event.target == modalL) {
		modalL.style.display = "none";
	}
	else if (event.target == modalC) {
		modalC.style.display = "none";
	}
	else if (event.target == myModalPOMain) {
		modalPOMain.style.display = "none";
	}
}


//code for button increament

function numUp(id,idM){

	document.getElementById(id).stepUp(1);
	document.getElementById(idM).stepUp(1);
}

function numDown(id,idM){
	var temp= document.getElementById(id).value;
	if ( temp > 0) {
		document.getElementById(id).stepDown(1);
		document.getElementById(idM).stepDown(1);
	}
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("btnTop").style.display = "block";
	} else {
		document.getElementById("btnTop").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

var noPO;
var somtoPO;
var francisPO;
var enesiPO;
var hafizPO;
var usersPass;
var activeUsr;
var activePos=-1;

var Cart;
var viewCart;
var usersName;
var usersEmail;

setCart();



var food = {
	itemName:"",
	itemPrice:0,
	itemQty:0
};

function food(itemName, itemPrice, itemQty)
{
	this.itemName = itemName;
	this.itemPrice= parseInt(itemPrice);
	this.itemQty = parseInt(itemQty);
	var totalPrice = 0;
	
	this.getTotalPrice = function(){

		return this.itemPice ;
	};
	this.plusQty = function(qty){

		this.itemQty = parseInt(this.itemQty) + parseInt(qty);		
		return this.itemQty;
	};

	this.minusQty = function(qty){

		this.itemQty = parseInt(this.itemQty) - parseInt(qty);		
		return this.itemQty;
	};
	
	this.updateQty = function (value){
		this.itemQty = value;
	};
	this.getName = function (){
		return this.itemName;
	};
	
	this.resetQty = function ()
	{
		this.itemQty = 0;
	};
	
}

function resetQty()
{
	cart[0].resetQty;
	cart[1].resetQty;
	cart[2].resetQty;
	cart[3].resetQty;
}


//Function for adding items to a cart
function setCart()
{
	
	cart = new Array();
	viewCart = new Array();
	cart[0] = new food("Honey Mustard Grilled Chicken",15,0);
	cart[1] = new food("Jollof Rice",10,0);
	cart[2] = new food("Steamed Lobster Tail",15,0);
	cart[3] = new food("Fried Rice",10,0);	

	somtoPO = new Array();
	somtoPO[0] = new food("Honey Mustard Grilled Chicken",15,2);
	somtoPO[1] = new food("Jollof Rice",10,3);
	somtoPO[2] = new food("Steamed Lobster Tail",15,0);
	somtoPO[3] = new food("Fried Rice",10,0);	

	francisPO = new Array();
	francisPO[0] = new food("Honey Mustard Grilled Chicken",15,2);
	francisPO[1] = new food("Jollof Rice",10,3);
	francisPO[2] = new food("Steamed Lobster Tail",15,0);
	francisPO[3] = new food("Fried Rice",10,3);	

	enesiPO = new Array();
	enesiPO[0] = new food("Honey Mustard Grilled Chicken",15,1);
	enesiPO[1] = new food("Jollof Rice",10,1);
	enesiPO[2] = new food("Steamed Lobster Tail",15,4);
	enesiPO[3] = new food("Fried Rice",10,1);	

	hafizPO = new Array();
	hafizPO[0] = new food("Honey Mustard Grilled Chicken",15,3);
	hafizPO[1] = new food("Jollof Rice",10,8);
	hafizPO[2] = new food("Steamed Lobster Tail",15,4);
	hafizPO[3] = new food("Fried Rice",10,6);

	noPO = new Array();
	noPO[0] = new food("Honey Mustard Grilled Chicken",15,0);
	noPO[1] = new food("Jollof Rice",10,0);
	noPO[2] = new food("Steamed Lobster Tail",15,0);
	noPO[3] = new food("Fried Rice",10,0);
}



function loadUser()
{
	usersName = ["Francis","Somto","Enesi","Hafiz"];

	usersEmail =["okorof@myumanitoba.ca", "mbahs@myumanitoba.ca", "jattoe3@myumanitoba.ca", "lawalh@myumanitoba.ca"];

	usersPass =["cow","dog11","spaceRabbit","protein"];
}

function findFood(itemName)
{
	var i = 0;
	var notFound = true;
	
	var temp = 0;
	while((i<cart.length) && notFound)
	{
		if((cart[i].getName()) === itemName)
		{
			notFound = false;
			temp = i;
		}
		i++;
	}
	return temp;
}

function reset(id)
{
	document.getElementById(id).value=0;
}

var totalInCart=0;

function addItem(itemName, amount)
{
	var temp = findFood(itemName);
	var quantity = cart[temp].plusQty(amount);
	return quantity;
}

function changeQty(itemName, amount)
{
	var temp = findFood(itemName);
	cart[temp].updateQty(amount);
}

function cartNum(itemName,amount){
	var myVar= addItem(itemName,amount);
	//var temp= totalCartQty();
	totalInCart+= amount;

	document.getElementById("cont-Amount").innerHTML= totalInCart;

	return myVar;

}


function cartFunc(id,idM,itemName,modalID)
{
	var myValue=parseInt(document.getElementById(id).value);
	cartNum(itemName,myValue);
	//alert(cart[0].itemQty);


	reset(id);
	reset(idM);

	//printCart();

	document.getElementById(modalID).style.display = "none";

}

function isEmpty()
{
	var found= false;
	for (var i = cart.length - 1; i >= 0 && !found; i--) {
		
		if (cart[i].itemQty == 0) {
			found=true;
		}
	}
}

function printCart() {
	// body...
	for (var i = cart.length - 1; i >= 0 ; i--) {
		
		//alert(cart[i].itemName+": "+cart[i].itemQty);
	}
}

function logginCheck()
{
	var bool = sessionStorage.getItem("avail");
	if(!bool)
	{
		lunchModal("myModalPO");
	}
	else
	{
		displayPO();
	}
}
function swichToLogin()
{
	closeModal("myModalPO");
	lunchModal("myModalL");

}




function login(id,idpass)
{
	var found=false;
	var i;
	var email= document.getElementById(id).value;
	var pass = document.getElementById(idpass).value;
	loadUser();
	//alert(email+"  "+usersEmail[0]);
	for (i = usersEmail.length - 1; i >= 0 && !found; i--)
	{
		//alert(email+"  "+usersEmail[0]);
		if(email == usersEmail[i])
		{
			if (pass == usersPass[i])
			{
				//alert(email+"  "+usersEmail[0]);
				found= true;
				activeUsr = found;
				activePos = i;
			}
		}

	}



	if(found){

		document.getElementById("tab5").innerHTML = "Welcome, "+usersName[i+1];
		document.getElementById("tab5").name= usersName[i+1];
		sessionStorage.setItem("avail",found);
		closeModal("myModalL");
	}
	else
	{
		alertWarning();
	}
}



//remove from cart
function cartDeleteItem(id,itemName){
	document.getElementById(id).style.display="none";
	var pos = findFood(itemName);
	totalInCart = totalInCart - cart[pos].itemQty;
	cart[pos].resetQty();
	document.getElementById("cont-Amount").innerHTML= totalInCart;
	quickMath();

}

//increase cart amount
function cartIncrese(idNum,idPrice,itemName){
	//alert("enter");
	var tempNum= findFood(itemName);
	var myTemp= cart[tempNum];
	var number=99;
	if(myTemp.itemQty < 99){
		number = myTemp.plusQty(1);
	}
	totalInCart++;
	document.getElementById("cont-Amount").innerHTML= totalInCart;
	document.getElementById(idNum).innerHTML = number;
	cartItemTotal(idPrice,itemName);
	quickMath();
}

function cartDecrese(idNum,idPrice,itemName){
	var tempNum= findFood(itemName);
	var myTemp= cart[tempNum];
	var number=0;
	if(myTemp.itemQty > 0){
		number = myTemp.minusQty(1);
	}

	totalInCart--;
	document.getElementById("cont-Amount").innerHTML= totalInCart;
	document.getElementById(idNum).innerHTML = number;
	cartItemTotal(idPrice,itemName);
	quickMath();
}
//reduce cart amount

//caulate total for individual items
function cartItemTotal(id,itemName){
	var tempNum= findFood(itemName);
	var myTemp=cart[tempNum];
	var number =myTemp.itemQty * myTemp.itemPrice;
	document.getElementById(id).innerHTML = "$"+number+".00";
}

//calculate total for cart. no taxs
function cartTotal()
{
	var temp=0;
	for (var i = cart.length - 1; i >= 0; i--) {
		temp += cart[i].itemQty * cart[i].itemPrice;
	}
	return temp;

}


//display the cart
function displayCart()
{
	if (cart[0].itemQty == 0) {
		document.getElementById("item1").style.display="none";
	}else{
		document.getElementById("item1").style.display="inline-block";
	}
	if (cart[1].itemQty == 0) {
		document.getElementById("item2").style.display="none";
	}else{
		document.getElementById("item2").style.display="inline-block";
	}
	if (cart[2].itemQty == 0) {
		document.getElementById("item3").style.display="none";
	}else{
		document.getElementById("item3").style.display="inline-block";
	}
	if (cart[3].itemQty == 0) {
		document.getElementById("item4").style.display="none";
	}else{
		document.getElementById("item4").style.display="inline-block";
	}

	var number =cart[0].itemQty * cart[0].itemPrice;
	document.getElementById("item1TP").innerHTML = "$"+number+".00";
	document.getElementById("qtySect1").innerHTML = cart[0].itemQty;

	var number =cart[1].itemQty * cart[1].itemPrice;
	document.getElementById("item2TP").innerHTML = "$"+number+".00";
	document.getElementById("qtySect2").innerHTML = cart[1].itemQty;

	var number =cart[2].itemQty * cart[2].itemPrice;
	document.getElementById("item3TP").innerHTML = "$"+number+".00";
	document.getElementById("qtySect3").innerHTML = cart[2].itemQty;

	var number =cart[3].itemQty * cart[3].itemPrice;
	document.getElementById("item4TP").innerHTML = "$"+number+".00";
	document.getElementById("qtySect4").innerHTML = cart[3].itemQty;
	//alert(101);
	quickMath();
	lunchModal('myModalC');
}


function subTotal(){
	var sub_total=0;
	
	for (var i = cart.length - 1; i >= 0; i--) {
		sub_total+= cart[i].itemQty * cart[i].itemPrice;
	}
	document.getElementById("subTotal").innerHTML = "$"+sub_total+".00";
	return sub_total;
}
function Tax()
{
	var sub_total=subTotal();
	var tax=0;
	tax= sub_total * 0.10;
	if(tax==0)
	{
		document.getElementById("tax").innerHTML = "$"+tax+".00";
	}else if(sub_total % 2 == 0)
	{
		document.getElementById("tax").innerHTML = "$"+tax+".00";
	}
	else if(sub_total % 2 == 1){
		document.getElementById("tax").innerHTML = "$"+tax+"0";
	}
	//document.getElementById("tax").innerHTML = tax;
	return tax;
}
function Total()
{
	var sub_total=subTotal();
	var tax=Tax();
	var total= sub_total+tax;
	if(sub_total % 2 == 0)
	{
		document.getElementById("total").innerHTML = "$"+total+".00";
	}
	else
	{
		document.getElementById("total").innerHTML = "$"+total+"0";
	}
	//document.getElementById("total").innerHTML = total;

}
function quickMath(){
	
	Total();
}

////////read write

function writeTextFile(filepath, output) {

	var txtFile = new File(filepath);

	txtFile.open("w"); //

	txtFile.writeln(output);

	txtFile.close();

}
function loadPO(){
	loadUser();
	if(activePos == 0)
	{
		cart= francisPO;
	} else if(activePos == 1)
	{
		cart= somtoPO;
	} else if(activePos == 2)
	{
		cart= enesiPO;
	} else if(activePos == 3)
	{
		cart=hafizPO;
	}
	lunchModal("myModalPOMain");
}

loadUser();
function getPO(pos)
{
	var myPO= new Array();
	//loadUser();
	if(activePos == 0)
	{
		myPO= francisPO;
	}
	else if(activePos == 1)
	{
		myPO= somtoPO;
	}
	else if(activePos == 2)
	{
		myPO= enesiPO;
	}
	else if(activePos == 3)
	{
		myPO=hafizPO;
	}
	else if(activePos == -1)
	{
		myPO= noPO;
	}
		return myPO;
}
function displayPO()
{
	
	var myPO = getPO(activePos);

	if (myPO[0].itemQty == 0) {
		document.getElementById("item1PO").style.display="none";
	}else{
		document.getElementById("item1PO").style.display="inline-block";
	}
	if (myPO[1].itemQty == 0) {
		document.getElementById("item2PO").style.display="none";
	}else{
		document.getElementById("item2PO").style.display="inline-block";
	}
	if (myPO[2].itemQty == 0) {
		document.getElementById("item3PO").style.display="none";
	}else{
		document.getElementById("item3PO").style.display="inline-block";
	}
	if (myPO[3].itemQty == 0) {
		document.getElementById("item4PO").style.display="none";
	}else{
		document.getElementById("item4PO").style.display="inline-block";
	}

	var number =myPO[0].itemQty * myPO[0].itemPrice;
	document.getElementById("item1TPPO").innerHTML = "$"+number+".00";
	document.getElementById("qtySect1PO").innerHTML = myPO[0].itemQty;

	var number =myPO[1].itemQty * myPO[1].itemPrice;
	document.getElementById("item2TPPO").innerHTML = "$"+number+".00";
	document.getElementById("qtySect2PO").innerHTML = myPO[1].itemQty;

	var number =myPO[2].itemQty * myPO[2].itemPrice;
	document.getElementById("item3TPPO").innerHTML = "$"+number+".00";
	document.getElementById("qtySect3PO").innerHTML = myPO[2].itemQty;

	var number =myPO[3].itemQty * myPO[3].itemPrice;
	document.getElementById("item4TPPO").innerHTML = "$"+number+".00";
	document.getElementById("qtySect4PO").innerHTML = myPO[3].itemQty;

	quickMathPO();
	

	lunchModal('myModalPOMain');
}

function subTotalPO(){
	var sub_totalPO=0;
	var myPO= getPO(activePos);
	for (var i = myPO.length - 1; i >= 0; i--) {
		sub_totalPO+= myPO[i].itemQty * myPO[i].itemPrice;
	}
	document.getElementById("subTotalPO").innerHTML = "$"+sub_totalPO+".00";
	return sub_totalPO;
}
function TaxPO()
{
	var sub_totalPO=subTotalPO();
	var taxPO=0;
	tax= sub_totalPO * 0.10;
	if(sub_totalPO % 2 == 0)
	{
		document.getElementById("taxPO").innerHTML = "$"+taxPO+".00";
	}
	else if(sub_totalPO % 2 == 1){
		document.getElementById("taxPO").innerHTML = "$"+taxPO+"0";
	}
	//document.getElementById("tax").innerHTML = tax;
	return taxPO;
}
function TotalPO()
{
	var sub_totalPO=subTotalPO();
	var taxPO=TaxPO();
	var totalPO= sub_totalPO+taxPO;
	if(sub_totalPO % 2 == 0)
	{
		document.getElementById("totalPO").innerHTML = "$"+totalPO+".00";
	}
	else
	{
		document.getElementById("totalPO").innerHTML = "$"+totalPO+"0";
	}
	//document.getElementById("total").innerHTML = total;
}
function quickMathPO(){
	
	TotalPO();
}

function alertWarning(){
	var myPas;
	
	document.getElementById("warning").style.visibility = "visible";
	
}

function checkOut(){

	if (subTotal() == 0) {
		alert("Cart is Empty");
	}
	else
	{
		alert("Order Was Placed, you get the meal for free. Payment still to come");
	}
}
