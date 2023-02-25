let api = `https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products`;
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
    let api = `https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products/?search=${searchInput.value}`;
    fetch(api)
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
        card.append(img,title,price);
        body.append(card);
    });
    
}