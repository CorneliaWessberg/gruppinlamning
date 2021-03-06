
// a function that adds the products from the cart localStorage to the cart HTML 
window.onload = function () {
    let products = JSON.parse(localStorage.getItem("cartProducts"))
    //console.log(products)
    let totalPrice = 0;

    // map loopar igenom arrayen products
    products.map((addedToCart) => {
        

    })
        
        
         products.map((addedToCart, index) => {
             const img = addedToCart.addedUrl;
             const name = addedToCart.addedName;
             let quantity = addedToCart.addedQuantity
             const description = addedToCart.addedDescription;
             const price = parseFloat(addedToCart.addedPrice);
             const addProductBox = document.createElement("div");
             addProductBox.className = "box";
             document.querySelector("#products").appendChild(addProductBox)
              addProductBox.innerHTML = `<li> <img class="imgStyle" src="${img}"> </li> <li class="name" > ${name} </li> <li class="price"> price: ${price} kr </li> <li> <p class= "quantity"> Quantity: <span id="quantity">${quantity}</span> </p> </li> `
              
               // gör om price till en float istället för en sträng
              
              let qty = document.querySelector("#quantity").innerText
              const quantityPrice = price * quantity;
              console.log(qty)
              // räknar ut totalen, plussar på värdet för varje varv i loopen
              totalPrice += quantityPrice
              //console.log(totalPrice)
              const totalNode = document.getElementById("total");
              totalNode.innerHTML = `Total ${totalPrice}:-`
    

              const removeButton = document.createElement("button")
              removeButton.classList.add("delete-btn");                          
              removeButton.innerHTML = "&#x1F5D1; Remove";
              removeButton.setAttribute("id", index); 
              addProductBox.appendChild(removeButton)

              // adding etra buttons for the customer to be able to remove items from their shoppingcart
              const removeBtns = document.querySelectorAll(".delete-btn")

              for( i = 0; i < removeBtns.length; i++ ) {
                removeBtns[i].addEventListener('click' ,removeProduct)
              }  
            })

            function removeProduct(e) {
                e.preventDefault();
                 
                const answer = confirm("Are you sure you want to remove this item?") 
                  if(answer)  {

                    e.target.parentNode.remove();

                    let exist = JSON.parse(localStorage.getItem("cartProducts"));
                    
                    const removed = exist.splice(e.target.id, 1)
                    localStorage.setItem("cartProducts", JSON.stringify(exist));
                    
                    location.reload ()
                    
                  }
             }

            
    }

    
    // create elment
    // innerhtml = totalprice
 

// <li class="description" > ${description} </li>
// function that purchases the products in the cart for the customer and resetting the local storage for the cart
// also moves the customer to a page with their invoice (reciept for download)
let buyItems = function() {
    window.document.location="./invoice.html";
}
const buy = document.querySelector("#buy")
buy.addEventListener("click", buyItems)


