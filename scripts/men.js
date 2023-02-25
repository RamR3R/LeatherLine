const api = new URL(`https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products`);
api.searchParams.append('sex', 'men');
console.log(api);
let DataBase;
fetch(api)
.then(result=>result.json())
.then(data=>{
    console.log(data);
    DataBase = data;
    display(DataBase);
})

let search = document.getElementById("search-btn");
search.addEventListener("click",()=>{
    let searchInput  = document.getElementById("search-input")
    let searchapi = new URL(api);
    console.log(searchapi);
    searchapi.searchParams.append('search', 'red');
    fetch(searchapi)
    .then(result=>result.json())
    .then(data=>{
    console.log(data);
    DataBase = data;
    display(DataBase);
    })
})


function display(data)
{
    let body  = document.querySelector("#container");
    body.innerHTML = null;
    if(data.length == 0){
        let h1 = document.createElement("h1");
        h1.innerText = "No result Found :(";
        body.append(h1);
    }
    else
    data.forEach(element => {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src",element.image1);
        let title = document.createElement("h3");
        title.innerText = element.name;
        let price = document.createElement("h4");
        price.innerText = element.price;
        let buy = document.createElement("button");
        buy.innerText = "Buy";
        buy.addEventListener("click",()=>{
            let LS  =  JSON.parse(localStorage.getItem("cart")) || [];
            LS.push(element);
            localStorage.setItem("cart",JSON.stringify(LS));
        })

        card.append(img,title,price,buy);
        body.append(card);
    });
    
}