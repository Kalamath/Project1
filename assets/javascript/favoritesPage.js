// ============================================= FAVORITES Page Button Generation =================================================
// getting list items (array from)
var favoritedSearchTearms = JSON.parse(localStorage.getItem("Favorited"));

var buttons = function () {
    $(".buttons").empty();
    for (var term of favoritedSearchTearms) {
        var buttonFave = $("<button class='faveSearch'>");
        buttonFave.text(term);
        buttonFave.attr("data-search", "term");
        buttonFave.css("display", "inline-block")
        $("#favoriteCharities").append(buttonFave);
    }
}
buttons();

// ============================================= Favoites Page Button listening =================================================
// THIS LISTENER HELPS REMOVE FAVORITE BUTTON
$(".favortiesPageResults").on("click", ".nofavebtn", function () {
    $(this).css("background-color", "");
        $(this).css("color", "");
        $(this).css("border", "");
        $(this).css("padding", "");
        $(this).text("Add to Favorites");

    if (favoriteList.includes($(this).attr("id"))) {
        var DI = $(this).attr("data-index");
        removeFave(DI);
    }

    console.log("from Fave:" + favoriteList)
});

// TO SHOW RESULTS
$("#favoriteCharities").on("click", ".faveSearch" ,function (event) {
        event.preventDefault();
        $(".searchResultsDiv").show();
        var userLocation = "";//ASHTON PUT THIS HERE :)
        var search = $(this).attr("data-name");
        var querlyURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=37bca05d&app_key=41fa3dccfcb5a6ae31cba2a08192de93&pageSize=5&search=" + search + "&rated=true&state=" + userLocation;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#celebphoto").empty();
            $("#resultsText").empty();

            for (var i = 0; i < response.length; i++) {
                getCauseResults(response);
            }

        });

    });
