
function addToCart(name, cost){

	var myCart = localStorage.getItem("myCart")
	if(myCart==null || myCart=="null"){
		myCart = []	
	}else{
		myCart = JSON.parse(myCart)
	}
	console.log(myCart)
	myCart.push({name, cost})

	myCart = JSON.stringify(myCart)

	// Store
	localStorage.setItem("myCart", myCart);
}	


function populateItems(){

	var total  =0;
	var myCart = localStorage.getItem("myCart")
	if(myCart==null || myCart=="null"){
		myCart = []	
	}else{
		myCart = JSON.parse(myCart)

		for (var i = myCart.length - 1; i >= 0; i--) {
			document.getElementById("cartItems").innerHTML+= "<h2>"+myCart[i].name+" - ("+myCart[i].cost+" Bells)</h2>";
			total+=parseInt(myCart[i].cost);
		}

		document.getElementById("totalCost").innerHTML = "<h2>Total Cost: "+total+" Bells</h2>";
	}

}

