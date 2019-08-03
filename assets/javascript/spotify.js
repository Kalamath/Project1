function playSong() {

    var accessToken = localStorage.getItem("token");

    var data = {
        uris: ["spotify:track:48RN2EOOyG2Gs5Pyla7ZJj", "spotify:track:7pu8AhGUxHZSCWTkQ2eb5M", "spotify:track:1yo16b3u0lptm6Cs7lx4AD", "spotify:track:1yo16b3u0lptm6Cs7lx4AD"]

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
