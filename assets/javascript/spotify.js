
function playSong ( ) {
    var accessToken = localStorage.getItem("token");

    var data = {
        uris: ["spotify:track:7oqftogUN82Q7VNy2TmTJW"]
    }

    $.ajax({
        method: "PUT",
        url: " https://api.spotify.com/v1/me/player/play",
        headers: {
            "Authorization": "Bearer " + accessToken 
        }, 
        data: JSON.stringify(data),
        contentType: "application/json"
    })
}