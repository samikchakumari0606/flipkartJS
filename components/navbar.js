
function navbar(){
    return` <div class="logo">
    <a href="./home.html"> <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"></a>
    <p>Explore <span id="plus">Plus</span>
        <img width="10px" height="10px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png">
    </p>
</div>
<div class="search" >
<input type="text" placeholder="Search for products,brands and more">
<i class="fa-solid fa-magnifying-glass"></i>
</div>


<a href="#" class="navLink">Flipkart
    <i class="fa-solid fa-chevron-down down" ></i>
    
</a>
<a href="./seller.html" class="navLink">Become a seller</a>
<a href="#" class="navLink">More
    <i class="fa-solid fa-chevron-down down" ></i>
</a>
<a href="#" class="navLink">
    <i class="fa-solid fa-cart-shopping"></i>
    Cart</a>  
    `
}

export default navbar;