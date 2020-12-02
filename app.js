

const addProduct = function() {
 
    


const name = document.querySelector("#inputText").value;
const description = document.querySelector("#inputDescription").value;
const price = document.querySelector("#inputNumber").value;

    const addProductBox = document.createElement("div");
    addProductBox.className = "box";
    document.querySelector("#products").appendChild(addProductBox)

    
    


    addProductBox.innerHTML = "<li>" + name +  "</li>" + " <li> " + description + "</li>" + "<li>" + "Price:"  + price + "kr" + "</li>" + "<button id= \"btnAddToCart\" > Add to cart </button>" 


}



var checkInputValueName = function () {
    
    const name = document.querySelector("#inputText").value;

    if (name === "") {
        alert("Please add a name to your product!")
    }
    else {
        checkInputValueDescription();
        
    }
}
var checkInputValueDescription = function () {
    
    const description = document.querySelector("#inputDescription").value;

    if (description === "") {
        alert("Please add a description to your product!")
    }
    else {
        checkInputValuePrice();
        
    }
}
var checkInputValuePrice = function () {
 
    
    const price = Number(document.querySelector("#inputNumber").value);
   

    if (price > 0 ) {
        addProduct();
    }
    else {
        alert("Please add a price to your product!")
    }
}

const btn = document.querySelector("#addBtn");
btn.addEventListener("click", checkInputValueName);




//----------------------------------------------------

const goToShoppingcart = function () {
    window.document.location="./shoppingcart.html";
}

const btnCart = document.querySelector("#goToCart");
btnCart.addEventListener("click", goToShoppingcart)