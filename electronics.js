
import navbar from './components/navbar.js';
console.log("navbar",navbar);

let navbar_div=document.getElementById("nav");
navbar_div.innerHTML=navbar()



import footer from './components/footer.js';
console.log("footer",footer)

let footer_div=document.getElementById("footer");
footer_div.innerHTML=footer();

async function getData(){
    let res=await fetch("https://fakestoreapi.com/products/category/electronics");
    let data=await res.json();
    console.log("data",data);
    appendData(data);
}

getData()

// 
function appendData(data){
    let box=document.getElementById("box");
    box.innerHTML=null;
    data.forEach(function(ele){

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let price=document.createElement("p");
        price.innerText=ele.price;
        let rating=document.createElement("p");
        rating.innerText=ele.rating.rate;
        let title=document.createElement("p");
        title.innerText=ele.title;
        let btn=document.createElement("button")
        btn.innerText="add to cart";
        btn.addEventListener("click",function(){
            addData(ele)
        })
        div.append(img,price,rating,title,btn);
        box.append(div);
 })

}

let arr=JSON.parse(localStorage.getItem("dataStore"))||[]
function addData(ele){
arr.push(ele);
console.log(arr);
localStorage.setItem("dataStore",JSON.stringify(arr));
}
