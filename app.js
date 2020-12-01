

const addProduct = function(e) {
 
    e.preventDefault;

const productList = []
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
    
    
    //name + "  " + description + "  " + price + "$";
    const push = document.querySelector("#products").appendChild(addProductBox)
    productList.push(push)





}

const btn = document.querySelector("#addBtn");
btn.addEventListener("click", addProduct);