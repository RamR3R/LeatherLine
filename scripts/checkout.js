let logininfo  =  localStorage.getItem("login");

if(logininfo == null)
{
    alert("Login or sign Up before Checkout!");
    window.location.href = "./loginPage.html";
}
else
{
    
}