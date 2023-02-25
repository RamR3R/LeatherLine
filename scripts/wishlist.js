let DataBase = JSON.parse(localStorage.getItem("wish")) || [];
display(DataBase);

let filter = document.getElementById("filter");
filter.addEventListener("change",()=>{
    data = JSON.parse(localStorage.getItem("cart")) || [];
    if(filter.value == "asc" || filter.value == "")
    {
        data.sort((a,b)=>a.price-b.price);
    }
    else
    {
        data.sort((a,b)=>b.price-a.price);
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
        h1.innerText = "Your Wishlist is Empty";
        let signin = document.createElement("a");
        signin.setAttribute("href","./loginPage.html");
        signin.innerText = "Click here to Login";
        let shop = document.createElement('a');
        shop.setAttribute("href","./index.html");
        shop.innerText = "Click here to Browse Products"
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
        let buy = document.createElement("button");
        buy.innerText = "Add to cart";
        let add = document.createElement("div");
        buy.addEventListener("click",()=>{
            let wish  =  JSON.parse(localStorage.getItem("cart")) || [];
            wish.push(element);
            localStorage.setItem("cart",JSON.stringify(wish));
            let LS  =  JSON.parse(localStorage.getItem("wish")) || [];
            LS.splice(data.indexOf(element),1);
            localStorage.setItem("wish",JSON.stringify(LS));
            display(LS);

        })
        let delet = document.createElement("button");
        delet.innerText = "Delete";
        delet.addEventListener("click",()=>{
            let LS  =  JSON.parse(localStorage.getItem("wish")) || [];
            LS.splice(data.indexOf(element),1);
            localStorage.setItem("wish",JSON.stringify(LS));
            display(LS);
        })
        add.append(buy,delet);

        card.append(img,title,price,add);
        body.append(card);
    });
    
}