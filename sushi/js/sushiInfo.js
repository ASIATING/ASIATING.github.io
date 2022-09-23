$(document).ready(function () {
  const sushiArr = [
    { content: "鮪魚壽司", pic: "./img/sushi01.png", price: "40元" },
    { content: "醃製鮪魚壽司", pic: "./img/sushi02.png", price: "40元" },
    { content: "鮭魚壽司", pic: "./img/sushi03.png", price: "40元" },
    { content: "炙燒鮭魚肚壽司", pic: "./img/sushi04.png", price: "40元" },
    { content: "極上鮪魚大腹", pic: "./img/sushi05.png", price: "40元" },
    { content: "赤鯥", pic: "./img/sushi06.png", price: "40元" },
    { content: "鹽醋漬鯖魚", pic: "./img/sushi07.png", price: "40元" },
    { content: "炙燒鮭魚肚壽司", pic: "./img/sushi08.png", price: "40元" },
  ];
  const ringArr = [
    { content: "鮭魚卵軍艦", pic: "./img/ring1.png", price: "60元" },
    { content: "鮪魚沙拉軍艦", pic: "./img/ring2.png", price: "40元" },
    { content: "玉米沙拉軍艦", pic: "./img/ring3.png", price: "40元" },
    { content: "鱈魚子沙拉軍艦", pic: "./img/ring4.png", price: "40元" },
    { content: "甜蝦軍艦", pic: "./img/ring5.png", price: "40元" },
    { content: "豆皮壽司", pic: "./img/ring6.png", price: "40元" },
    { content: "小黃瓜卷", pic: "./img/ring7.png", price: "40元" },
    { content: "鮪魚泥細卷", pic: "./img/ring8.png", price: "40元" },
  ];
  const desertArr = [
    { content: "可口可樂", pic: "./img/drink01.png", price: "40元" },
    { content: "雪碧", pic: "./img/drink02.png", price: "40元" },
    { content: "梅酒", pic: "./img/drink03.png", price: "90元" },
    { content: "可爾必思", pic: "./img/drink04.png", price: "40元" },
    { content: "牛奶霜淇淋", pic: "./img/drink05.png", price: "40元" },
    { content: "抹茶霜淇淋", pic: "./img/drink06.png", price: "60元" },
    { content: "綜合霜淇淋", pic: "./img/drink07.png", price: "60元" },
    { content: "千層蛋糕", pic: "./img/drink08.png", price: "60元" },
  ];
  const soupArr = [
    { content: "辣味噌拉麵", pic: "./img/soup01.png", price: "120元" },
    { content: "牛肉烏龍麵", pic: "./img/soup02.png", price: "100元" },
    { content: "豆皮烏龍麵", pic: "./img/soup03.png", price: "100元" },
    { content: "炸蝦烏龍麵", pic: "./img/soup04.png", price: "100元" },
    { content: "叉燒豚骨拉麵", pic: "./img/soup05.png", price: "100元" },
    { content: "蛤蜊味噌湯", pic: "./img/soup06.png", price: "120元" },
    { content: "海苔味噌湯", pic: "./img/soup07.png", price: "60元" },
  ];
  let page = 1;
  const arrPrice = [40, 50];
  $(document).on("click", ".buyBtn", function () {
    showCart();
    // index.js 打開右邊邊購物車
  });
//   計算購物車 商品總價
  function totalPay(){ 
  let num1 = $("#buyNum1").val();
  let num2 = $("#buyNum2").val();
  if (typeof num1 === "undefined"){num1=0}
  if (typeof num2 === "undefined"){num2=0}
  console.log(num1+num2)
  let totalPrice = num1 * arrPrice[0] + num2 * arrPrice[1];
  let price1 = Number(num1 * arrPrice[0]);
  let price2 = Number(num2 * arrPrice[1]);
  if (isNaN(price1)){price1=0}
  if (isNaN(price2)){price2=0}
//   if (price2===NaN){price2=0}
  $("#sumPrice1").text(price1 + "元");
  $("#sumPrice2").text(price2 + "元");
  $("#totalPrice").text("總價:" + totalPrice + "元");
  $(".countCart").text(Number(num1) + Number(num2));}



  $("input[type='number']").change(function () { totalPay()});
  //關閉右邊購物車
  $("#closeCart").on("click", function () {
    $("#shopCartBox").fadeOut("slow");
  });

  $(document).on('click','.delBtn',function(){
    $(this).parents('.row').remove();
    totalPay()
})

// 切換頁面
  // 壽司頁面
  // $("#sushi").on("click",changePage(sushiArr));
  $("#sushi").on("click", function () {
    changePage(sushiArr);
  });
  // 手卷頁面
  $("#ring").on("click", function () {
    changePage(ringArr);
  });
  // 甜點
  $("#dessert").on("click", function () {
    changePage(desertArr);
  });
  // 湯品
  $("#soup").on("click", function () {
    changePage(soupArr);
  });
  //變更內容的func
  function changePage(type) {
    $("#changeInfo").html("");
    const infos = type;
    infos.forEach((info) => {
      $("#changeInfo").append(
        `  <div class="sushiInfo col-lg-3 col-md-6 ">
      <div class="innerBox">
          <div class="imgBox" style=" background-image: url(${info.pic});"></div>
          <h5>${info.content}</h5>
          <h3>${info.price}</h3>
          <button class="buyBtn">點我加入購物車</button>
      </div>
  </div>`
      );
    });
  }
});
