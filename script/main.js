var app;
var mylatlng={lat:0,lon:0,heading:0};
var tokyotowerLatLng = {lat:35.6585618,lng:139.7453056};
var mainCam={};



document.addEventListener('DOMContentLoaded',function(event){
    
    var consoleDiv = document.querySelector('#console');
    var consoleDiv2 = document.querySelector('#console2');
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
                }*/
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
                consoleDiv2.innerHTML ="取得失敗";
            } , {
                enableHighAccuracy:true,
                timeout:10000,
                maximumAge:1000
            } ) ;
        }
    
    
    mainCam = document.querySelector('#basecam');
    mainCam.addEventListener('loaded',function(ev){
        });

});