// ------------- Login ------------

//pseudo user name and password
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const psw = "admin"
const uname = "admin"


//function to link admin and user to according HTML page, admin to addProduct and user to customer
function login () {
    
    console.log(username.value)
    if (username.value === uname && password.value === psw) {
        window.document.location="./addProduct.html"
    }
    
    else if (username.value === "user" && password.value === "user") {
        window.document.location="./customer.html"
    }
    
    else {
        alert(" Use username: \"user\" and password: \" user \" to continue as a customer ")
    }
}

const btn = document.querySelector("#loginBtn")
btn.addEventListener("click", login)