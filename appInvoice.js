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
            const addProductBox = document.createElement("tr");
            addProductBox.className = "box";
            
            document.querySelector("#products").appendChild(addProductBox)
            addProductBox.innerHTML = `<td> <img class="imgStyle" src="${img}"> </td> <td class="name" > ${name} </td> <td class="description" > ${description} </td> <td class="price"> Price: ${price} kr </td>`
                
            } )
        }
}



document.getElementById("download")
    .addEventListener("click", function() {
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



    
/* document.getElementById("download")
    .addEventListener("click", function() {
        const invoice = document.getElementById("invoice");
        var img = new Image();
        img.src = path.resolve('sample.jpg');
    
        var doc = new jsPDF('p', 'mm', 'a3');  // optional parameters
        doc.addImage(img, 'JPEG', 1, 2);
        doc.save("new.pdf");
    }); */
    
/*     var doc = new jsPDF("download") 
    printPdf = ("click", () => {
    doc.text('Jspdf text!', 10, 10) 
    doc.save('test.pdf')
    } */


/* window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
} */

/* function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("invoice");
    // Choose the element and save the PDF for our user.
    html2pdf()
      .from(element)
      .save();
} */

/* import { jsPDF } from "jspdf";

const doc = new jsPDF();
const elementHTML = $('#invoice').html();
const specialElementHandlers = {
    '#'
} */


/* doc.text("Hello world!", 10, 10);
doc.save("Invoice.pdf"); // will save the file in the current working directory */


/*     document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            var doc = new jsPDF();
                var elementHTML = $('#invoice').html();
                var specialElementHandlers = {
                    '#elementH': function (element, renderer) {
                        return true;
                    }
                };
                doc.fromHTML(elementHTML, 15, 15, {
                    'width': 170,
                    'elementHandlers': specialElementHandlers
                });

                // Save the PDF
                doc.save('sample-document.pdf');
            jsPDF().from(invoice).set(opt).save();
        }) */





/* var doc = new jsPDF()
document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
         console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            var doc = new jsPDF();
                var elementHTML = $('#invoice').html();
                var specialElementHandlers = {
                    '#elementH': function (element, renderer) {
                        return true;
                    }
                };
                doc.fromHTML(elementHTML, 15, 15, {
                    'width': 170,
                    'elementHandlers': specialElementHandlers
                });
                // Save the PDF
                doc.save('invoice.pdf');
                html2pdf().from(invoice).set(opt).save();
        }) */
