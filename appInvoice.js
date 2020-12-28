window.onload = function () {
    let products = JSON.parse(localStorage.getItem("cartProducts"))
        if (window.localStorage.length === 0) {   
        }
        else {
            
        products.map((product) => {
            const id = product.id;
            const img = product.addedUrl;
            const name = product.addedName;
            const description = product.addedDescription;
            const price = product.addedPrice;
            const addProductBox = document.createElement("tr");
            addProductBox.className = "box";
            
            document.querySelector("#products").appendChild(addProductBox)
            addProductBox.innerHTML = `<td> <img class="imgStyle" src="${img}"> </td> <td class="name" > ${name} </td> <td class="description" > ${description} </td> <td class="price"> Price: ${price} kr </td>`
            

            } )
        }

    let totalPrice = 0;

    // map loopar igenom arrayen products
    products.map((totalCost) => {
        // gör om price till en float istället för en sträng
        const price = parseFloat(totalCost.addedPrice);
    
        // räknar ut totalen, plussar på värdet för varje varv i loopen
        totalPrice += price
        console.log(totalPrice)
        const totalNode = document.getElementById("total");
        totalNode.innerHTML = `Total: ${totalPrice} kr` 
        
    }) 
    
    // localStorage.removeItem("cartProducts")
}


/*creating a button*/
document.getElementById("download")
    .addEventListener("click", function() {
        /*Pointing to what in the html the pdf should be creating*/
        const invoice = document.getElementById("invoice");
        var opt = {
            margin: 1,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(invoice).set(opt).save();
    });


/*
git add .

git commit -m "brger"

git pull origin master

git add .

git commit -m "ex"

git push origin master */



    
