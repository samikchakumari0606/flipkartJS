
import navbar from './components/navbar.js';
console.log("navbar",navbar);

let navbar_div=document.getElementById("nav");
navbar_div.innerHTML=navbar()






let arr=JSON.parse(localStorage.getItem("dataStore"))||[]
//console.log(arr);
displayData(arr);

function displayData(arr){
    let sum=0;
    let box2=document.getElementById("box2");
    box2.innerHTML=null

    arr.forEach(function(ele,index){
        sum=sum+ele.price;
        let total=document.getElementById("cart_total").textContent=Number(sum);

       let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.image;
        let price=document.createElement("p");
        price.innerText=ele.price;
        let rating=document.createElement("p");
        //rating.innerText=ele.rating.rate;
        let btn=document.createElement("button")
        btn.innerText="remove";
        btn.addEventListener("click",function(){
            remove(index)
        })

        
        div.append(img,price,btn);
        box2.append(div);

    })
}



function remove(index){
    arr.splice(index,1);
    console.log(arr)
    localStorage.setItem("dataStore",JSON.stringify(arr));
    
    displayData(arr);
    document.getElementById("item_count").textContent=Number(arr.length);
}

// document.querySelector("#cart_total>button").addEventListener("click",func);
// function func(){
//     alert("your order is placed successfully")
// }

function checkout(){
    let order=document.getElementById("submit");
    order.addEventListener("click",function(){
        alert("order placed succesfully")
    })
}
checkout()



