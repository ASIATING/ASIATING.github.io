$(document).ready(function () {
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var ShopCart= document.getElementById('shopCartBox');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
// console.log(event.target)
    if (event.target == modal) {
        modal.style.display = "none";
        // console.log(event.target);
        // console.log(modal);
        
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        // console.log(event.target);
        // console.log(modal2);
        
    }
    if (event.target == ShopCart) {
        // console.log(event.target);
        // console.log(modal2);
        $("#shopCartBox").fadeOut("slow");
        // ShopCart.style.display = "none"; 跟 fadeOut 相同意思概念 都是display block&none
        console.log(999)
        
    }
}
})

function login(){
    $('#id01').css("display","block")
    console.log('123')

}

function qrInfo(){
    $('#id02').css("display","block")
    console.log('qrcode')

}


function showCart(){
    $('#shopCartBox').css("display","block")
    console.log('CART')

}

// function test123(){

//     console.log('CART123')

// }