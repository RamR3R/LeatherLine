let logininfo  =  JSON.parse(localStorage.getItem("login"));
console.log(logininfo)
if(logininfo == null)
{
    alert("Login or sign Up before Checkout!");
    window.location.href = "./loginPage.html";
}
else
{
    let name = document.getElementById("name");
    name.innerText = `${logininfo.firstname} ${logininfo.lastname}`;

    let email = document.getElementById("email");
    email.innerText = `${logininfo.email}`;
}

let done = document.getElementById("done");
done.addEventListener("click",()=>{
    alert(`Oder placed Sucessfully`);
    alert(`invoce will be sent to ${logininfo.email}`);
    localStorage.removeItem("cart");
    window.location.href = "./index.html";
})