
// a function that adds the products from the cart localStorage to the cart HTML 
window.onload = function () {
    let products = JSON.parse(localStorage.getItem("cartProducts"))

    let totalPrice = 0;

    products.map((addedToCart) => {
        const img = addedToCart.addedUrl;
        const name = addedToCart.addedName;
        //const description = addedToCart.addedDescription;
        const price = parseFloat(addedToCart.addedPrice);
        debugger 
        const addProductBox = document.createElement("div");
        addProductBox.className = "box";

        document.querySelector("#products").appendChild(addProductBox)
        addProductBox.innerHTML = `<li> <img class="imgStyle" src="${img}"> </li> <li class="name" > ${name} </li> <li class="price"> ${price} </li> <li> <p> Quantity: <input id="exemplar"> </p> <li> <button class="cartBtn" id="btn">  &#128465; </button>`


        // adding etra buttons for the customer to be able to remove items from their shoppingcarst
        const removeItem = document.querySelector("#btn")

        removeItem.addEventListener('click', function () {
            removeItem.parentNode.parentNode.remove();


        })


        ///////////////// Lägg till totalpris från (localstorage CartProducts) //////////////


        // function that purchases the products in the cart for the customer and resetting the local storage for the cart
        // also moves the customer to a page with their invoice (reciept for download)
        let buyItems = function () {
            localStorage.removeItem("cartProducts")
            window.document.location = "./faktura.html";
        }
        const buy = document.querySelector("#buy")
        buy.addEventListener("click", buyItems)



        // not finished function to remove removed items form local storage 
        let remove = function () {
        }
        const removeBtn = document.getElementById("#btn")
        // removeBtn.addEventListener("click", remove)

        //add price to total
        parseFloat(totalPrice) += Number(price)
        

    })
    const totalNode = document.getElementById("total");
    totalNode.innerHTML = `Total: ${totalPrice}`
}

// <li class="description" > ${description} </li>