let api = `https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/users`;

let login = document.getElementById("log-in");
let signup  = document.getElementById("sign-up");
let DataBase;
fetch(api)
    .then(result=>result.json())
    .then(data=>{
        DataBase = data;
        console.log(data);
    })
login.addEventListener("click",()=>{
    let email = document.querySelector("#login > input[type=email]");
    let password = document.querySelector("#login > input[type=password]");
    let remeber = document.querySelector("#signup  input[type=checkbox");
    
    for(let i = 0 ; i<DataBase.length ; i++)
    {
        if(DataBase[i].email == email.value  && DataBase[i].password == password.value )
        {
            alert("Login Successfull");
            window.location.href = "./index.html";
        }
    }
})


signup.addEventListener("click",()=>{
    let fname = document.querySelector("#signup > input[type=text]");
    let lname = document.querySelector("#signup > input[type=text]:nth-child(3)");
    let email = document.querySelector("#signup > input[type=email]");
    let password = document.querySelector("#signup > input[type=password]");
    let remeber = document.querySelector("#signup  input[type=checkbox");

    fetch(api,{
        method:'POST',
        headers: {'content-type':'application/json'},
        body:JSON.stringify({
            firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        password: password.value,
        })
    })
    .then(result =>result.json())
    .then(data=>{
        console.log(data);
        alert("Signed in Successfull");
        window.location.href = "./index.html";
    })
})