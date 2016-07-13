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
  console.log(lang_index);
  changeNavBarUIWording(lang_index);


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

return;

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
return;


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
  return;
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

  return;
}



function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}






function changeAllProductPagesUIWording(myArr_products,lang_index){

  document.getElementById('lang_title_products').innerHTML = arr[lang_index].lang_title_products;
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
  document.getElementById('lang_navlink12').innerHTML = arr[lang_index].lang_navlink12;

  //document.getElementById('lang_nav_order_btn').innerHTML = arr[lang_index].lang_nav_order_btn;

  document.getElementById('lang_p_tab_central').innerHTML = arr[lang_index].lang_p_tab_central;
  document.getElementById('lang_p_tab_door').innerHTML = arr[lang_index].lang_p_tab_door;
  document.getElementById('lang_p_tab_light').innerHTML = arr[lang_index].lang_p_tab_light;
  document.getElementById('lang_p_tab_motion').innerHTML = arr[lang_index].lang_p_tab_motion;
  document.getElementById('lang_p_tab_plug').innerHTML = arr[lang_index].lang_p_tab_plug;
  document.getElementById('lang_p_tab_shock').innerHTML = arr[lang_index].lang_p_tab_shock;
  document.getElementById('lang_p_tab_smoke').innerHTML = arr[lang_index].lang_p_tab_smoke;
  document.getElementById('lang_p_tab_weather').innerHTML = arr[lang_index].lang_p_tab_weather;

//central wording
  document.getElementById('lang_tl_central').innerHTML = arr[lang_index].lang_tl_central;
  document.getElementById('lang_p_central_breif1').innerHTML = arr[lang_index].lang_p_central_breif1;
  document.getElementById('lang_p_central_breif2').innerHTML = arr[lang_index].lang_p_central_breif2;
  document.getElementById('lang_p_central_breif3').innerHTML = arr[lang_index].lang_p_central_breif3;
  document.getElementById('lang_p_central_breif4').innerHTML = arr[lang_index].lang_p_central_breif4;
  document.getElementById('lang_p_central_breif1').innerHTML = arr[lang_index].lang_p_central_breif1;
  document.getElementById('lang_p_central_breif2').innerHTML = arr[lang_index].lang_p_central_breif2;
  document.getElementById('lang_p_central_breif3').innerHTML = arr[lang_index].lang_p_central_breif3;
  document.getElementById('lang_p_central_purchase_btn').innerHTML = arr[lang_index].lang_p_central_purchase_btn;

  document.getElementById('lang_p_central_spec_item').innerHTML = arr[lang_index].lang_p_central_spec_item;
  document.getElementById('lang_p_central_spec_Description').innerHTML = arr[lang_index].lang_p_central_spec_Description;
  document.getElementById('lang_p_central_spec_bt').innerHTML = arr[lang_index].lang_p_central_spec_bt;
  document.getElementById('lang_p_central_spec_bt_cont').innerHTML = arr[lang_index].lang_p_central_spec_bt_cont;
  document.getElementById('lang_p_central_spec_wifi').innerHTML = arr[lang_index].lang_p_central_spec_wifi;
  document.getElementById('lang_p_central_spec_wifi_cont').innerHTML = arr[lang_index].lang_p_central_spec_wifi_cont;
  document.getElementById('lang_p_central_spec_power').innerHTML = arr[lang_index].lang_p_central_spec_power;
  document.getElementById('lang_p_central_spec_power_cont').innerHTML = arr[lang_index].lang_p_central_spec_power_cont;
  document.getElementById('lang_p_central_spec_trans').innerHTML = arr[lang_index].lang_p_central_spec_trans;
  document.getElementById('lang_p_central_spec_trans_cont').innerHTML = arr[lang_index].lang_p_central_spec_trans_cont;
  document.getElementById('lang_p_central_spec_wifisecur').innerHTML = arr[lang_index].lang_p_central_spec_wifisecur;
  document.getElementById('lang_p_central_spec_wifisecur_cont').innerHTML = arr[lang_index].lang_p_central_spec_wifisecur_cont;
  document.getElementById('lang_p_central_spec_encry').innerHTML = arr[lang_index].lang_p_central_spec_encry;
  document.getElementById('lang_p_central_spec_encry_cont').innerHTML = arr[lang_index].lang_p_central_spec_encry_cont;
  document.getElementById('lang_p_central_spec_temperature').innerHTML = arr[lang_index].lang_p_central_spec_temperature;
  document.getElementById('lang_p_central_spec_temperature_cont').innerHTML = arr[lang_index].lang_p_central_spec_temperature_cont;

//door sensor
  document.getElementById('lang_tl_doorsensor').innerHTML = arr[lang_index].lang_tl_doorsensor;
  document.getElementById('lang_p_doorsensor_breif1').innerHTML = arr[lang_index].lang_p_doorsensor_breif1;
  document.getElementById('lang_p_doorsensor_breif2').innerHTML = arr[lang_index].lang_p_doorsensor_breif2;
  document.getElementById('lang_p_doorsensor_breif3').innerHTML = arr[lang_index].lang_p_doorsensor_breif3;
  document.getElementById('lang_p_doorsensor_purchase_btn').innerHTML = arr[lang_index].lang_p_doorsensor_purchase_btn;

  document.getElementById('lang_p_doorsensor_spec_item').innerHTML = arr[lang_index].lang_p_doorsensor_spec_item;
  document.getElementById('lang_p_doorsensor_spec_desc').innerHTML = arr[lang_index].lang_p_doorsensor_spec_desc;
  document.getElementById('lang_p_doorsensor_spec_bt').innerHTML = arr[lang_index].lang_p_doorsensor_spec_bt;
  document.getElementById('lang_p_doorsensor_spec_bt_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_bt_cont;
  document.getElementById('lang_p_doorsensor_spec_power').innerHTML = arr[lang_index].lang_p_doorsensor_spec_power;
  document.getElementById('lang_p_doorsensor_spec_power_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_power_cont;
  document.getElementById('lang_p_doorsensor_spec_batt').innerHTML = arr[lang_index].lang_p_doorsensor_spec_batt;
  document.getElementById('lang_p_doorsensor_spec_batt_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_batt_cont;
  document.getElementById('lang_p_doorsensor_spec_gap').innerHTML = arr[lang_index].lang_p_doorsensor_spec_gap;
  document.getElementById('lang_p_doorsensor_spec_gap_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_gap_cont;
  document.getElementById('lang_p_doorsensor_spec_trans').innerHTML = arr[lang_index].lang_p_doorsensor_spec_trans;
  document.getElementById('lang_p_doorsensor_spec_trans_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_trans_cont;
  document.getElementById('lang_p_doorsensor_spec_temper').innerHTML = arr[lang_index].lang_p_doorsensor_spec_temper;
  document.getElementById('lang_p_doorsensor_spec_temper_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_temper_cont;
  document.getElementById('lang_p_doorsensor_spec_humd').innerHTML = arr[lang_index].lang_p_doorsensor_spec_humd;
  document.getElementById('lang_p_doorsensor_spec_humd_cont').innerHTML = arr[lang_index].lang_p_doorsensor_spec_humd_cont;

//Light wording
  document.getElementById('lang_tl_light').innerHTML = arr[lang_index].lang_tl_light;
  document.getElementById('lang_p_light_breif1').innerHTML = arr[lang_index].lang_p_light_breif1;
  document.getElementById('lang_p_light_breif2').innerHTML = arr[lang_index].lang_p_light_breif2;
  document.getElementById('lang_p_light_breif3').innerHTML = arr[lang_index].lang_p_light_breif3;
  document.getElementById('lang_p_light_breif4').innerHTML = arr[lang_index].lang_p_light_breif4;
  document.getElementById('lang_p_light_purchase_btn').innerHTML = arr[lang_index].lang_p_light_purchase_btn;

  document.getElementById('lang_p_light_spec_item').innerHTML = arr[lang_index].lang_p_light_spec_item;
  document.getElementById('lang_p_light_spec_desc').innerHTML = arr[lang_index].lang_p_light_spec_desc;
  document.getElementById('lang_p_light_spec_bt').innerHTML = arr[lang_index].lang_p_light_spec_bt;
  document.getElementById('lang_p_light_spec_bt_cont').innerHTML = arr[lang_index].lang_p_light_spec_bt_cont;
  document.getElementById('lang_p_light_spec_power').innerHTML = arr[lang_index].lang_p_light_spec_power;
  document.getElementById('lang_p_light_spec_power_cont').innerHTML = arr[lang_index].lang_p_light_spec_power_cont;
  document.getElementById('lang_p_light_spec_watt').innerHTML = arr[lang_index].lang_p_light_spec_watt;
  document.getElementById('lang_p_light_spec_watt_cont').innerHTML = arr[lang_index].lang_p_light_spec_watt_cont;
  document.getElementById('lang_p_light_spec_bulb').innerHTML = arr[lang_index].lang_p_light_spec_bulb;
  document.getElementById('lang_p_light_spec_bulb_cont').innerHTML = arr[lang_index].lang_p_light_spec_bulb_cont;
  document.getElementById('lang_p_light_spec_cover').innerHTML = arr[lang_index].lang_p_light_spec_cover;
  document.getElementById('lang_p_light_spec_cover_cont').innerHTML = arr[lang_index].lang_p_light_spec_cover_cont;
  document.getElementById('lang_p_light_spec_lumi').innerHTML = arr[lang_index].lang_p_light_spec_lumi;
  document.getElementById('lang_p_light_spec_lumi_cont').innerHTML = arr[lang_index].lang_p_light_spec_lumi_cont;
  document.getElementById('lang_p_light_spec_dim').innerHTML = arr[lang_index].lang_p_light_spec_dim;
  document.getElementById('lang_p_light_spec_dim_cont').innerHTML = arr[lang_index].lang_p_light_spec_dim_cont;
  document.getElementById('lang_p_light_spec_life').innerHTML = arr[lang_index].lang_p_light_spec_life;
  document.getElementById('lang_p_light_spec_life_cont').innerHTML = arr[lang_index].lang_p_light_spec_life_cont;
  document.getElementById('lang_p_light_spec_ee').innerHTML = arr[lang_index].lang_p_light_spec_ee;
  document.getElementById('lang_p_light_spec_ee_cont').innerHTML = arr[lang_index].lang_p_light_spec_ee_cont;
  document.getElementById('lang_p_light_spec_trans').innerHTML = arr[lang_index].lang_p_light_spec_trans;
  document.getElementById('lang_p_light_spec_trans_cont').innerHTML = arr[lang_index].lang_p_light_spec_trans_cont;

//Motion Wording
  document.getElementById('lang_tl_motion').innerHTML = arr[lang_index].lang_tl_motion;
  document.getElementById('lang_p_motion_breif1').innerHTML = arr[lang_index].lang_p_motion_breif1;
  document.getElementById('lang_p_motion_breif2').innerHTML = arr[lang_index].lang_p_motion_breif2;
  document.getElementById('lang_p_motion_breif3').innerHTML = arr[lang_index].lang_p_motion_breif3;
  document.getElementById('lang_p_motion_purchase_btn').innerHTML = arr[lang_index].lang_p_motion_purchase_btn;

  document.getElementById('lang_p_motion_spec_item').innerHTML = arr[lang_index].lang_p_motion_spec_item;
  document.getElementById('lang_p_motion_spec_desc').innerHTML = arr[lang_index].lang_p_motion_spec_desc;
  document.getElementById('lang_p_motion_spec_bt').innerHTML = arr[lang_index].lang_p_motion_spec_bt;
  document.getElementById('lang_p_motion_spec_bt_cont').innerHTML = arr[lang_index].lang_p_motion_spec_bt_cont;
  document.getElementById('lang_p_motion_spec_pow').innerHTML = arr[lang_index].lang_p_motion_spec_pow;
  document.getElementById('lang_p_motion_spec_pow_cont').innerHTML = arr[lang_index].lang_p_motion_spec_pow_cont;
  document.getElementById('lang_p_motion_spec_batt').innerHTML = arr[lang_index].lang_p_motion_spec_batt;
  document.getElementById('lang_p_motion_spec_batt_cont').innerHTML = arr[lang_index].lang_p_motion_spec_batt_cont;
  document.getElementById('lang_p_motion_spec_da').innerHTML = arr[lang_index].lang_p_motion_spec_da;
  document.getElementById('lang_p_motion_spec_da_cont').innerHTML = arr[lang_index].lang_p_motion_spec_da_cont;
  document.getElementById('lang_p_motion_spec_trans').innerHTML = arr[lang_index].lang_p_motion_spec_trans;
  document.getElementById('lang_p_motion_spec_trans_cont').innerHTML = arr[lang_index].lang_p_motion_spec_trans_cont;
  document.getElementById('lang_p_motion_spec_temper').innerHTML = arr[lang_index].lang_p_motion_spec_temper;
  document.getElementById('lang_p_motion_spec_temper_cont').innerHTML = arr[lang_index].lang_p_motion_spec_temper_cont;
  document.getElementById('lang_p_motion_spec_temper_hum').innerHTML = arr[lang_index].lang_p_motion_spec_temper_hum;
  document.getElementById('lang_p_motion_spec_temper_hum_cont').innerHTML = arr[lang_index].lang_p_motion_spec_temper_hum_cont;

// Plug Wording

  document.getElementById('lang_tl_plug').innerHTML = arr[lang_index].lang_tl_plug;
  document.getElementById('lang_p_plug_breif1').innerHTML = arr[lang_index].lang_p_plug_breif1;
  document.getElementById('lang_p_plug_breif2').innerHTML = arr[lang_index].lang_p_plug_breif2;
  document.getElementById('lang_p_plug_breif3').innerHTML = arr[lang_index].lang_p_plug_breif3;
  document.getElementById('lang_p_plug_breif4').innerHTML = arr[lang_index].lang_p_plug_breif4;
  document.getElementById('lang_p_plug_breif5').innerHTML = arr[lang_index].lang_p_plug_breif5;
  document.getElementById('lang_p_plug_purchase_btn').innerHTML = arr[lang_index].lang_p_plug_purchase_btn;

  document.getElementById('lang_p_plug_spec_item').innerHTML = arr[lang_index].lang_p_plug_spec_item;
  document.getElementById('lang_p_plug_spec_desc').innerHTML = arr[lang_index].lang_p_plug_spec_desc;
  document.getElementById('lang_p_plug_spec_bt').innerHTML = arr[lang_index].lang_p_plug_spec_bt;
  document.getElementById('lang_p_plug_spec_bt_cont').innerHTML = arr[lang_index].lang_p_plug_spec_bt_cont;
  document.getElementById('lang_p_plug_spec_pow').innerHTML = arr[lang_index].lang_p_plug_spec_pow;
  document.getElementById('lang_p_plug_spec_pow_cont').innerHTML = arr[lang_index].lang_p_plug_spec_pow_cont;
  document.getElementById('lang_p_plug_spec_cur').innerHTML = arr[lang_index].lang_p_plug_spec_cur;
  document.getElementById('lang_p_plug_spec_cur_cont').innerHTML = arr[lang_index].lang_p_plug_spec_cur_cont;
  document.getElementById('lang_p_plug_spec_oload').innerHTML = arr[lang_index].lang_p_plug_spec_oload;
  document.getElementById('lang_p_plug_spec_oload_cont').innerHTML = arr[lang_index].lang_p_plug_spec_oload_cont;
  document.getElementById('lang_p_plug_spec_trans').innerHTML = arr[lang_index].lang_p_plug_spec_trans;
  document.getElementById('lang_p_plug_spec_trans_cont').innerHTML = arr[lang_index].lang_p_plug_spec_trans_cont;
  document.getElementById('lang_p_plug_spec_temper').innerHTML = arr[lang_index].lang_p_plug_spec_temper;
  document.getElementById('lang_p_plug_spec_temper_cont').innerHTML = arr[lang_index].lang_p_plug_spec_temper_cont;
  document.getElementById('lang_p_plug_spec_hum').innerHTML = arr[lang_index].lang_p_plug_spec_hum;
  document.getElementById('lang_p_plug_spec_hum_cont').innerHTML = arr[lang_index].lang_p_plug_spec_hum_cont;

// Shock wording

  document.getElementById('lang_tl_shock').innerHTML = arr[lang_index].lang_tl_shock;
  document.getElementById('lang_p_shock_breif1').innerHTML = arr[lang_index].lang_p_shock_breif1;
  document.getElementById('lang_p_shock_breif2').innerHTML = arr[lang_index].lang_p_shock_breif2;
  document.getElementById('lang_p_shock_breif3').innerHTML = arr[lang_index].lang_p_shock_breif3;
  document.getElementById('lang_p_shock_purchase_btn').innerHTML = arr[lang_index].lang_p_shock_purchase_btn;

  document.getElementById('lang_p_shock_spec_item').innerHTML = arr[lang_index].lang_p_shock_spec_item;
  document.getElementById('lang_p_shock_spec_desc').innerHTML = arr[lang_index].lang_p_shock_spec_desc;
  document.getElementById('lang_p_shock_spec_bt').innerHTML = arr[lang_index].lang_p_shock_spec_bt;
  document.getElementById('lang_p_shock_spec_bt_cont').innerHTML = arr[lang_index].lang_p_shock_spec_bt_cont;
  document.getElementById('lang_p_shock_spec_gsensor').innerHTML = arr[lang_index].lang_p_shock_spec_gsensor;
  document.getElementById('lang_p_shock_spec_gsensor_cont').innerHTML = arr[lang_index].lang_p_shock_spec_gsensor_cont;
  document.getElementById('lang_p_shock_spec_pow').innerHTML = arr[lang_index].lang_p_shock_spec_pow;
  document.getElementById('lang_p_shock_spec_pow_cont').innerHTML = arr[lang_index].lang_p_shock_spec_pow_cont;
  document.getElementById('lang_p_shock_spec_batt').innerHTML = arr[lang_index].lang_p_shock_spec_batt;
  document.getElementById('lang_p_shock_spec_batt_cont').innerHTML = arr[lang_index].lang_p_shock_spec_batt_cont;
  document.getElementById('lang_p_shock_spec_var').innerHTML = arr[lang_index].lang_p_shock_spec_var;
  document.getElementById('lang_p_shock_spec_var_cont').innerHTML = arr[lang_index].lang_p_shock_spec_var_cont;
  document.getElementById('lang_p_shock_spec_trans').innerHTML = arr[lang_index].lang_p_shock_spec_trans;
  document.getElementById('lang_p_shock_spec_trans_cont').innerHTML = arr[lang_index].lang_p_shock_spec_trans_cont;

// Smock wording
  document.getElementById('lang_tl_smoke').innerHTML = arr[lang_index].lang_tl_smoke;
  document.getElementById('lang_p_smoke_breif1').innerHTML = arr[lang_index].lang_p_smoke_breif1;
  document.getElementById('lang_p_smoke_breif2').innerHTML = arr[lang_index].lang_p_smoke_breif2;
  document.getElementById('lang_p_smoke_breif3').innerHTML = arr[lang_index].lang_p_smoke_breif3;
  document.getElementById('lang_p_smoke_purchase_btn').innerHTML = arr[lang_index].lang_p_smoke_purchase_btn;

  document.getElementById('lang_p_smoke_spec_item').innerHTML = arr[lang_index].lang_p_smoke_spec_item;
  document.getElementById('lang_p_smoke_spec_desc').innerHTML = arr[lang_index].lang_p_smoke_spec_desc;
  document.getElementById('lang_p_smoke_spec_bt').innerHTML = arr[lang_index].lang_p_smoke_spec_bt;
  document.getElementById('lang_p_smoke_spec_bt_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_bt_cont;
  document.getElementById('lang_p_smoke_spec_pow').innerHTML = arr[lang_index].lang_p_smoke_spec_pow;
  document.getElementById('lang_p_smoke_spec_pow_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_pow_cont;
  document.getElementById('lang_p_smoke_spec_batt').innerHTML = arr[lang_index].lang_p_smoke_spec_batt;
  document.getElementById('lang_p_smoke_spec_sens1').innerHTML = arr[lang_index].lang_p_smoke_spec_sens1;
  document.getElementById('lang_p_smoke_spec_sens1_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_sens1_cont;
  document.getElementById('lang_p_smoke_spec_sens2').innerHTML = arr[lang_index].lang_p_smoke_spec_sens2;
  document.getElementById('lang_p_smoke_spec_sens2_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_sens2_cont;
  document.getElementById('lang_p_smoke_spec_sens3').innerHTML = arr[lang_index].lang_p_smoke_spec_sens3;
  document.getElementById('lang_p_smoke_spec_sens3_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_sens3_cont;
  document.getElementById('lang_p_smoke_spec_htsens1').innerHTML = arr[lang_index].lang_p_smoke_spec_htsens1;
  document.getElementById('lang_p_smoke_spec_htsens1_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_htsens1_cont;
  document.getElementById('lang_p_smoke_spec_htsens2').innerHTML = arr[lang_index].lang_p_smoke_spec_htsens2;
  document.getElementById('lang_p_smoke_spec_htsens2_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_htsens2_cont;
  document.getElementById('lang_p_smoke_spec_temper').innerHTML = arr[lang_index].lang_p_smoke_spec_temper;
  document.getElementById('lang_p_smoke_spec_temper_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_temper_cont;
  document.getElementById('lang_p_smoke_spec_hum').innerHTML = arr[lang_index].lang_p_smoke_spec_hum;
  document.getElementById('lang_p_smoke_spec_hum_cont').innerHTML = arr[lang_index].lang_p_smoke_spec_hum_cont;

//Weather wording
  document.getElementById('lang_tl_weather').innerHTML = arr[lang_index].lang_tl_weather;
  document.getElementById('lang_p_weather_breif1').innerHTML = arr[lang_index].lang_p_weather_breif1;
  document.getElementById('lang_p_weather_breif2').innerHTML = arr[lang_index].lang_p_weather_breif2;
  document.getElementById('lang_p_weather_breif3').innerHTML = arr[lang_index].lang_p_weather_breif3;
  document.getElementById('lang_p_weather_breif4').innerHTML = arr[lang_index].lang_p_weather_breif4;
  document.getElementById('lang_p_smoke_purchase_btn').innerHTML = arr[lang_index].lang_p_smoke_purchase_btn;

  document.getElementById('lang_p_weather_spec_item').innerHTML = arr[lang_index].lang_p_weather_spec_item;
  document.getElementById('lang_p_weather_spec_desc').innerHTML = arr[lang_index].lang_p_weather_spec_desc;
  document.getElementById('lang_p_weather_spec_bt').innerHTML = arr[lang_index].lang_p_weather_spec_bt;
  document.getElementById('lang_p_weather_spec_bt_cont').innerHTML = arr[lang_index].lang_p_weather_spec_bt_cont;
  document.getElementById('lang_p_weather_spec_pow').innerHTML = arr[lang_index].lang_p_weather_spec_pow;
  document.getElementById('lang_p_weather_spec_pow_cont').innerHTML = arr[lang_index].lang_p_weather_spec_pow_cont;
  document.getElementById('lang_p_weather_spec_batt').innerHTML = arr[lang_index].lang_p_weather_spec_batt;
  document.getElementById('lang_p_weather_spec_batt_cont').innerHTML = arr[lang_index].lang_p_weather_spec_batt_cont;
  document.getElementById('lang_p_weather_spec_trans').innerHTML = arr[lang_index].lang_p_weather_spec_trans;
  document.getElementById('lang_p_weather_spec_trans_cont').innerHTML = arr[lang_index].lang_p_weather_spec_trans_cont;
  document.getElementById('lang_p_weather_spec_temper').innerHTML = arr[lang_index].lang_p_weather_spec_temper;
  document.getElementById('lang_p_weather_spec_temper_cont').innerHTML = arr[lang_index].lang_p_weather_spec_temper_cont;
  document.getElementById('lang_p_weather_spec_hum').innerHTML = arr[lang_index].lang_p_weather_spec_hum;
  document.getElementById('lang_p_weather_spec_hum_cont').innerHTML = arr[lang_index].lang_p_weather_spec_hum_cont;
  document.getElementById('lang_p_weather_spec_press').innerHTML = arr[lang_index].lang_p_weather_spec_press;
  document.getElementById('lang_p_weather_spec_press_cont').innerHTML = arr[lang_index].lang_p_weather_spec_press_cont;
  document.getElementById('lang_p_weather_spec_hires').innerHTML = arr[lang_index].lang_p_weather_spec_hires;
  document.getElementById('lang_p_weather_spec_hires_cont').innerHTML = arr[lang_index].lang_p_weather_spec_hires_cont;

 return;
}



function detectUserLang(){

    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();
    console.log(currentBrowserLang);

    switch (currentBrowserLang) {
      case "zh-tw":
            chg_productlang(0);
        break;
      case "zh-cn":
            chg_productlang(0);
        break;
      case "zh-hk":
            chg_productlang(0);
        break;
      case "ja":
            chg_productlang(2);
        break;

      default:
            chg_productlang(1);
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
