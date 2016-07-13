//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.95 LT_Ripple
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案

//主要功能1 : 讀取cookie = lang_code 根據lang_code來判斷當前需要載入的語系，須掛入JSON資源文件檔
//主要功能2 : 使用DOM方法，依照語系更改文件內的文字
// 呼叫使用javascript 呼叫 bootstrap Tab 以切換個產品介紹分頁

// 切換Tab


$(document).ready(function(){




});


function chg_productlang(lang_index){

  //更改Navbar文件
  console.log("start Change Product Lanuange by Dropdown");
  changePNavBarUIWording(lang_index);

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



// onload 判斷該啟動哪個tab

window.onload=SwitchFromTabCode();


function SwitchFromTabCode(){


      // get URL
      var ex_url = location.href;
       console.log(ex_url);
      //取得問號之後的值
      var temp = ex_url.split("?");
      console.log(temp[1]);
      eval(temp[1]);

      if(tabcode!=null){

        changeBSTab(tabcode);

        updateLanguageByLangCode();
      }



}




// 切換tab
function changeBSTab(tab_index){

  if (tab_index==null){
    tab_index=0;
    }

  console.log(tab_index);
      //$('.nav-tabs a[href="#' + tab_name + '"]').tab('show');
      //$('.nav-tabs a:last').tab('show') ;
      $('.nav-tabs li:eq('+tab_index+') a').tab('show')
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



function changePNavBarUIWording(lang_index){

    //更改Drondown UI 語系顯示
    //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

    document.getElementById('change_dropdown_product_title').innerHTML =  Multi_Lang_Wording_p[lang_index]+'<b class="caret"></b>';

    return;
}






function changeAllProductPagesUIWording(myArr_products,lang_index){

  document.getElementById('lang_p_central_1').innerHTML = arr[lang_index].lang_p_central_1;
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


//Multi_Lang_Wording_p 供介面顯示
Multi_Lang_Wording_p = new Array();
Multi_Lang_Wording_p[0]="TW - 繁體中文";
Multi_Lang_Wording_p[1]="EN - English";
Multi_Lang_Wording_p[2]="JP - 日本語";
