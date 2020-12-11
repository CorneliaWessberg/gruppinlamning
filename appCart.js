window.onload = function () {
    let products = JSON.parse(localStorage.getItem("cartProducts"))
        
        
         products.map((addedToCart) => {
             const img = addedToCart.addedUrl;
             const name = addedToCart.addedName;
             const description = addedToCart.addedDescription;
             const price = addedToCart.addedPrice;
             const addProductBox = document.createElement("div");
             addProductBox.className = "box";
         
             document.querySelector("#products").appendChild(addProductBox)
              addProductBox.innerHTML = `<li> <img class="imgStyle" src="${img}"> </li> <li class="name" > ${name} </li> <li class="description" > ${description} </li> <li class="price"> ${price} </li> <li> <button id="btn"> Remove from cart </button> </li> `
              
            


             } )       
}

const removeItem = document.querySelector(".btn")

removeItem.addEventListener('click' , function() {
    removeItem.parentNode.parentNode.remove();
});


let buyItems = function() {
    localStorage.removeItem("cartProducts")
    window.document.location="./faktura.html";
}
const buy = document.querySelector("#buy")
buy.addEventListener("click", buyItems)



let remove = function () {
    console.log("hej")
}      
const removeBtn = document.getElementById("#btn")
console.log(removeBtn)
// removeBtn.addEventListener("click", remove)