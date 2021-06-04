///////////////////////////////////////////////////////////////////////////
// Geolocation
if (localStorage.getItem("loc")) {
    // json to object
    var loc = JSON.parse(localStorage.getItem("loc"));
    document.querySelector("#prevLoc").innerHTML = `${loc.state}`;
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        prevLoc.innerHTML = "Not Supported";
    }
};

function showPosition(position) {
    var apikey = 'd34fc6157e78478383c9c6795d3ca32d';
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
    var request_url = api_url +
        '?' +
        'key=' + apikey +
        '&q=' + encodeURIComponent(lat + ',' + lon) +
        '&pretty=1' +
        '&no_annotations=1' +
        '&language=id';
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        localStorage.setItem("loc", JSON.stringify({
            "state": data.results[0].components.state
          }));
    };
    request.send();
};

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("PERMISSION_DENIED");
            localStorage.setItem("loc", JSON.stringify({
                "state": 'Akses Lokasi Ditolak'
            }));
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("POSITION_UNAVAILABLE");
            localStorage.setItem("loc", JSON.stringify({
                "state": 'Lokasi Tidak Diketahui'
            }));
            break;
        case error.TIMEOUT:
            console.log("TIMEOUT");
            localStorage.setItem("loc", JSON.stringify({
                "state": 'Lokasi Timeout'
            }));
            break;
        case error.UNKNOWN_ERROR:
            console.log("UNKNOWN_ERROR");
            localStorage.setItem("loc", JSON.stringify({
                "state": 'Lokasi Error'
            }));
            break;
    }
};

function accessDenied() {
    localStorage.setItem("loc", JSON.stringify({
        "state": 'Lokasi Tidak Diketahui'
    }));
};
///////////////////////////////////////////////////////////////////////////