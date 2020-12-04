
var lista = []
const addProduct = function() {
 
    


<<<<<<< HEAD
    const name = document.querySelector("#inputText").value;
    const description = document.querySelector("#inputDescription").value;
    const price = document.querySelector("#inputNumber").value;
    
        const addProductBox = document.createElement("div");
        addProductBox.className = "box";
        const push = document.querySelector("#products").appendChild(addProductBox)
    
        
    
    
        
    
       //addProductBox.innerText = `${name} ${description} ${price}`

       addProductBox.innerHTML = `<li> ${name} </li> <li> ${description} </li> <li> Price: ${price} kr </li>`

       

        //addProductBox.innerHTML = "<li>" + name + "</li>" + " <li> " + description + "</li>" + "<li>" + "Price:" + price + "kr" + "</li>"
    
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
    
=======
const name = document.querySelector("#inputText").value;
const description = document.querySelector("#inputDescription").value;
const price = document.querySelector("#inputNumber").value;

    const addProductBox = document.createElement("div");
    addProductBox.className = "box";
    document.querySelector("#products").appendChild(addProductBox)
    
   
    lista.push(price)
    
console.log(lista)


    addProductBox.innerHTML = `<li> ${name} </li> <li> ${description} </li> <li> Price: ${price} kr </li>` + "</li>" + "<button id= \"btnAddToCart" + lista.length + "\"" +" > Add to cart </button>"
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

const btnAddToCart = document.querySelector( "#btnAddToCart" + lista.length);
btnAddToCart.addEventListener("click", addToShoppingcart)
>>>>>>> f07f530dac094a33adf189475f99a88dd1d267fd
