let api = `https://63f59a1b3f99f5855dc408c8.mockapi.io/Assets/Products`;
let DataBase;
fetch(api)
.then(result=>result.json())
.then(data=>{
    console.log(data);
    DataBase = data;
    display(DataBase);
})



function display(data)
{
    let body  = document.querySelector("#container");
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