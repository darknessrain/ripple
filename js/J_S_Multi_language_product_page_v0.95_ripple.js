//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.95 LT_Ripple
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案

//主要功能1 : 讀取cookie = lang_code 根據lang_code來判斷當前需要載入的語系，須掛入JSON資源文件檔
//主要功能2 : 使用DOM方法，依照語系更改文件內的文字
// 呼叫使用javascript 呼叫 bootstrap Tab 以切換個產品介紹分頁

// 切換Tab

$(document).ready(function(){


});

function changeBSTab(tab_name){

//  if (tab_index==null){
//    tab_index=0;
//  }
 var tabx=3;
  console.log(tab_name);
      //$('.nav-tabs a[href="#' + tab_name + '"]').tab('show');
      //$('.nav-tabs a:last').tab('show') ;
      $('.nav-tabs li:eq('+tabx+') a').tab('show')
}



function updateLanguageByLangCode(){

  // 取得lang_code若無法由cookie中取得，則由瀏覽器語言碼來判斷
  var lang_code_current = getCookie("lang_code");
  console.log(lang_code);
  console.log(lang_code_current);
  if (lang_code_current!=null){
        //讀取外部JSON文件
        var xmlhttp = new XMLHttpRequest();
        var url = "mlang_products.txt";

        xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr_products = JSON.parse(xmlhttp.responseText);
            console.log(myArr_products);
            changeAllProductPagesUIWording(myArr_products,lang_index);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
  }




}


function changeAllProductPagesUIWording(myArr_products,lang_index){

  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  /*
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  document.getElementById('lang_p_central_').innerHTML = arr[lang_index].lang_p_central_;
  */

}
