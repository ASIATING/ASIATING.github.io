$(document).ready(function () {
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
console.log(event.target)
    if (event.target == modal) {
        modal.style.display = "none";
        console.log(event.target);
        console.log(modal);
        
    }
}
})

function login(){
    $('#id01').css("display","block")
    console.log('123')

}