let search = document.getElementById("search-bar");

search.addEventListener("click",()=>{
    window.location.href = "./tabby.html";
    search.setAttribute("autofocus");
})


let data = [
    {
        offer:"Get 15% off on First purchase",
        link:"./loginPage.html",
        linktext:"Signup Now",
        cupon:'NEW15',
    },
    {
        offer:"Get 10% off Every Fifth purchase",
        link:"./tabby.html",
        linktext:"Shop Now",
        cupon:'FLAT10',
    },
    {
        offer:"Get flat 20% off on Purchase above $5000 ",
        link:"./tabby.html",
        linktext:"Shop More",
        cupon:'FLAT20',
    },
    {
        offer:"Get flat 25% off on Purchase on Tabby Products Alone",
        link:"./tabby.html",
        linktext:"Tabby Now",
        cupon:'FLAT25',
    }
]

let ad = document.querySelector("#ad>div>h3")
let i = 0;
ad.innerText = data[i++].offer;
this.setInterval(()=>{
    if(i<0)
    i = data.length;
    if(i==data.length)
    i = 0;
    ad.innerText = data[i++].offer;
},1000);

ad.addEventListener("click",()=>window.location.href = "./offers.html");