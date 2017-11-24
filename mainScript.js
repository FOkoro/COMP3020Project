
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


var Cart;
var viewCart;
var usersName=["Somto"];
var usersEmail= ["mbahs"];

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
		return this.itemPice * this.itemQty;
	};
	this.plusQty = function(qty){

		this.itemQty = parseInt(this.itemQty) + parseInt(qty);		
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
		
		alert(cart[i].itemName+": "+cart[i].itemQty);
	}
}

function logginCheck()
{
	if(document.getElementById("tab5").name === "Guest")
	{
		lunchModal("myModalPO");
	}
	else
	{
		//doNoting
	}
}
function swichToLogin()
{
	closeModal("myModalPO");
	lunchModal("myModalL");

}


function login(id)
{
	var found=false;
	var i;
	var email= document.getElementById(id).value;
	//alert(email+"  "+usersEmail[0]);
	for (i = usersEmail.length - 1; i >= 0 && !found; i--) {
		//alert(email+"  "+usersEmail[0]);
		if(email == usersEmail[i])
		{
			//alert(email+"  "+usersEmail[0]);
			found= true;
		}
	}

	if(found){
		
		document.getElementById("tab5").innerHTML = usersName[i+1];
		document.getElementById("tab5").name= usersName[i+1];
		closeModal("myModalL");
	}
	else
	{
		//alert(email+"  "+document.getElementById("tab5").name);
	}
}

//remove from cart
function cartDeleteItem(id){
	document.getElementById(id).style.display="none";
}

//increase cart amount

//reduce cart amount

//caulate total for individual items

//calculate total for cart. no taxs
