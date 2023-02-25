let container = document.getElementById("offer-content");

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
        link:"loginPage.html",
        linktext:"Tabby Now",
        cupon:'FLAT25',
    }
]


window.addEventListener("load", function () {

    // add event-listeners;
    let cont = document.querySelector("#offer-content");
    let div = this.document.createElement("div");
    let h1 = document.createElement("h1");
    let a = document.createElement("a");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let btnleft = document.createElement("button");
    let btnright= document.createElement("button");
    let i = 0;
    btnleft.innerText = " < ";
    btnright.innerText = " > ";
    div.append(h1,a,p);
    cont.append(btnleft,div,btnright);

    h1.innerText = data[i].offer;
        a.setAttribute("href",data[i].link);
        a.innerText = data[i].linktext;
        span.innerText = data[i].cupon;
        p.innerHTML = `Use Coupon Code: ${span.innerText}`;

    btnleft.addEventListener("click",()=>{
        i--;
        if(i<0)
        i = data.length-1;
        h1.innerText = data[i].offer;
        a.setAttribute("href",data[i].link);
        a.innerText = data[i].linktext;
        span.innerText = data[i].cupon;
        p.innerHTML = `Use Coupon Code: ${span.innerText}`;
    })
    btnright.addEventListener("click",()=>{
        i++;
        if(i==data.length)
        i = 0;
        h1.innerText = data[i].offer;
        a.setAttribute("href",data[i].link);
        a.innerText = data[i].linktext;
        span.innerText = data[i].cupon;
        p.innerHTML = `Use Coupon Code: ${span.innerText}`;
    })
    

    this.setInterval(()=>{
        i++;
        if(i<0)
        i = data.length;
        if(i==data.length)
        i = 0;
        h1.innerText = data[i].offer;
        a.setAttribute("href",data[i].link);
        a.innerText = data[i].linktext;
        span.innerText = data[i].cupon;
        p.innerHTML = `Use Coupon Code: ${span.innerText}`;
    },5000);
  });
