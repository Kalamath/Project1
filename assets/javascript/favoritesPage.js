// ============================================= FAVORITES Page Button Generation =================================================
// getting list items (array from)
// var favoritedSearchTearms = JSON.parse(localStorage.getItem("Favorited"));
var favoritedSearchTearms = ["usher", "cancer"]

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
$("#favoriteCharities").on("click", ".faveSearch", function (event) {
    event.preventDefault();
    $(".favortiesPageResults").empty();

    var search = $(this).attr("data-name");
    var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=37bca05d&app_key=41fa3dccfcb5a6ae31cba2a08192de93&pageSize=5&search=" + search + "&rated=true"; var newH1 = $("<h1>");
    newH1.text("Most Popular Charities");
    newH1.addClass("causeH1");
    $(".searchResultsDiv").append(newH1);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#celebphoto").empty();
        $("#resultsText").empty();
        for (var i = 0; i < response.length; i++) {
            FaveResults(response, i);
        }
    });
});

function FaveResults(response, i) {
    var newDiv = $("<div>")
    var textDiv = $("<div>")
    $(newDiv).append(textDiv);
    var chartName = response[i].charityName;
    var tagline = response[i].tagLine;
    var site = response[i].websiteURL;
    var purpose = response[i].cause.causeName;
    var mission = response[i].mission;
    $(textDiv).append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
    "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>"+ mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>" + site + "<br>"+ "<br>" );
    $(textDiv).css("padding", "30px 30px")
    $(".favortiesPageResults").append(newDiv);
}