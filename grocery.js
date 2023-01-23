
// API :- https://grocery-mock-api.herokuapp.com/items
import navbar from './components/navbar.js';
console.log("navbar",navbar);

let navbar_div=document.getElementById("nav");
navbar_div.innerHTML=navbar()


import footer from './components/footer.js';
console.log("footer",footer)

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

async function getData(){

    let res=await fetch(`https://grocery-mock-api.herokuapp.com/items`)
    let data=await res.json();
    appendData(data.data)
    console.log("data",data);
}
getData();


function appendData(data){
let container=document.getElementById("items");
container.innerHTML=null;

    data.forEach(function(el){
    let div=document.createElement("div");

    let name=document.createElement("p");
    name.innerText=el.name;

    let img=document.createElement("img");
    img.src=el.image;

    let price=document.createElement("p");
    price.innerText=el.price;

    let btn=document.createElement("button");
    btn.innerText="add to cart";
    btn.addEventListener("click",function(){
        addButton(el)
    })

    div.append(img,name,price,btn);
    container.append(div);
})

}


let arr=JSON.parse(localStorage.getItem("dataStore"))||[];
function addButton(el){
   arr.push(el);
   localStorage.setItem("dataStore",JSON.stringify(arr))
   document.getElementById("item_count").textContent=Number(arr.length);
}
