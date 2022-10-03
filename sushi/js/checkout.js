$(document).ready(function () {
    let CartArr=[];
    console.log( localStorage.getItem("cart"))
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart)
    if (localStorage.getItem("cart")) {
        console.log(2123)
        cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart)
        for (i=0;i<cart.length;i++){
            CartArr[i]=cart[i].name
    
        }
        
      }
    const sushiArr = [
        { content: "鮪魚壽司", pic: "./img/sushi01.png", price: "40" },
        { content: "醃製鮪魚壽司", pic: "./img/sushi02.png", price: "40" },
        { content: "鮭魚壽司", pic: "./img/sushi03.png", price: "40" },
        { content: "炙燒鮭魚肚壽司", pic: "./img/sushi04.png", price: "50" },
        { content: "極上鮪魚大腹", pic: "./img/sushi05.png", price: "40" },
        { content: "赤鯥", pic: "./img/sushi06.png", price: "40" },
        { content: "鹽醋漬鯖魚", pic: "./img/sushi07.png", price: "40" },
        { content: "炙燒鰻魚肚壽司", pic: "./img/sushi08.png", price: "50" },
        { content: "鮭魚卵軍艦", pic: "./img/ring1.png", price: "60" },
        { content: "鮪魚沙拉軍艦", pic: "./img/ring2.png", price: "40" },
        { content: "玉米沙拉軍艦", pic: "./img/ring3.png", price: "40" },
        { content: "鱈魚子沙拉軍艦", pic: "./img/ring4.png", price: "40" },
        { content: "甜蝦軍艦", pic: "./img/ring5.png", price: "40" },
        { content: "豆皮壽司", pic: "./img/ring6.png", price: "40" },
        { content: "小黃瓜卷", pic: "./img/ring7.png", price: "40" },
        { content: "鮪魚泥細卷", pic: "./img/ring8.png", price: "40" },
        { content: "可口可樂", pic: "./img/drink01.png", price: "40" },
        { content: "雪碧", pic: "./img/drink02.png", price: "40" },
        { content: "梅酒", pic: "./img/drink03.png", price: "90" },
        { content: "可爾必思", pic: "./img/drink04.png", price: "40" },
        { content: "牛奶霜淇淋", pic: "./img/drink05.png", price: "40" },
        { content: "抹茶霜淇淋", pic: "./img/drink06.png", price: "60" },
        { content: "綜合霜淇淋", pic: "./img/drink07.png", price: "60" },
        { content: "千層蛋糕", pic: "./img/drink08.png", price: "60" },
        { content: "辣味噌拉麵", pic: "./img/soup01.png", price: "120" },
        { content: "牛肉烏龍麵", pic: "./img/soup02.png", price: "100" },
        { content: "豆皮烏龍麵", pic: "./img/soup03.png", price: "100" },
        { content: "炸蝦烏龍麵", pic: "./img/soup04.png", price: "100" },
        { content: "叉燒豚骨拉麵", pic: "./img/soup05.png", price: "100" },
        { content: "蛤蜊味噌湯", pic: "./img/soup06.png", price: "120" },
        { content: "海苔味噌湯", pic: "./img/soup07.png", price: "60" },
      ];

cart.forEach(element => {
    sushiArr.forEach((object) => {
        if (object.content == element.name){
            picUrl= object.pic
        }
    })
    $("#addCart").append(`
<div class="row ">
<div class="col-3">
    <img src="${picUrl}" alt="" style="text-align: center;">
</div>
<div class="col-2 butItem">${element.name}</div>
<div class="col-2 butItem">${element.price0}元</div>
<div class="col-2 butItem">
    <input class="num01" type="number" value="${element.itemCount}" min="1" width="30px" style="
    width: 50px;
">
</div>
<div class="col-2 butItem" class="Price01">${element.price1}元</div>
<div class="col-1 delBtn">
    X
</div>
<hr>
</div>`);

});

function totalPay() {
cart=[];
  console.log( CartArr)
  let NewPrice = 0;
  let cartNum = 0;
  let itemCount = null;
  let cartItemNum = $("#addCart").children().length;
  for (i = 0; i < cartItemNum; i++) {
    let price1 = $("#addCart").children()[i].children[4].innerText;
    let price0 = $("#addCart").children()[i].children[2].innerText;
    price1 = Number(price1.slice(0, -1));
    price0 = Number(price0.slice(0, -1));
    itemCount = price1 / price0;
    console.log(itemCount);
    cartNum = cartNum + itemCount;
    NewPrice = NewPrice + price1;
    let newItem = {
      name: CartArr[i],
      price1:price1,
      price0: price0,
      itemCount: itemCount
    };
    cart.push(newItem);
  }
  $("#totalPrice").text("總價:" + NewPrice + "元");
  $(".countCart").text(cartNum);
  console.log(cart)
  localStorage.setItem("cart", JSON.stringify(cart));
}
totalPay()
$(document).on("change", "input[type='number']", function () {
    // let  NewPrice =0;
    // 更改之input 的值
    let butNum = $(this).val();
    console.log($(this));
    let textLength = $(this).parent().siblings().eq(2).text().length;
    if (textLength == 3) {
      ans1 = Number($(this).parent().siblings().eq(2).text().slice(0, 2));
    } else {
      ans1 = Number($(this).parent().siblings().eq(2).text().slice(0, 3));
    }
    let Anser = ans1 * butNum;
    let totalAns1=$(this).parent().siblings().eq(3).text(Anser + "元");
      console.log(totalAns1)
    // 查出右邊購物車 有幾樣商品
    totalPay();
  });
  $(document).on("click", ".delBtn", function () {
    $(this).parents(".row").remove();
    let removeName = $(this).siblings().eq(1).text();
    CartArr = CartArr.filter(function (item) {
      return item != removeName;
    });
    console.log( CartArr)
    totalPay();
  });

  $(document).on("change", "input[type='radio']", function () {
console.log(21541)
$(".moreInfo").css("display","none");
    $(this).siblings($(".moreInfo")).css("display","block");
    let way = $(this).val()
    if(way==1){
        $("#wayToPay").html("")
        $("#wayToPay").append(` <div class="d-flex">
        <div class="photo1">
            <img src="./img/visa.png" alt="">
        </div>
        <div class="visaText">匯款帳號:013國泰世華 034506212024</div>
    </div>`)
console.log(1)
    }else if(way==2){
        console.log(2)
        $("#wayToPay").html("")
        $("#wayToPay").append(`
    <div class="d-flex">
        <div class="photo1">
            <img src="./img/ATM.png" alt="">
        </div>
        <div class="visaText">ATM虛擬代碼繳費:5211 5264 4217 2170</div>
    </div>
    `)
    }else{
        console.log(3)
        $("#wayToPay").html("")
        $("#wayToPay").append(` 
    <div class="d-flex">
        <div class="photo1">
            <img src="./img/constore.png" alt="">
        </div>
        <div class="visaText">超商繳費代碼:GW41232587965012</div>
    </div>`)
    }
    // console.log( $(this).val())


  })

})
