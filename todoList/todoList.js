let ListID = 1;
$(document).ready(function () {
    //刪除
// $(".delBtn").click(function(){
//     $(this).parents('.items').remove();
//     console.log(123)


// })
    //刪除
$(".todoList").on('click','.delBtn',function(){
    $(this).parents('.items').remove();
    console.log(123)
})


//新增
$("#inputBtn").click(function(){
    test =$("#inputVal").val()
    if (test==""){
     alert("哈囉?")
     return

    }
$(".todoList").append(`
<div class="items">
        <div class="itemBox">
        <input class="delItem" type="checkbox" id="List${ListID}">
        <label for="List${ListID}">${test}</label>
    </div>
        <button  class="delBtn">X</button>
    </div>`)
$("#inputVal").val("") 
ListID+=1;

})



$("#test").click(function(){
let i =0;
 listNum =$(".todoList").children('.items').length;
 for (let index=0;index<listNum;index++){
    if($(".delItem").eq(i).is(':checked')) {
        // console.log($(".delItem").eq(index).is(':checked'))
        $(".delItem").eq(i).parents('.items').remove();
    i-=1
}
i=i+1

 }
})




  }); 
  