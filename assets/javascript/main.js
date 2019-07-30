$(document).ready(function () {
 
  
    resultsDiv()

    function resultsDiv() {
        $("#results").hide();

    }

    //Artists Array
    var artists = [
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
            newButton.attr("data-name", artists[i].name);
            newButton.attr("img-src", artists[i].img);
            newButton.attr("query-link", artists[i].queryURL)
            newButton.text(artists[i].name);
            $("#artist").append(newButton);
        }

    }

    getArtists();


    //Actors Array

    var actors = [
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
            newButton.attr("data-name", actors[i].name);
            newButton.attr("img-src", actors[i].img);
            newButton.attr("query-link", actors[i].queryURL)
            newButton.text(actors[i].name);
            $("#actorsActress").append(newButton);
        }

    }

    getActors();

    var athletes = [
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
            newButton.attr("data-name", athletes[i].name);
            newButton.attr("img-src", athletes[i].img);
            newButton.attr("query-link", athletes[i].queryURL)
            newButton.text(athletes[i].name);
            $("#athletes").append(newButton);
        }

    }

    getAthletes();

    $(".celebBtn").on("click", function (results) {
        event.preventDefault();
        $("#resultsText").empty();
        $("#celebphoto").empty();
        $(".searchResultsDiv").show();
        // $("#celebphoto").append(loading)

        // Creates Images from Celeb Object and Appends to Search Results Div
        var faveButton = $("<button>");
        faveButton.addClass("favebtn");
        faveButton.text("Add to Favorites");
       

        var img = $("<img>");
        img.addClass("searchResultPhotos");
        imgsrc = $(this).attr("img-src");
        img.attr("src", imgsrc);
        var queryURL = $(this).attr("query-link");
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
            faveButton.attr("id", id)
            // need this push id into array to track what is favorited
            favoriteList.push(id)
        });

    });


    //Button creation for Causes
    var causes = ["Immigration", "Women's Rights", "Foster Families", "LGBTQIA", "Civil Rights", "Animals", "Environment", "International", "Community Developement", "Public Policy", "Gun Safety"]

    function getCauses() {
        $("#causebtns").empty();
        for (var i = 0; i < causes.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("searchBtn");
            newButton.attr("data-name", causes[i]);
            // newButton.attr("query-link", causes[i])
            newButton.text(causes[i]);
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

    var userLocation = "" ;//ASHTON PUT THIS HERE :)
    var search = "";

    // ============================================= FAVORITES BUTTON =================================================

      // Click to add to favorites
      var favoriteList = [];

      $(".searchResultsDiv").on("click", ".favebtn", function () {
          if (favoriteList.includes($(this).attr("id"))) {
              $(this).css("background-color", "");
              $(this).css("color", "");
              $(this).css("border", "");
              $(this).css("padding", "");
  
              // HOW TO DETACH A DIV FROM ANOTHER AREA?
              var ID = $(this).attr("id");
              var deletingDiv = $("." + ID)
  
              // we are filtering our elements that share the same class (BY ID) 
              // within the filter we must return true for our filtering mechanism to work and it returns as an array
              var myItem = deletingDiv.filter(function (index, item) {
  
                  return $(item).hasClass("clone")
              })
  
              $(myItem[0]).remove();
  
              var index = $(myItem[0]).attr("data-index");
              removeFave(index);
  
          } else {
              $(this).css("background-color", "#AA1911");
              $(this).css("color", "white");
              $(this).css("border", "2px solid #d49f4f");
              $(this).css("padding", "3px 13px 3px 13px");
             
              favoriteList.push($(this).attr("id"))
              favorited = true;
             
              var dataIndex = favoriteList.length ? favoriteList.length - 1 : 0;
  
              // adding giv to favorites (div is being cloned and moved)
              var faveDiv = $("div[id=" + ($(this).attr("id")) + "]").attr("data-index", dataIndex);
              faveDiv.clone().detach().addClass("clone").appendTo(".favoriteGallery");
  
          }
  
          console.log("from results:" + favoriteList)
      });
  
  
  
      $(".favoriteGallery").on("click", ".favorite", function () {
          var faveDiv = $("div[id=" + ($(this).attr("id")) + "]");
  
          $(this).css("background-color", "");
          $(this).css("color", "");
          $(this).css("border", "");
          $(this).css("padding", "");
          $(faveDiv).remove()
  
          if (favoriteList.includes($(this).attr("id"))) {
              // HOW TO DETACH A DIV FROM ANOTHER AREA?
              var ID = $(this).attr("id");
              var deletingDiv = $("." + ID)
  
              // we are filtering our elements that share the same class (BY ID) 
              // within the filter we must return true for our filtering mechanism to work and it returns as an array
              var myItem = deletingDiv.filter(function (index, item) {
  
                  return $(item).hasClass("clone")
              })
  
              var index = $(myItem[0]).attr("data-index");
              removeFave(index);
          }
  
          console.log("from Fave:" + favoriteList)
      });
  
  
      // Click on favorites
      $(".searchFave").on("click", "#favoritebtn", function () {
          $(".results").hide();
          $("#resultTitle").hide();
          $(".buttons").hide();
          $(".favoriteGallery").show()
      });
  
      // Click on Search Results
      $(".searchFave").on("click", "#searchresultsbtn", function () {
          $(".results").show();
          $("#resultTitle").show();
          $(".buttons").show();
          $(".favoriteGallery").hide()
      });
  
      // Removing gif ID from from Array Function
      function removeFave(index) {
          console.log('index',index);
          favoriteList.splice(index, 1)
      }

 // Removing gif ID from from Array Function
 function removeFave(index) {
     console.log('index',index);
     favoriteList.splice(index, 1)
 }

      // ====================================END OF FAVE BUTTON CODE =============================
    function getCauseResults(response){
        var newDiv = $("<div>")
        newDev.addClass("resultDivs")
        var chartName = response[0].charityName;
        var tagline = response[0].tagLine;
        var site = response[0].websiteURL;
        var purpose = response[0].cause.causeName;
        var mission = response[0].mission;
        $(newDiv).append(chartName + tagline + site);
        $(".searchResultsDiv").append(newDiv);
    }

    $(".searchBtn").on("click", function (event){
        event.preventDefault();
        $(".searchResultsDiv").show();
        var userLocation = "" ;//ASHTON PUT THIS HERE :)
        var search = $(this).attr("data-name");   
        var  querlyURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=37bca05d&app_key=41fa3dccfcb5a6ae31cba2a08192de93&pageSize=5&search=" + search + "&rated=true&state=" + userLocation ;
       
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
   
});
