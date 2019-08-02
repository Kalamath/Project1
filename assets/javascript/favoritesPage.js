// ============================================= FAVORITES Page Button Generation =================================================
var buttons = function () {
    $("#favoriteCharities").empty();
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
}, 500)

// ============================================= Favoites Page Button listening =================================================
// THIS LISTENER HELPS REMOVE FAVORITE BUTTON
$(".favortiesPageResults").on("click", ".nofavebtn", function () {
    var favoriteList = JSON.parse(localStorage.getItem('Favorited'));
    $(this).css("background-color", "rgba(145, 156, 156, 0.411)");
    $(this).css("color", "white");
    $(this).css("border", "2px solid white");
    $(this).text("Add to Favorites");


    var favedItem = $(this).attr("data-faved");
    console.log(favedItem)
    removeFave(favedItem);
    favorited = false;
    buttons();
    $(".favortiesPageResults").empty();
});


// this function is to compare it in the arrays (actors, athletes, or artist) if they have the favorited item
function compareObject(array, saved) {
    for (var item of array) {
        if (item.name === saved) {
            return item;
        }
    }
};
// global variables of finding if Faved is in celebl array
var foundArtist;
var foundActor;
var foundAthletes;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++    TO SHOW RESULTS ON TO FAVORITES PAGE
$("#favoriteCharities").on("click", ".faveSearch", function (event) {
    $(".favortiesPageResults").empty();

    var searchTerm = $(this).attr("data-search");
    foundArtist = compareObject(artists, searchTerm)
    foundActor = compareObject(actors, searchTerm)
    foundAthletes = compareObject(athletes, searchTerm)
    console.log("artist", foundArtist)
    console.log("actor", foundActor)
    console.log("athlete", foundAthletes)

    if (foundAthletes !== undefined) {
        $(".favortiesPageResults").empty();

        // Creates Images from Celeb Object and Appends to Search Results Div
        var parentDiv = $("<div class='celebFaved'>")
        parentDiv.appendTo(".favortiesPageResults");
        var imgDiv = $("<div id='celebphoto'>")
        parentDiv.append(imgDiv)
        var textDiv = $("<div id='resultsText'>")
        parentDiv.append(textDiv)
        var faveButton = $("<button>");
        faveButton.addClass("nofavebtn");
        faveButton.attr("data-faved", $(this).attr("data-search"))
        faveButton.text("Favorited");


        var img = $("<img>");
        img.addClass("searchResultPhotos");
        imgsrc = foundAthletes.img;
        img.attr("src", imgsrc);
        var queryURL = foundAthletes.queryURL;

        //API CALLS FOR CELEBRITY BUTTONS   
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#celebphoto").empty();
            var chartName = response[0].charityName;
            var tagline = response[0].tagLine;
            var purpose = response[0].cause.causeName;
            var mission = response[0].mission;
            var site = response[0].websiteURL;
            var link = $("<a>");
            link.attr("href", site);
            link.text(site);
            $(textDiv).append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
            "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>"+ mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>");
            $(textDiv).append(link).append("<br>" + "<br>")
            $(imgDiv).append(img);
            $(imgDiv).append(faveButton);
        });
    } else if (foundActor !== undefined) {
        $(".favortiesPageResults").empty();

        // Creates Images from Celeb Object and Appends to Search Results Div
        var parentDiv = $("<div class='celebFaved'>")
        parentDiv.appendTo(".favortiesPageResults");
        var imgDiv = $("<div id='celebphoto'>")
        parentDiv.append(imgDiv)
        var textDiv = $("<div id='resultsText'>")
        parentDiv.append(textDiv)
        var faveButton = $("<button>");
        faveButton.addClass("nofavebtn");
        faveButton.attr("data-faved", $(this).attr("data-search"))
        faveButton.text("Favorited");


        var img = $("<img>");
        img.addClass("searchResultPhotos");
        imgsrc = foundActor.img;
        img.attr("src", imgsrc);
        var queryURL = foundActor.queryURL;

        //API CALLS FOR CELEBRITY BUTTONS   
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#celebphoto").empty();
            var chartName = response[0].charityName;
            var tagline = response[0].tagLine;
            var purpose = response[0].cause.causeName;
            var mission = response[0].mission;
            var site = response[0].websiteURL;
            var link = $("<a>");
            link.attr("href", site);
            link.text(site);
            $(textDiv).append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
            "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>"+ mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>");
            $(textDiv).append(link).append("<br>" + "<br>")
            $(imgDiv).append(img);
            $(imgDiv).append(faveButton);
        });
    } else if (foundArtist !== undefined) {
        $(".favortiesPageResults").empty();

        // Creates Images from Celeb Object and Appends to Search Results Div
        var parentDiv = $("<div class='celebFaved'>")
        parentDiv.appendTo(".favortiesPageResults");
        var imgDiv = $("<div id='celebphoto'>")
        parentDiv.append(imgDiv)
        var textDiv = $("<div id='resultsText'>")
        parentDiv.append(textDiv)
        var faveButton = $("<button>");
        faveButton.addClass("nofavebtn");
        faveButton.attr("data-faved", $(this).attr("data-search"))
        faveButton.text("Favorited");


        var img = $("<img>");
        img.addClass("searchResultPhotos");
        imgsrc = foundArtist.img;
        img.attr("src", imgsrc);
        var queryURL = foundArtist.queryURL;

        //API CALLS FOR CELEBRITY BUTTONS   
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#celebphoto").empty();
            var chartName = response[0].charityName;
            var tagline = response[0].tagLine;
            var purpose = response[0].cause.causeName;
            var mission = response[0].mission;
            var site = response[0].websiteURL;
            var link = $("<a>");
            link.attr("href", site);
            link.text(site);
            $(textDiv).append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
            "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>"+ mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>");
            $(textDiv).append(link).append("<br>" + "<br>")
            $(imgDiv).append(img);
            $(imgDiv).append(faveButton);
        });
    } else {
        var search = $(this).attr("data-search");
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=37bca05d&app_key=41fa3dccfcb5a6ae31cba2a08192de93&pageSize=5&search=" + search + "&rated=true"; var newH1 = $("<h1>");
        var newH1 = $("<h1>");
        newH1.text("Most Popular Charities");
        newH1.addClass("causeH1");
        $(".favortiesPageResults").append(newH1);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                var newDiv = $("<div>")
                var textDiv = $("<div>")
                var faveButton = $("<button data-faved=" + search + ">");
                faveButton.addClass("nofavebtn causefaved");
                faveButton.text("Favorited");
                newDiv.append(faveButton);
                newDiv.append(textDiv);
                var chartName = response[i].charityName;
                var tagline = response[i].tagLine;
                var site = response[i].websiteURL;
                var purpose = response[i].cause.causeName;
                var mission = response[i].mission;
                var link = $("<a>");
                link.attr("href", site);
                link.text(site);
                $(textDiv).append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
                "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>"+ mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>");
                $(textDiv).append(link).append("<br>" + "<br>")
                $(textDiv).css("padding", "30px 30px")
                $(".favortiesPageResults").append(newDiv);
            }
        });

    }

});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

