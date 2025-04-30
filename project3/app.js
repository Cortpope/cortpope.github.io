var main = function() {
    var player = $('#player')[0]; // Access the audio element
    var message = $('#message');  // Access the message bar

    // Play button
    $('#play').click(function() {
        player.play();
        message.text("Playing...");
    });

    // Pause button
    $('#pause').click(function() {
        player.pause();
        message.text("Track stopped");
    });

    // Stop button
    $('#stop').click(function() {
        player.pause();
        player.currentTime = 0;
        message.text("Stopped");
    });

    // Mute button
    $('#mute').click(function() {
        player.muted = true;
        message.text("Muted");
    });

    // Unmute button
    $('#unmute').click(function() {
        player.muted = false;
        message.text("Unmuted");
    });

    // Volume Up
    $('#volUp').click(function() {
        if (player.volume < 1) {
            player.volume = Math.min(1, player.volume + 0.1);
            message.text("Volume: " + Math.round(player.volume * 100) + "%");
        }
    });

    // Volume Down
    $('#volDown').click(function() {
        if (player.volume > 0) {
            player.volume = Math.max(0, player.volume - 0.1);
            message.text("Volume: " + Math.round(player.volume * 100) + "%");
        }
    });
};

$(document).ready(main);
