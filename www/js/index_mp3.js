function init () {

document.addEventListener('deviceready', onDeviceReady, false);



}

function onDeviceReady() {
    document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
    console.log("start");
};

function playMP3() {
    var mp3URL = getMediaURL("assets/teste.mp3");
    var media = new Media(mp3URL, null, mediaError);
    media.play();
    console.log("media play");
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}