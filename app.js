
var lista = []
var lista2 = []
const addProduct = function(a) {
 
    


    const name = document.querySelector("#inputText").value;
    const description = document.querySelector("#inputDescription").value;
    const price = document.querySelector("#inputNumber").value;

    // creating a div with classname box as a child to the ul with id products in HTML
    const addProductBox = document.createElement("div");
    addProductBox.className = "box";
    document.querySelector("#products").appendChild(addProductBox)
    
    
    addProductBox.innerHTML = "<li id=\"limg" + lista.length +  "\" > </li>"  +  ` <li> ${name} </li> <li> ${description} </li> <li> Price: ${price} kr </li>` + "</li>" + "<li id=\"btnList" + lista.length +  "\"></li>"

    


    const imgUrl = document.querySelector("#inputImage").value;
    const createImg = document.createElement("img");
    createImg.src = imgUrl
    createImg.className = "imgStyle";

    

    
    const listaId = "#limg" + lista.length;
    lista.push(listaId);

    for (var i = 0; i < lista.length; i++) {   
    }
    const varImgId = lista[lista.length - 1]
    document.querySelector(varImgId).appendChild(createImg);
    


 // Creating a button in HTML and connecting to a variable
    const createBtn = document.createElement("button");
    createBtn.innerText ="Add to cart"

 //  creating a var with a varying id-Names for the created buttons /pushing to lista2 
    const btnListId = "#btnList" + lista2.length;
    
    const btnId = "btnId" + lista2.length;
    createBtn.id = btnId
    const usableBtnId = "#" + btnId;
    lista2.push(btnListId);
    

 // a loop to determine what ist to be added to the id base "#btnAddToCart"
    for (var j = 0; j < lista2.length; j++) {
    }
 
 // creating a var that can be used as an id selector
    const varBtnId = lista2[lista2.length - 1]
 
    document.querySelector(varBtnId).appendChild(createBtn);
   
    
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
btn.addEventListener("click", checkInputValueName);




//----------------------------------------------------

const goToShoppingcart = function () {
    window.document.location="./shoppingcart.html";
}

const btnCart = document.querySelector("#goToCart");
btnCart.addEventListener("click", goToShoppingcart)




const addToShoppingcart = function () {
    console.log("hej")
}


// const btnAddToCart = document.querySelector(a   );
// console.log(usableBtnId)
// btnAddToCart.addEventListener("click", addToShoppingcart());
