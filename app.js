
var lista = []
const addProduct = function() {
 
    


const name = document.querySelector("#inputText").value;
const description = document.querySelector("#inputDescription").value;
const price = document.querySelector("#inputNumber").value;

    // creating a div with classname box as a child to the ul with id products in HTML
    const addProductBox = document.createElement("div");
    addProductBox.className = "box";
    document.querySelector("#products").appendChild(addProductBox)
    
    // // creating a list item with classname li-image as a child to the div with classname box
    // const createLi = document.createElement("li");
    // createLi.className="li-Image"
    // document.querySelector(".box").appendChild(createLi)

    //creating an img tag as a child to the list item with class name li-Image

    addProductBox.innerHTML = "<li id=\"li-Image" + lista.length +  "\" </li>"  +  ` <li> ${name} </li> <li> ${description} </li> <li> Price: ${price} kr </li>` + "</li>" + "<button id= \" btnAddToCart" + lista.length + "\"  > Add to cart </button>"

    const imgUrl = document.querySelector("#inputImage").value;
    const createImg = document.createElement("img");
    createImg.src = imgUrl
    document.querySelector("#li-Image").appendChild(createImg)

    createImg.className = "imgStyle";
    
    

    
// list to give different id names to the buttons
lista.push(price)
   
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


const addToShoppingcart = function () {
    console.log("hej")
}

const btnAddToCart = document.querySelector( "#btnAddToCart" + lista.length);
btnAddToCart.addEventListener("click", addToShoppingcart)
