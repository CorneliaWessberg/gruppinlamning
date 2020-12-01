




/*const addProduct = function() {​​​​​
    const product = []

    const name = document.querySelector("#inputText").value;
    const description = document.querySelector("#inputDescription").value;
    const price = document.querySelector("#inputNumber").value;
    const addProductBox = document.createElement("p");
    addProductBox.innerText = name + description + price + "$";
    const push = document.querySelector("#products").appendChild(addProductBox)
    product.push(push);
    }​​​​​
    const btn = document.querySelector("#addBtn");
    btn.addEventListener("click", addProduct);
const addProduct = function() {  
 
    


    const addProduct = function() {
 
    


        const name = document.querySelector("#inputText").value;
        const description = document.querySelector("#inputDescription").value;
        const price = document.querySelector("#inputNumber").value;

        const addProductBox = document.createElement("div");
        addProductBox.className = "box";
        const createP1 = document.createElement("p")
        createP1.innerText = name
        const addName = document.querySelector(".box").appendChild(createP1)
        const createP2 = document.createElement("p")
        createP2.innerText = description
        const addName2 = document.querySelector(".box").appendChild(createP2)
        const createP3 = document.createElement("p")
        createP3.innerText = price
        const addName3 = document.querySelector(".box").appendChild(createP3)
        
            const push = document.querySelector("#products").appendChild(addProductBox)
        
            
        
        
            addProductBox.innerText = name + " " + description + " " + price 
        
        
        
        
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
        btn.addEventListener("click", checkInputValueName); */
    