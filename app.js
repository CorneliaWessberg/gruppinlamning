// created 2 lists for later use 
var lista = []
var lista2 = []
var lista3 = []
var boxLista = []
//function for adding products from the homepage

const addProduct = function() {
 
    

    //declaring variables to inputfields in html
    const name = document.querySelector("#inputText").value;
    const description = document.querySelector("#inputDescription").value;
    const price = document.querySelector("#inputNumber").value;

    // creating a div with classname=box as a child to the ul with id=products in HTML
    const addProductBox = document.createElement("div");
    addProductBox.className = "box";

    const boxId = "boxId" + boxLista.length;
    boxLista.push(boxId)
    addProductBox.id = boxLista [boxLista.length -1]

    document.querySelector("#products").appendChild(addProductBox)
    addProductBox.innerHTML = "<li id=\"limg" + lista.length +  "\" > </li>"  +  ` <li class="name" > ${name} </li> <li class="description" > ${description} </li> <li class="price"> Price: ${price} kr </li>` + "</li>" + "<li id=\"btnList" + lista.length +  "\"></li>"

    //creating an img tag in HTML
    const imgUrl = document.querySelector("#inputImage").value;
    const createImg = document.createElement("img");
    createImg.src = imgUrl

    //giving the img tag a classname for later styling in css
    createImg.className = "imgStyle";

    

    //pushing a varying id to lista for later use
    const listaId = "#limg" + lista.length;
    lista.push(listaId);
    for (var i = 0; i < lista.length; i++) {   
    }
    const varImgId = lista[lista.length - 1]
    document.querySelector(varImgId).appendChild(createImg);
    


 // Creating a button in HTML and connecting to a variable
    const createBtn = document.createElement("button");
    createBtn.innerText ="Add to cart"

 //  creating a var with a varying id-Names for the created buttons /pushing to lista2 for later use
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
   


// another function that is going to add a selected product to the shoppingcart
        const addToShoppingcart = function () {

            // show how many items are inside
            const itemsInside= document.querySelector("#itemsInside")
            const sum = lista3.length + 1
            itemsInside.innerHTML = "Items: (" + sum +")"
            lista3.push(itemsInside);
            console.log(lista3)

            
         }
    
    // added eventlistener to the created buttons of each product
    const btnAddToCart = document.querySelector(usableBtnId);
    btnAddToCart.addEventListener("click", addToShoppingcart);

    localStorage.setItem("one", addProductBox.innerHTML)
    console.log(localStorage)
}


// function to check that the input field for "name of the product" isnt empty 
var checkInputValueName = function (e) {
    e.preventDefault();
    const name = document.querySelector("#inputText").value;

    if (name === "") {
        alert("Please add a name to your product!")
    }
    else {
        checkInputValueDescription();
        
    }
}

// function to check that the input field for "desctription of the product" isnt empty  
var checkInputValueDescription = function () {
    
    const description = document.querySelector("#inputDescription").value;

    if (description === "") {
        alert("Please add a description to your product!")
    }
    else {
        checkInputValuePrice();
        
    }
}

//function to check that the input field for "price of the product" isnt empty 
var checkInputValuePrice = function () {
 
    
    const price = Number(document.querySelector("#inputNumber").value);
   

    if (price > 0 ) {
        addProduct();
    }
    else {
        alert("Please add a price to your product!")
    }
}

// adding eventlistener to the addProduct button/ but first check the conditions of the other functions
const btn = document.querySelector("#addBtn");
btn.addEventListener("click", checkInputValueName);


// a button that takes the customer to the shoppingcart (another HTML)
const goToShoppingcart = function () {
    window.document.location="./shoppingcart.html";
}

const btnCart = document.querySelector("#goToCart");
btnCart.addEventListener("click", goToShoppingcart)





