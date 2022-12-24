navigator.geolocation.getCurrentPosition(function (obj) {
    // console.log(obj.coords.latitude);
    // console.log(obj.coords.longitude);
    initMap(obj.coords.latitude, obj.coords.longitude);

}, function () {
    alert("try again")

})

function initMap(x, y) {

    const myLatLng = { lat: x, lng: y };
console.log(myLatLng )
    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 5,
            center: myLatLng,
        }
    );

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}
var select = document.getElementsByTagName("select")[0];
select.addEventListener("change",function(){
    if(select.value === "UK"){
        initMap(53.5500, 2.4333);
    }
    else if(select.value === "Egypt"){
        initMap(30.033333, 31.233334);
    }
    else if(select.value === "korea"){
        initMap(35.8615, 127.0964);
    }
})