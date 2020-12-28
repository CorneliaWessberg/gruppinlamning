
// two lists for late use
var lista = []
var cartLista = []

// const to select a div where we later want to show how many items are inside a customers cart
const itemsInside= document.querySelector("#itemsInside")

// localStorage/map to add the product elements to the customer page
let products = JSON.parse(localStorage.getItem("products"))

//safeguard
        if (window.localStorage.length === 0) {
        }
        else {
        
         products.map((product) => {
             const id = product.id;
             const img = product.img;
             const name = product.name;
             const description = product.description;
             const price = product.price;
             const addProductBox = document.createElement("div");
             addProductBox.className = "box";
         
             document.querySelector("#products").appendChild(addProductBox)
              addProductBox.innerHTML = `<li> <img class="imgStyle" src="${img}"> <li class="name" > ${name} </li></li>  <li class="description" > ${description} </li> <li class="price"> Price: ${price} kr </li> <li> <button class="cartBtn" id=` + id + `>   Add to cart  </button></li>`
              
             } )
         }

    

// accessing localStorage to get btn ids
    const getStorage = JSON.parse(localStorage.getItem("products"));

    getStorage.map((product)=> {
        const id = product.id
        const usableBtnId = "#" + id   
        const btnAddToCart = document.querySelector(usableBtnId);

        // another function that is going to add a selected product to the shoppingcart
    const itemNumber = localStorage.getItem("cartProducts")
    if (itemNumber === null) {
    }
    else {
    itemsInside.textContent = "Items: (" + JSON.parse(itemNumber).length +")" 
}
    const addToShoppingcart = function () {

        // creating another object where the products which the customer wants to buy are added and set to a different local storage
    let addedToCart = {};
    addedToCart.addedPrice = product.price
    addedToCart.addedDescription = btnAddToCart.parentNode.previousElementSibling.previousElementSibling.innerHTML;
    addedToCart.addedName = btnAddToCart.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    addedToCart.addedUrl = btnAddToCart.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.src; 
    cartLista.push(addedToCart)
    
    // putting a new local storage and adding newly added products to the list of already added products to the shopping cart local storage
    let existing = JSON.parse(localStorage.getItem("cartProducts"))
    let newData = existing ? existing.concat(cartLista) : cartLista
    localStorage.setItem("cartProducts", JSON.stringify(newData)); 
    location.reload();
    }
        btnAddToCart.addEventListener("click", addToShoppingcart);
    })      

             
  
         // a button that takes the customer to the shoppingcart (another HTML)
const goToShoppingcart = function () {
    window.document.location="./shoppingcart.html";
}   

const btnCart = document.querySelector("#goToCart");
btnCart.addEventListener("click", goToShoppingcart)
     


     