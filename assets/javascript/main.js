var actors = [];
var athletes = [];
var artists = [];
// getting list items (array from)
var favoriteList = [];
console.log("Initial: " + favoriteList)


$(document).ready(function () {


    resultsDiv()

    function resultsDiv() {
        $(".searchResultsDiv").hide();

    }

    //Artists Array
    artists = [
        {
            name: "Usher",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Boys%20and%20Girls%20Club%20of%20America&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/usher.jpg",
        },

        {
            name: "Imagine Dragons",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&search=The%20Trevor%20Project&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/imagine.jpg",
        },

        {
            name: "Billie Eilish",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Oxfam%20America&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/billie.jpg",
        },

        {
            name: "Shawn Mendes",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=American%20Red%20Cross&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/shawn.jpg",
        },

    ]

    // Function to Generate Artists Buttons
    function getArtists() {

        $("#artist").empty();

        var newH1 = $("<h1>");
        newH1.addClass("suggestTitle");
        newH1.text("Popular Artists");
        $("#artist").append(newH1);

        for (var i = 0; i < artists.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("celebBtn");
            newButton.attr("data-name", artists[i].name).attr('data-index', i);
            newButton.attr("img-src", artists[i].img);
            newButton.attr("query-link", artists[i].queryURL)
            newButton.text(artists[i].name);
            $("#artist").append(newButton);
        }

    }

    getArtists();


    //Actors Array

    actors = [
        {
            name: "Michael B. Jordan",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Feeding%20America&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/michael.jpg",
        },
        {
            name: "Lili Reinhart",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=American%20Cancer%20Society&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/lili.jpg",
        },
        {
            name: "Timothée Chalamet",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Rape%2C%20Abuse%20%26%20Incest%20National%20Network&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/timothee.jpg",
        },
        {
            name: "Jesse Williams ",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Advancement%20Project&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/jesse.jpg",
        },
    ]


    function getActors() {

        $("#actorsActress").empty();

        var newH1 = $("<h1>");
        newH1.addClass("suggestTitle");
        newH1.text("Popular Actors");
        $("#actorsActress").append(newH1);

        for (var i = 0; i < actors.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("celebBtn");
            newButton.attr("data-name", actors[i].name).attr('data-index', i);
            newButton.attr("img-src", actors[i].img);
            newButton.attr("query-link", actors[i].queryURL)
            newButton.text(actors[i].name);
            $("#actorsActress").append(newButton);
        }

    }

    getActors();

    athletes = [
        {
            name: "Michael Phelps",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Special%20Olympics&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/phelps.jpg",
        },
        {
            name: "Megan Rapinoe",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=American%20Civil%20Liberties%20Union%20Foundation&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/rapinoe.png",
        },
        {
            name: "Lebron James",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=After-School%20All-Stars&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/lebron.jpg",
        },
        {
            name: "Serena Williams",
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=UNICEF%20USA&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/serena.jpg",
        },
    ]

    function getAthletes() {

        $("#athletes").empty();

        var newH1 = $("<h1>");
        newH1.addClass("suggestTitle");
        newH1.text("Popular Artists");
        $("#athletes").append(newH1);

        for (var i = 0; i < athletes.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("celebBtn");
            newButton.attr("data-name", athletes[i].name).attr('data-index', i);
            newButton.attr("img-src", athletes[i].img);
            newButton.attr("query-link", athletes[i].queryURL)
            newButton.text(athletes[i].name);
            $("#athletes").append(newButton);
        }

    }

    getAthletes();

    function fave() {
        var faveButton = $("<button>");
        faveButton.addClass("favebtn");
        faveButton.text("Add to Favorites");
        
    }

    $(".celebBtn").on("click", function (results) {
        event.preventDefault();
        var btnVal = $(this).attr("data-name");
        $("#celeb").show();
        $("#resultsText").empty();
        $("#celebphoto").empty();
        $(".causeResults").remove();
        var faveButton = $("<button>");
        faveButton.addClass("favebtn");
        faveButton.text("Add to Favorites");

        // Creates Images from Celeb Object and Appends to Search Results Div
        var img = $("<img>");
        img.addClass("searchResultPhotos");
        imgsrc = $(this).attr("img-src");
        img.attr("src", imgsrc);
        var queryURL = $(this).attr("query-link");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var chartName = response[0].charityName;
            var tagline = response[0].tagLine;
            var purpose = response[0].cause.causeName;
            var mission = response[0].mission;
            var site = response[0].websiteURL;
            $("#resultsText").append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
                "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>" + mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>" + site);
            $("#celebphoto").append(img);
            $("#celebphoto").append(faveButton);
            $(".searchResultsDiv").addClass(btnVal);
            $(".searchResultsDiv").attr("id", btnVal);
            faveButton.attr("search-term", btnVal);
        });

        // check to see if it was already favorited
        if (JSON.parse(localStorage.getItem('Favorited')) !== null) {
            var favoriteList = JSON.parse(localStorage.getItem('Favorited'));
            if (favoriteList.includes(btnVal)) {
                $(faveButton).css("background-color", "#fff200b7");
                $(faveButton).css("color", "rgb(94, 94, 94)");
                $(faveButton).css("border", "2px solid rgb(94, 94, 94)");
                $(faveButton).text("Favorited");
            }
        }
    });


    //Button creation for Causes
    var causes = ["Immigration", "Women's Rights", "Foster Families", "LGBTQIA", "Civil Rights", "Animals", "Environment", "International", "Community Developement", "Public Policy", "Gun Safety"]

    function getCauses() {
        $("#causebtns").empty();
        for (var i = 0; i < causes.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("searchBtn");
            newButton.attr("data-name", causes[i]);
            newButton.text(causes[i]);
            newButton.on("click", handleSearch);
            $("#causebtns").append(newButton);
        }
    }

    //Adding Buttons from Search Bar
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();
        var newCause = $("#search-input").val().trim();
        causes.push(newCause);
        getCauses();
    });

    getCauses();
    function getCauseResults(response, i) {
        var newDiv = $("<div>")
        newDiv.addClass("causeResults")
        var textDiv = $("<div id='resultsText'>")
        $(newDiv).append(textDiv);
        var chartName = response[i].charityName;
        var tagline = response[i].tagLine;
        var site = response[i].websiteURL;
        var purpose = response[i].cause.causeName;
        var mission = response[i].mission;
        $(textDiv).append("<span class='searchItemTitle'>Charity Name: </span>" + chartName + "<br>" + "<span class='searchItemTitle'>Charity Tagline: </span>" + tagline +
            "<br>" + "<span class='searchItemTitle'>Charity Purpose: </span>" + purpose + "<br>" + "<span class='searchItemTitle'>Mission Statement: </span>" + mission + "<br>" + "<span class='searchItemTitle'>Get Involved: </span>" + site + "<br>" + "<br>");
        $(".searchResultsDiv").append(newDiv);
    }



    function handleSearch(event) {
        console.log(this, "this is");
        event.preventDefault();
        $("#celebphoto").empty();
        $("#resultsText").empty();
        $(".searchResultsDiv").empty();
        $("#search").show();
        var search = $(this).attr("data-name");
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=37bca05d&app_key=41fa3dccfcb5a6ae31cba2a08192de93&pageSize=5&search=" + search + "&rated=true"; var newH1 = $("<h1>");
        newH1.text("Most Popular Charities");
        newH1.addClass("causeH1")

        var searchCharity = $(this).attr("data-name");
        var faveBtnResults = $("<button>");
        faveBtnResults.addClass("favebtn");
        faveBtnResults.attr("search-term", searchCharity)
        faveBtnResults.text("Add to Favorites");
        $("#search").append(newH1).append(faveBtnResults);


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                getCauseResults(response, i);
            }

        });
    }


});
