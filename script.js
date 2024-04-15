document.addEventListener("DOMContentLoaded", function() {
    var songTrigger = document.getElementById("songTrigger");
    var songPlayer = document.getElementById("songPlayer");

    songTrigger.addEventListener("click", function() {
        if (songPlayer.paused) {
            songPlayer.play();
        } else {
            songPlayer.pause();
        }
    });
});
