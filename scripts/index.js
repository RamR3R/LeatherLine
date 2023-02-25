let search = document.getElementById("search-bar");

search.addEventListener("click",()=>{
    window.location.href = "./tabby.html";
    search.setAttribute("autofocus");
})