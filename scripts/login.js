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

let checklogin = JSON.parse(localStorage.getItem("login"));
let container = document.getElementById("login-container");
if(checklogin != null){
container.style.display = "none";
let h1 = document.createElement("h1");
h1.innerText = `Logged in as   ${checklogin.firstname+" "+checklogin.lastname}`
let body = document.getElementById("logindetails");
let btn = document.createElement("button");
btn.innerText = "Click to Log out";
btn.style.margin = "auto";
btn.addEventListener("click",()=>{
    localStorage.removeItem("login");
    window.location.href = "./loginPage.html";
})
h1.style.textAlign = "center";
body.append(h1,btn);
}
else{
login.addEventListener("click",()=>{
    let email = document.querySelector("#login > input[type=email]");
    let password = document.querySelector("#login > input[type=password]");
    let remeber = document.querySelector("#signup  input[type=checkbox");
    let eflag = true , pflag = true, flag = false;
    for(let i = 0 ; i<DataBase.length ; i++)
    {
        if(DataBase[i].email == email.value)
        eflag  = false;
        if(DataBase[i].password == password.value)
        pflag = false;
        if(DataBase[i].email == email.value  && DataBase[i].password == password.value )
        {
            flag= true;
            console.log("true");
            let logininfo = DataBase[i];
            localStorage.setItem("login",JSON.stringify(logininfo));
            alert("Login Successfull");
            window.location.href = "./cart.html";
            return 0;
        }
    }
    if(!flag){
        alert("Incorrect Credentials Check it Bro!)");
        console.log("error");
        }
    if(eflag)
    alert("Email not found Please Signup");
    if(pflag && !eflag)
    alert("Wrong Password");
    

})


signup.addEventListener("click",()=>{
    let fname = document.querySelector("#signup > input[type=text]");
    let lname = document.querySelector("#signup > input[type=text]:nth-child(3)");
    let email = document.querySelector("#signup > input[type=email]");
    let password = document.querySelector("#signup > input[type=password]");
    let remeber = document.querySelector("#signup  input[type=checkbox");
    let details = {
        firstname: fname.value,
    lastname: lname.value,
    email: email.value,
    password: password.value,
    }
    fetch(api,{
        method:'POST',
        headers: {'content-type':'application/json'},
        body:JSON.stringify(details)
    })
    .then(result =>result.json())
    .then(data=>{
        console.log(data);
        let logininfo = details;
            localStorage.setItem("login",JSON.stringify(logininfo));
        alert("Signed in Successfull");
        window.location.href = "./cart.html";
    })
})
}