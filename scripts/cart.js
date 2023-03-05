let DataBase = JSON.parse(localStorage.getItem("cart")) || [];
display(DataBase);
total(DataBase);

let filter = document.getElementById("filter");
filter.addEventListener("change",()=>{
    data = JSON.parse(localStorage.getItem("cart")) || [];
    if(filter.value == "asc" || filter.value == "")
    {
        data.sort((a,b)=>a.price-b.price);
        localStorage.setItem("cart",JSON.stringify(data));
    }
    else
    {
        data.sort((a,b)=>b.price-a.price);
        localStorage.setItem("cart",JSON.stringify(data));
    }
    console.log(data);
    display(data);
})




function display(data)
{
    let body  = document.querySelector("#container");
    body.innerHTML = null;
    if(data.length == 0){
        let notify = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerText = "Your Shopping Bag is Empty.";
        let signin = document.createElement("a");
        signin.setAttribute("href","./loginPage.html");
        signin.innerText = "Click here to Login";
        let shop = document.createElement('a');
        shop.setAttribute("href","./index.html");
        shop.innerText = "Click here to Shop"
        notify.append(h1,signin,shop);
        notify.setAttribute("id","notify");
        body.append(notify);
    }
    else
    data.forEach(element => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",element.image1);
        let title = document.createElement("h3");
        title.innerText = element.name;
        let price = document.createElement("h4");
        price.innerText = "$"+element.price;
        let quan = document.createElement("div");
        let plus = document.createElement("button");
        plus.innerText = " + ";
        plus.addEventListener("click",()=>{
            let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
                element.quantity++;
                LS.splice(data.indexOf(element),1,element);
                localStorage.setItem("cart",JSON.stringify(LS));
                display(LS);
                total(LS);
        })
        let quantity = document.createElement("p");
        quantity.innerText = element.quantity;
        let minus = document.createElement("button");
        minus.innerText = " - ";
        minus.addEventListener("click",()=>{
            if(element.quantity == 1)
            {
                let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
                LS.splice(data.indexOf(element),1);
                localStorage.setItem("cart",JSON.stringify(LS));
                alert("Product deleted from cart");
                display(LS);
                total(LS);
            }
            else{
                let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
                element.quantity--;
                LS.splice(data.indexOf(element),1,element);
                localStorage.setItem("cart",JSON.stringify(LS));
                display(LS);
                total(LS);
            }
        })
        quan.append(plus,quantity,minus);
        let buy = document.createElement("button");
        buy.innerText = "Delete";
        buy.addEventListener("click",()=>{
            let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
            LS.splice(data.indexOf(element),1);
            localStorage.setItem("cart",JSON.stringify(LS));
            alert("Product deleted from cart");
            display(LS);
            total(LS);
        })
        card.append(img,title,price,quan,buy);
        body.append(card);
    });
    
}

function total(data){
    let price = document.getElementById("total");
    let x = 0;
    data.forEach(element=>{
        x += Number(element.price)*Number(element.quantity);
    })
    price.innerText = "$"+x;
}


let cart  = document.getElementById("checkout");
cart.addEventListener("click",()=>{
    window.location.href = "./checkout.html";
})