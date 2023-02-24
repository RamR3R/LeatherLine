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
    let body  = document.querySelector("body");
    data.forEach(element => {
        let img = document.createElement("img");
        img.setAttribute("src",element.url)
        body.append(img);
    });
    
}