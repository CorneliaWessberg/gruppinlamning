

const addProduct = function(e) {
 
    e.preventDefault;

const productList = []
const name = document.querySelector("#inputText").value;
const description = document.querySelector("#inputDescription").value;
const price = document.querySelector("#inputNumber").value;



if (productList.length === 0 ) {
    
    const addProductBox = document.createElement("p");
    addProductBox.innerText = name + "  " + description + "  " + price + "$";
    const push = document.querySelector("#products").appendChild(addProductBox)
    productList.push(push)
}
else {
    // const createBox = document.createElement("div")
    // const section = document.querySelector("section").appendChild(createBox)
    console.log("else")
}



}

const btn = document.querySelector("#addBtn");
btn.addEventListener("click", addProduct);