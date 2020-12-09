window.onload = function () {
    let products = JSON.parse(localStorage.getItem("products"))
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
              addProductBox.innerHTML = `<li> <img class="imgStyle" src="${img}"> </li> <li class="name" > ${name} </li> <li class="description" > ${description} </li> <li class="price"> Price: ${price} kr </li> <li> <button id=` + id + `>   Add to cart  </button></li>`
              
             } )
        
         }
}


const getStorage = JSON.parse(localStorage.getItem("products"));
        if (window.localStorage.length === 0) {   
        }
        else {
        getStorage.map((product)=> {
            const id = product.id
            const usableBtnId = "#" + id
            console.log(usableBtnId)
            // const btnAddToCart = document.querySelector(usableBtnId);
            // btnAddToCart.addEventListener("click", addToShoppingcart);
        } )
    }  
        
  