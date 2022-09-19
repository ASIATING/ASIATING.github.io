$(document).ready(function () {
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

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