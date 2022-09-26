// import "./storeInfos.js";
// import {firstName,lastName} from './storeInfos';

$(document).ready(function () {

    let opt2 = null;
    console.log(Infos)
  $("#area1").change(function () {
    let opt = $("#area1").val();
    // console.log(opt);
    if (opt == 0) {
      $("#area2").html(`<option value="0">區域選擇</option>`);
    //   console.log("01");
    } else if (opt == 1) {
      $("#area2").html(`            
        <option value="1">台北</option>
        <option value="2">桃園</option>
        <option value="3">新竹</option> `);
    //   console.log("02");
    } else if (opt == 2) {
      $("#area2").html(`            
        <option value="4">台中</option>
        <option value="5">彰化</option>
        <option value="6">苗栗</option> `);
    //   console.log("013");
    } else if (opt == 3) {
      $("#area2").html(`            
        <option value="7">高雄</option>
        <option value="8">台南</option>
        <option value="9">屏東</option> `);
    //   console.log("014");
    } else {
      // $("#area1").html(`
      // <option value="1">台北4</option>
      // <option value="2">桃園5</option>
      // <option value="3">新竹6</option> `);
    }

    // alert(this.value);
  });
  function changeInfos(){
    $("#storeInfos").append(` <div class="col-md-4">
    <div class="infoCard">
    <div class="scaleImgDiv">
        <div class="hover-img" style=" background-image: url(${Infos[i].url});"></div>
        </div>
        <h5>${Infos[i].addr}</h5>
        <i class="fa fa-phone" aria-hidden="true">${Infos[i].phone}</i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eaque.</p>
        <button class="reserv" onclick="qrInfo()">馬上定位</button>
    </div>
</div>`);

  }
  for(i=0;i<Infos.length;i++){
    console.log(Infos[i].area)
        changeInfos()      
    }
  $("#area2").change(function () {
    let opt2 = $("#area2").val();
    console.log(opt2);
  });

//  搜尋店家案紐
  $("#searchButtom").click(function(){
    let opt2 = $("#area2").val();
    $("#storeInfos").html('');
    // console.log(opt2);
for(i=0;i<Infos.length;i++){
    // console.log(Infos[i].area)
    if(Infos[i].area==opt2){
        console.log(Infos[i].addr)
        changeInfos()      
    }
}

if(opt2==0){
  for(i=0;i<Infos.length;i++){
    // console.log(Infos[i].area)
        changeInfos()      
    }
}

    
});

// console.log(Infos.length)

});
