// ============================================= FAVORITES Page Button Generation =================================================
var buttons = function () {
    $(".buttons").empty();
    var favoriteList = JSON.parse(localStorage.getItem('Favorited'));
    console.log(favoriteList);
    for (var term of favoriteList) {
        var buttonFave = $("<button class='faveSearch'>");
        buttonFave.text(term);
        buttonFave.attr("data-search", term).attr('data-index');
        buttonFave.css("display", "inline-block")
        $("#favoriteCharities").append(buttonFave);
    }
}

setTimeout(function () {
    buttons();
}, 1000)


// ============================================= Favoites Page Button listening =================================================
// THIS LISTENER HELPS REMOVE FAVORITE BUTTON
$(".favortiesPageResults").on("click", ".nofavebtn", function () {
    var favoriteList = JSON.parse(localStorage.getItem('Favorited'));
    $(this).css("background-color", "");
    $(this).css("color", "");
    $(this).css("border", "");
    $(this).css("padding", "");
    $(this).text("Add to Favorites");

    
    var searchedItem = $(this).attr("data-search");
    removeFave(searchedItem);
    favorited = false;
});

// TO SHOW RESULTS
$("#favoriteCharities").on("click", ".faveSearch", function (event) {
    event.preventDefault();
    $(".favortiesPageResults").empty();

    var searchTerm = $(this).attr("data-search");
    var foundArtist = compareObject(artists, searchTerm);
    var foundActor = compareObject(actors, searchTerm);
    var foundAtheletes = compareObject(athletes, searchTerm);
    var myObj;

    if (foundArtist !== null) {
        myObj = foundArtist
    }

    if (foundActor !== null) {
        myObj = foundActor
    }

    if (foundAtheletes !== null) {
        myObj = foundAtheletes
    }
    if (Object.keys(myObj).length) {
        $("#resultsText").empty();
        $("#celebphoto").empty();
        $(".searchResultsDiv").show();

        // Creates Images from Celeb Object and Appends to Search Results Div
        var faveButton = $("<button>");
        faveButton.addClass("favebtn");
        faveButton.text("Favorited");


        var img = $("<img>");
        img.addClass("searchResultPhotos");
        imgsrc = myObj.img;
        img.attr("src", imgsrc);
        var queryURL = myObj.queryURL;
        $("#celebphoto").append(img)

        console.log(img, "image")

        //API CALLS FOR CELEBRITY BUTTONS   

        // @ARI When you make this generate dyanmically
        // ---- need id to be a class and "id" attr of the entire div
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            $("#celebphoto").empty();
            var chartName = response[0].charityName;
            var tagline = response[0].tagLine;
            var purpose = response[0].cause.causeName;
            var mission = response[0].mission;
            var site = response[0].websiteURL;
            var id = response[0].organization.ein;
            $("#resultsText").append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
                "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>" + mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>" + site);
            $("#celebphoto").append(img);
            $("#celebphoto").append(faveButton);
        });

    } else {
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

    }

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
        "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>" + mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>" + site + "<br>" + "<br>");
    $(textDiv).css("padding", "30px 30px")
    $(".favortiesPageResults").append(newDiv);
}

function compareObject(array, searchTerm) {
    for (var item of array) {
        if (item.name === searchTerm) {
            return item;
        }
    }
};