var app;
var mylatlng={lat:0,lon:0,heading:0};
var tokyotowerLatLng = {lat:35.6585618,lng:139.7453056};
var ntttwins = {lat:35.630453,lng:139.74228};
var northDir = 0;
var orientation = window.orientation||window.screen.orientation.angle;
var mainCam={};



document.addEventListener('DOMContentLoaded',function(event){
    
    var consoleDiv = document.querySelector('#console');
    var consoleDiv2 = document.querySelector('#console2');
    
    var TOKYOTOWER = new google.maps.LatLng(tokyotowerLatLng.lat, tokyotowerLatLng.lng); 
    var NTT = new google.maps.LatLng(ntttwins.lat,ntttwins.lng);

    var distance = google.maps.geometry.spherical.computeDistanceBetween(NTT, TOKYOTOWER);
    var direct =  google.maps.geometry.spherical.computeHeading(NTT, TOKYOTOWER);
    consoleDiv.innerHTML = orientation;
    $(window).on('deviceorientation',function(ev){
        var compassdir=ev.originalEvent.webkitCompassHeading||ev.originalEvent.alpha;
        compassdir=(360+(compassdir+orientation))%360;
        northDir=compassdir;
        //consoleDiv.innerHTML='North:'+northDir+'deg';
    });
    
    window.addEventListener('orientationchange',function(ev){
        orientation = window.orientation||window.screen.orientation.angle;
    });
    
    /*
      window.addEventListener('deviceorientation', function(event) {
        var compassdir;
        if(event.webkitCompassHeading) {
          // Apple works only with this, alpha doesn't work
          compassdir = event.webkitCompassHeading;  
        }
            //var north = compassHeading(event.webkitCompassHeading,event.beta,event.gamma);
            //consoleDiv.innerHTML = north;
            consoleDiv.innerHTML = compassdir;
      });
        if( navigator.geolocation ){
            // 現在位置を取得できる場合の処理
            consoleDiv2.innerHTML ="ready";
            
            navigator.geolocation.getCurrentPosition( function(e){
            consoleDiv2.innerHTML ="test2";
                if(!e)return;
                mylatlng.lat = e.coords.latitude;
                mylatlng.lng = e.coords.longitude;
                mylatlng.heading = e.coords.heading||0;
                
                
                var TOKYOTOWER = new google.maps.LatLng(tokyotowerLatLng.lat, tokyotowerLatLng.lng); 
                var NTT = new google.maps.LatLng(ntttwins.lat,ntttwins.lng);
                var myhplace = new google.maps.LatLng(mylatlng.lat,mylatlng.lng); 
                
                	var distance = google.maps.geometry.spherical.computeDistanceBetween(myhplace, TOKYOTOWER);
                    var direct =  google.maps.geometry.spherical.computeHeading(myhplace, TOKYOTOWER);
                
                //console.log("x:"+(0-distance * Math.sin(direct)));
                console.log("direct:"+direct);
                console.log('defort:'+((360+direct)%360));
                
            consoleDiv2.innerHTML = "direct:"+direct+'<br>'+'defort:'+((360+direct)%360)+'<br>'+'distance:'+distance+"m";
                
                var x=0-distance * Math.sin(direct);
                var y=distance * Math.cos(direct);
                /*if(Math.abs(y)>5000){
                    if(y<0){
                        y=-5000;
                    }else{
                        y=5000;
                    }
                if(Math.abs(distance)>5000){
                        distance = 5000;
                }
                
                var tokyotower = document.querySelector('#tokyotowerModel');
                var base = document.querySelector('#tokyotowerBase');
                var arrowfoot = document.querySelector('#arrowfoot');
                //tokyotower.setAttribute('position',{x:x,y:0,z:y});
                tokyotower.setAttribute('position',{x:0,y:0,z:-distance});
                base.setAttribute('rotation',{x:0,y:-direct,z:0});
                arrowfoot.setAttribute('rotation',{x:0,y:-direct,z:0});
                //mainCam.components['look-controls'].yawObject.rotation.y=0-(((360+direct)%360) * Math.PI / 180);
            } , function(e){
                
			// エラーコード(error.code)の番号
			// 0:UNKNOWN_ERROR				原因不明のエラー
			// 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
			// 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
			// 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

			// エラー番号に対応したメッセージ
			var errorInfo = [
				"原因不明のエラーが発生しました…。" ,
				"位置情報の取得が許可されませんでした…。" ,
				"電波状況などで位置情報が取得できませんでした…。" ,
				"位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
			] ;

			// エラー番号
			var errorNo = error.code ;

			// エラーメッセージ
			var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[ errorNo ] ;


			// HTMLに書き出し
                consoleDiv2.innerHTML =errorMessage;
            } , {
                enableHighAccuracy:true,
                timeout:10000,
                maximumAge:1000
            } ) ;
        }*/
    
    
    mainCam = document.querySelector('#basecam');
    mainCam.addEventListener('loaded',function(ev){
        });

});