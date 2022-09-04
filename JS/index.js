$(document).ready(function () {
$('.skillList-item').click(function (e) {
    let index = $(".skillList  .skillList-item").index(this);
    console.log("$(this) : ",$(this));
    console.log(index)
    // console.log("e: ",e);
	// 	console.log("$(this) : ",$(this));
    switch(index){
        case 0 :$(".learn2-top").html(
            `<div class="introBox" id="introLink">
            <div class="tagColor">FRONT-END</div>
         <p>第一次接觸網頁前端是在在職的時候，朋友有在教學幫助有興趣的朋友轉職，並開始熟悉HTML/CSS/JS，而透過實際的專案練習了解到api串接，進一步瞭解到同步非同步的應用。</p>
         <p>慢慢地對前端產生興趣所以選擇全職做轉職的準備，也參加了勞動部的產業新尖兵，接受了更至正規及不同的授課內容、方式</p>
         <p>目前因為參加了朋友的專案開發練習，接觸到了Webpack/Vue.js框架等等，希望能更精通精進自己的程式能力擴展自己的技能樹。</p>
        </div>
        <div class="skill_chart">
        <p>HTML / CSS / RWD</p>
        <div class="bar">
          <div class="bar-front"  data-percent="70%" style="width: 70%;transition: width 200ms linear"></div>
        </div>
        <p>JAVASCRIPT / JQUERY</p>
        <div class="bar">
          <div class="bar-front"  data-percent="60%" style="width: 60%;"></div>
        </div>
        <p>BOOTSTRAP</p>
        <div class="bar">
          <div class="bar-front"  data-percent="50%" style="width: 50%;"></div>
        </div>
        <p>VUE.JS(Learning...)</p>
        <div class="bar">
          <div class="bar-front"  data-percent="30%" style="width: 30%;"></div>
        </div>
      </div>`
        );
        break;
        case 1 :
            $(".learn2-top").html(
            `<div class="learn2-top">
          
            <div class="introBox" id="introLink">
              <div class="tagColor">BACK-END</div>
           <p>在課程計畫中我們使用了XAMPP，是一個把Apache網頁伺服器與PHP、資料庫合在一起的環境，使我們對資料庫的操作有初步的了解</p>
           <p>PHP/Mysql的新增/刪除/修改/查詢及資料表的應用及查詢功能。</p>
          </div>
          <div class="skill_chart">
          <p>PHP</p>
          <div class="bar">
            <div class="bar-front"  data-percent="40%" style="width: 40%;"></div>
          </div>
          <p>Mysql</p>
          <div class="bar">
            <div class="bar-front"  data-percent="40%" style="width: 40%;"></div>
          </div>
        </div>`
        );
        break;
        case 2 :
            $(".learn2-top").html(
            `<div class="introBox" id="introLink">
            <div class="tagColor">OTHER</div>
         <p>在研究所時主要是用matlab及python來進行研究</p>
         <p>透過matlab來對生醫影像進行處理，再用python的深度學習來對影像進行分析</p>
         <p>透過這兩個程式語言使我更了解如何對影像的矩陣進行不同的運算，使得後續影像分析的效果來的更好，AI對影像的分類更準確。</p>
        </div>
        <div class="skill_chart">
        <p>MATLAB(Digital image processing)</p>
        <div class="bar">
          <div class="bar-front"  data-percent="80%" style="width: 80%;"></div>
        </div>
        <p>PYTHON(DEEP-LEARNING)</p>
        <div class="bar">
          <div class="bar-front"  data-percent="70%" style="width: 70%;"></div>
        </div>
      </div>`
        );
        break;


    }



})

})