

const addProduct = function() {​​​​​
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