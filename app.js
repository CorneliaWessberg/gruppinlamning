// created 2 lists for later use 
var lista = []
var lista2 = []
var lista3 = []
var produktLista = []


//function for adding products from the homepage
 const addProduct = function() {
 
    
    
    //declaring variables to inputfields in html
    const name = document.querySelector("#inputText").value;
    const description = document.querySelector("#inputDescription").value;
    const price = document.querySelector("#inputNumber").value;
    const imgUrl = document.querySelector("#inputImage").value;
    
    
    
    const btnId = "btnId" + window.localStorage.length;
    const usableBtnId = "#" + btnId;
    console.log(usableBtnId)
    lista2.push(usableBtnId)

    // // // another function that is going to add a selected product to the shoppingcart
    //     const addToShoppingcart = function () {

    //         // show how many items are inside
    //         const itemsInside= document.querySelector("#itemsInside")
    //         const sum = lista3.length + 1
    //         itemsInside.innerHTML = "Items: (" + sum +")"
    //         lista3.push(itemsInside);
    //         console.log(lista3)

            
    //      }
    
    // // added eventlistener to the created buttons of each product
    // const btnAddToCart = document.querySelector(usableBtnId);
    // btnAddToCart.addEventListener("click", addToShoppingcart);

    const add = counter ++
    let product = {};
    product.id = add
    product.img = imgUrl
    product.name = name
    product.description = description
    product.price = price

    
    produktLista.push(product)
    console.log(add)
    let existing = JSON.parse(localStorage.getItem("products"))
    let newData = existing ? existing.concat(produktLista) : produktLista
    localStorage.setItem("products", JSON.stringify(newData));
    
 
}


let products = JSON.parse(localStorage.getItem("products"))
if (window.localStorage.length === 0) {   
}
else {


 products.map((product) => {
     const id = product.id ;
     const img = product.img;
     const name = product.name;
     const description = product.description;
     const price = product.price;
 
     const addProductBox = document.createElement("div");
     addProductBox.className = "box";
 
     document.querySelector("#products").appendChild(addProductBox)
      addProductBox.innerHTML = `<li> <img class="imgStyle" src="${img}"> </li> <li class="name" > ${name} </li> <li class="description" > ${description} </li> <li class="price"> Price: ${price} kr </li> <li> <button id=` + id + `>   Add to cart  </button></li>`
      console.log(id)
     } )

 }





// function to check that the input field for "name of the product" isnt empty 
var checkInputValueName = function () {
   
    const name = document.querySelector("#inputText").value;

    if (name === "") {
        alert("Please add a name to your product!")
    }
    else {
        checkInputValueDescription();
        
    }
}

// function to check that the input field for "desctription of the product" isnt empty  
var checkInputValueDescription = function () {
    
    const description = document.querySelector("#inputDescription").value;

    if (description === "") {
        alert("Please add a description to your product!")
    }
    else {
        checkInputValuePrice();
        
    }
}

//function to check that the input field for "price of the product" isnt empty 
var checkInputValuePrice = function () {
 
    
    const price = Number(document.querySelector("#inputNumber").value);
   

    if (price > 0 ) {
        addProduct();
    }
    else {
        alert("Please add a price to your product!")
    }
}

// adding eventlistener to the addProduct button/ but first check the conditions of the other functions
const btn = document.querySelector("#addBtn");
btn.addEventListener("click", checkInputValueName);


// a button that takes the customer to the shoppingcart (another HTML)
const goToShoppingcart = function () {
    window.document.location="./shoppingcart.html";
}

const btnCart = document.querySelector("#goToCart");
btnCart.addEventListener("click", goToShoppingcart)





