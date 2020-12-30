window.onload = function () {
    let products = JSON.parse(localStorage.getItem("cartProducts"))


    let totalPrice = 0;



    products.map((addedToCart, index) => {
        const img = addedToCart.addedUrl;
        const name = addedToCart.addedName;
        let quantity = addedToCart.addedQuantity
        //const description = addedToCart.addedDescription;
        const price = parseFloat(addedToCart.addedPrice);
        const addProductBox = document.createElement("tr");
        addProductBox.className = "box";
        document.querySelector("#products").appendChild(addProductBox)
         addProductBox.innerHTML = `<td> <img class="imgStyle" src="${img}"> </td> <td class="name" > ${name} </td> <td class="description"> <span id="quantity">quantity: ${quantity} </span> </td> <td class= "price">  ${price} kr </td> `
         
               // gör om price till en float istället för en sträng
              
               let qty = document.querySelector("#quantity").innerText
               const quantityPrice = price * quantity;
               console.log(qty)
               // räknar ut totalen, plussar på värdet för varje varv i loopen
               totalPrice += quantityPrice
               //console.log(totalPrice)
               const totalNode = document.getElementById("total");
               totalNode.innerHTML = `Total ${totalPrice}:-`
    })




    
     localStorage.removeItem("cartProducts")
}






/*creating a button*/
document.getElementById("download")
    .addEventListener("click", function() {
        /*Pointing to what in the html the pdf should be creating*/
        const invoice = document.getElementById("invoice");
        var opt = {
            margin: 0,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'a3', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();
    });




    
