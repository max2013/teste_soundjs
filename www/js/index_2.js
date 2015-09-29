document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

function playMP3() {
    var mp3URL = getMediaURL("_assets/audio/Game-Shot.mp3");
    var media = new Media(mp3URL, null, mediaError);
    media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}