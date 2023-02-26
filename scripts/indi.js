let data = JSON.parse(localStorage.getItem("indi"));

document.title = data.name;

let imgData = [data.image1,data.image2,data.image3];
let img = document.getElementById("indi-image");
let i = 0;
img.setAttribute("src",imgData[i]);
img.setAttribute("alt","Error");

let left = document.getElementById("left");
let right = document.getElementById("right");

left.addEventListener("click",()=>{
    if(i<0)
    i = 2;
    img.setAttribute("src",imgData[i--]);
})
right.addEventListener("click",()=>{
    if(i==3)
    i = 0;
    img.setAttribute("src",imgData[i++]);
})

let title = document.getElementById("title");
title.innerText = data.name;
let price = document.getElementById("price");
price.innerText = `$${data.price}`; 

let wish = document.getElementById("wish");
let buy = document.getElementById("buy");
wish.addEventListener("click",()=>{
    wish.innerText = "WishListed"
    wish.style.backgroundColor = 'pink';
    let LS  =  JSON.parse(localStorage.getItem("wish")) || [];
    LS.push(data);
    localStorage.setItem("wish",JSON.stringify(LS));
    alert("Product Added to Wish List");
})
buy.addEventListener("click",()=>{
    let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
    LS.push(data);
    localStorage.setItem("cart",JSON.stringify(LS));
    alert("Product Added to Cart");
})