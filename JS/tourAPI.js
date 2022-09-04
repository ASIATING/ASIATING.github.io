
    // const url = "restaurant_C_f.json";
    // // https://ASIATING.github.io/API/02/js/data.json
    // fetch(url)
    //   .then((res) => {
    //     const data = res.json();
    //     return data;
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     console.log(data.XML_Head.Infos.Info[0].Add)
    //   });

$(document).ready(function() {

    let showSearch = $('#searchpage');
    let showNoResult = $('#noresult');
 


    $('select#city').change(function() {
        $('.item').remove();
        let cityVal = $('select#city').val();
        console.log(12)
        $.ajax({
            type: 'GET',
            url: 'restaurant_C_f.json',
            dataType: 'json',
            success: function(data) {
                console.log('成功');
                console.log(data)
                console.log(data.XML_Head.Infos.Info.length)
                for (i = 0; i < data.XML_Head.Infos.Info.length; i++) {
                    if (cityVal == data.XML_Head.Infos.Info[i].Region) {
                        console.log(data.XML_Head.Infos.Info[i])
                        showNoResult.hide();
                        showSearch.show();
                        // console.log('good');
                        //JSON內的圖片
                         let imgdata =data.XML_Head.Infos.Info[i].Picture1;
                        console.log(imgdata);
                    //判斷JSON黨內有無圖片
                        if(imgdata==""){
                            imgdata = "./img/nopic.jpg";
                        }
                        let resultContent = `<div class="col-lg-12 item">
                                <img src="${imgdata}">
                                <div class="info">
                                    <div class="name"><span class="title">景點名稱：</span>${data.XML_Head.Infos.Info[i].Name}</div>
                                    <div class="address"><span class="title">地址：</span>${data.XML_Head.Infos.Info[i].Add}</div>
                                    <div class="description"><span class="title">簡述：</span>${data.XML_Head.Infos.Info[i].Description}</div>
                                </div>
                            </div>`
                        $('#searchpage > .row').append(resultContent);

                    } else if (cityVal == '請選擇') {
                        showSearch.hide();
                        showNoResult.show();
                        showNoResult.text('上方選擇縣市');
                        $('.item').remove();
                    }
                }

            },

            error: function() {
            }
        })
    });
});