var app;
var mylatlon={lat:0,lon:0,heading:0};
var tokyotowerLatLon = {lat:35.6585618,lon:139.7453056};
if( navigator.geolocation )
{
	// 現在位置を取得できる場合の処理
    navigator.geolocation.getCurrentPosition( function(e){
        if(!e)return;
        mylatlon.lat = e.coords.latitude;
        mylatlon.lon = e.coords.longitude;
    } , function(e){
        console.error("取得失敗");
    } , {
        enableHighAccuracy:true,
        timeout:10000,
        maximumAge:50000
    } ) ;
}