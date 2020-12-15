 
// created 2 lists for later use 
var lista3 = []
var produktLista = []

//function for adding products as Admin
const addProduct = function() {   

    //declaring variables to inputfields in html
    const ID = document.querySelector("#inputID").value;
    const imgUrl = document.querySelector("#inputImage").value;
    const name = document.querySelector("#inputText").value;
    const description = document.querySelector("#inputDescription").value;
    const price = document.querySelector("#inputNumber").value;
    
    //creating an object and adding the input values
    let product = {};
    product.id = "id" + ID
    product.img = imgUrl
    product.name = name
    product.description = description
    product.price = price

    //pushing the object to the list of products
    produktLista.push(product)



    //-------//LocalStorage//---------//

    // setting variable to existing products in local storage
    let existing = JSON.parse(localStorage.getItem("products"))

    // adding new data ( a new product ) to the product list with concat
      //-- checking if there already exists objects in local Storage
    let newData = existing ? existing.concat(produktLista) : produktLista

    // uppdating "products" in local storage with new added product
    localStorage.setItem("products", JSON.stringify(newData)); 

}


   
     

    // another function that is going to add a selected product to the shoppingcart (But not really because admin should only have a preview of how it looks)
    const addToShoppingcart = function () {

            // show how many items are inside the cart (pseudo for admin)
            const itemsInside= document.querySelector("#itemsInside")
            const sum = lista3.length + 1
            itemsInside.innerHTML = "Items: (" + sum +")"
            lista3.push("Doesnt matter what stands here because it is pushed to count the list.length");
            
        }


    // Accessing local storage and mapping through the objects inside in order to show the products in the HTML files
    let products = JSON.parse(localStorage.getItem("products"))
        // a safeguard to prevent error: "not possible to map of null" --> only map if local storage/"products" has atleast one item inside
        if (window.localStorage.length === 0) {   
        }
        else {
        
            //mapping through products onject and creating elements in HTML to show the products in different boxes
         products.map((product) => {
             const id = product.id;
             const img = product.img;
             const name = product.name;
             const description = product.description;
             const price = product.price;
             const addProductBox = document.createElement("div");
             addProductBox.className = "box";
         
             document.querySelector("#products").appendChild(addProductBox)
              addProductBox.innerHTML = `<li> ${id} </li>  <li> <img class="imgStyle" src="${img}"> <li class="name" > ${name} </li> </li><li class="description" > ${description} </li> <li class="price"> Price: ${price} kr </li> <li> <button class="cartBtn" id=` + id + `>   Add to cart  </button></li>`
              
              //Skapar nya knappar på produkt-korten/ så att admin kan radera och bearbeta produkter
              const Buttons = document.createElement("div")
              Buttons.classList.add("buttons")
              
              const editButton = document.createElement("button")
              editButton.classList.add("editBtn")
              editButton.innerText = "Edit"

              const deleteButton = document.createElement("button")
              deleteButton.classList.add("delete-btn");                          
              deleteButton.innerText = "Delete";  

              
              addProductBox .appendChild(Buttons);
              Buttons.appendChild(editButton);
              Buttons.appendChild(deleteButton);


              
                    //Ropar på funktionen som tar bort produkten från sidan när man trycker på delete knappen
                deleteButton.addEventListener('click', deleteProduct );
                
                                    // edit funktion som låter admin ändra värderna "namn", "pris" & "description" på en produkt
                editButton.addEventListener('click' , editProduct );
            })

            function editProduct(e) {
                e.preventDefault();
                const editButton = e.target;
                   const editedName = editButton.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText = prompt("Produktnamn: ");
                   const editedDes = editButton.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText = prompt("Produktbeskrivning: ");
                   const editedPrice =  editButton.parentNode.previousElementSibling.previousElementSibling.innerText = prompt("Pris: ");  

                    let exist = JSON.parse(localStorage.getItem("products"));
                    console.log(exist)
                    exist.map((product) => {
                        targetId = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
                        localStorage.removeItem(targetId)
                    })
                    
                    
            }
            // delete function which removes the chosen productfrom the shop
            function deleteProduct(e) {
                e.preventDefault();
                const deleteButton = e.target;
                
                const answer = confirm("are you sure you want to delete this item?") 
                  if(answer)  {
                      deleteButton.parentNode.parentNode.remove();
                      let exist = JSON.parse(localStorage.getItem("products"));
                      
                      exist.map((product) => {
                        product.id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
                        
                        console.log(product.id)
                      } )
                      const removed = exist.splice(deleteButton, 1)
                      console.log(removed)

                    //   localStorage.setItem("products", JSON.stringify(exist))
                    //   console.log(exist)
                    

                  }
             }

             if (window.localStorage.length === 0) {   
            }
            else {
              //Ropar på funktionen som tar bort produkten från sidan när man trycker på delete knappen
              const delBtn = document.querySelector(".delete-btn")
                delBtn.addEventListener('click', deleteProduct );
            
            }
          
        }

        // Accessing products in order to acces btn Id
   const getStorage = JSON.parse(localStorage.getItem("products"));

   // another safeguard for error  "map off null"
       if (window.localStorage.length === 0) {   
       }
       else {
        // btn that calls add to shoppingcart function
       getStorage.map((product)=> {
           const id = product.id
           const usableBtnId = "#" + id
           
           const btnAddToCart = document.querySelector(usableBtnId);
           btnAddToCart.addEventListener("click", addToShoppingcart);
    } )

}

   // function to check that the input field for "name of the product" isnt empty 
var checkInputValueName = function (e) {
//  e.preventDefault();
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


