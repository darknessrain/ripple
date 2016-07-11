//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======






function chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}

//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}

function changeAllNavBarUIWording(arr,lang_index){

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_navlink1').innerHTML = arr[lang_index].lang_navlink1;
  document.getElementById('lang_navlink2').innerHTML = arr[lang_index].lang_navlink2;
  document.getElementById('lang_navlink3').innerHTML = arr[lang_index].lang_navlink3;
  document.getElementById('lang_navlink4').innerHTML = arr[lang_index].lang_navlink4;
  document.getElementById('lang_navlink5').innerHTML = arr[lang_index].lang_navlink5;
  document.getElementById('lang_navlink6').innerHTML = arr[lang_index].lang_navlink6;
  document.getElementById('lang_navlink7').innerHTML = arr[lang_index].lang_navlink7;
  document.getElementById('lang_navlink8').innerHTML = arr[lang_index].lang_navlink8;
  document.getElementById('lang_navlink9').innerHTML = arr[lang_index].lang_navlink9;
  document.getElementById('lang_navlink10').innerHTML = arr[lang_index].lang_navlink10;
  document.getElementById('lang_navlink11').innerHTML = arr[lang_index].lang_navlink11;
  document.getElementById('lang_smarthomeseries').innerHTML = arr[lang_index].lang_smarthomeseries;
  document.getElementById('lang_smarthomeseries_cont').innerHTML = arr[lang_index].lang_smarthomeseries_cont;
  document.getElementById('lang_ripple_icon_cont').innerHTML = arr[lang_index].lang_ripple_icon_cont;
  document.getElementById('lang_nowireinstall_cont').innerHTML = arr[lang_index].lang_nowireinstall_cont;
  document.getElementById('lang_btsmart_cont').innerHTML = arr[lang_index].lang_btsmart_cont;
  document.getElementById('lang_control_cont').innerHTML = arr[lang_index].lang_control_cont;
  document.getElementById('lang_products').innerHTML = arr[lang_index].lang_products;
  document.getElementById('lang_products_cont').innerHTML = arr[lang_index].lang_products_cont;
  document.getElementById('lang_central').innerHTML = arr[lang_index].lang_central_cont;
  document.getElementById('lang_door').innerHTML = arr[lang_index].lang_door_cont;
  document.getElementById('lang_light').innerHTML = arr[lang_index].lang_light;
  document.getElementById('lang_light_cont').innerHTML = arr[lang_index].lang_light_cont;
  document.getElementById('lang_motion').innerHTML = arr[lang_index].lang_motion_cont;
  document.getElementById('lang_plug').innerHTML = arr[lang_index].lang_plug;
  document.getElementById('lang_plug_cont').innerHTML = arr[lang_index].lang_plug_cont;
  document.getElementById('lang_shock').innerHTML = arr[lang_index].lang_shock;
  document.getElementById('lang_shock_cont').innerHTML = arr[lang_index].lang_shock_cont;
  document.getElementById('lang_smoke').innerHTML = arr[lang_index].lang_smoke;
  document.getElementById('lang_smoke_cont').innerHTML = arr[lang_index].lang_smoke_cont;
  document.getElementById('lang_weather').innerHTML = arr[lang_index].lang_weather;
  document.getElementById('lang_weather_cont').innerHTML = arr[lang_index].lang_weather_cont;
  document.getElementById('lang_Scenario').innerHTML = arr[lang_index].lang_Scenario;
  document.getElementById('lang_Scenario_cont').innerHTML = arr[lang_index].lang_Scenario_cont;
  document.getElementById('lang_morning').innerHTML = arr[lang_index].lang_morning;
  document.getElementById('lang_morning_cont').innerHTML = arr[lang_index].lang_morning_cont;
  document.getElementById('lang_ripple_plug_aready').innerHTML = arr[lang_index].lang_ripple_plug_aready;
  document.getElementById('lang_Leave').innerHTML = arr[lang_index].lang_Leave;
  document.getElementById('lang_Leave_detail_cont').innerHTML = arr[lang_index].lang_Leave_detail_cont;
  document.getElementById('lang_shock_detail_cont').innerHTML = arr[lang_index].lang_shock_detail_cont;
  document.getElementById('lang_smock_detail_cont').innerHTML = arr[lang_index].lang_smock_detail_cont;
  document.getElementById('lang_home').innerHTML = arr[lang_index].lang_home;
  document.getElementById('lang_door_detial_cont1').innerHTML = arr[lang_index].lang_door_detial_cont1;
  document.getElementById('lang_Leave').innerHTML = arr[lang_index].lang_Leave;
  document.getElementById('lang_door_detial_cont2').innerHTML = arr[lang_index].lang_door_detial_cont2;
  document.getElementById('lang_Leave').innerHTML = arr[lang_index].lang_Leave;
  document.getElementById('lang_goodnight').innerHTML = arr[lang_index].lang_goodnight;
  document.getElementById('lang_goodnight_cont1').innerHTML = arr[lang_index].lang_goodnight_cont1;
  document.getElementById('lang_goodnight_cont2').innerHTML = arr[lang_index].lang_goodnight_cont2;
  document.getElementById('lang_app_tl').innerHTML = arr[lang_index].lang_app_tl;
  document.getElementById('lang_app_cont').innerHTML = arr[lang_index].lang_app_cont;
  document.getElementById('lang_footer_slogan').innerHTML = arr[lang_index].lang_footer_slogan;
  document.getElementById('lang_footer_subtitle').innerHTML = arr[lang_index].lang_footer_subtitle;
  document.getElementById('lang_footer_contactmail').innerHTML = arr[lang_index].lang_footer_contactmail;
  document.getElementById('lang_footer_shortcuts').innerHTML = arr[lang_index].lang_footer_shortcuts;
  document.getElementById('lang_footer_EQLs').innerHTML = arr[lang_index].lang_footer_EQLs;
  document.getElementById('lang_footer_Homie').innerHTML = arr[lang_index].lang_footer_Homie;
  document.getElementById('lang_footer_ripple').innerHTML = arr[lang_index].lang_footer_ripple;
  document.getElementById('lang_footer_essence').innerHTML = arr[lang_index].lang_footer_essence;
  document.getElementById('lang_footer_pcstick').innerHTML = arr[lang_index].lang_footer_pcstick;
  document.getElementById('lang_footer_service').innerHTML = arr[lang_index].lang_footer_service;
  document.getElementById('lang_footer_shop').innerHTML = arr[lang_index].lang_footer_shop;
  document.getElementById('lang_footer_FAQ').innerHTML = arr[lang_index].lang_footer_FAQ;
  document.getElementById('lang_footer_contactus').innerHTML = arr[lang_index].lang_footer_contactus;
  document.getElementById('lang_footer_seenenough').innerHTML = arr[lang_index].lang_footer_seenenough;


  return;
}





function detectUserLang(){

    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();
    console.log(currentBrowserLang);

    switch (currentBrowserLang) {
      case "zh-tw":
            chg_lang(0);
        break;
      case "zh-cn":
            chg_lang(0);
        break;
      case "zh-hk":
            chg_lang(0);
        break;
      case "ja":
            chg_lang(2);
        break;

      default:
            chg_lang(1);
        break;
    }
}




//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - PC Stick網站";
Multi_Lang_Title[1]="Welcome to EQL - PC Stick";
Multi_Lang_Title[2]="EQLへようこそ - PC Stick";


//=====文字儲存區 END======
