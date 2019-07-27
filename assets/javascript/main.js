
$(document).ready(function(){

resultsDiv();

function resultsDiv() {
    $("#results").hide();

}


//Artists Array
    var artists = [
        {   name: "Usher",
            
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=1&pageNum=1&search=Boys%20and%20Girls%20Club%20of%20America&searchType=NAME_ONLY&rated=true",
            img: "./assets/images/usher.jpg",
          },

        {   name: "Jennifer Lopez",
            queryURL: "",
        },

        {   name: "Beyoncè",
            queryURL: "",
        },
        {   name: "Elton John",
            queryURL: "",    
        },

    ]

    // Function to Generate Artists Buttons
    function getArtists() {

        $("#artist").empty();

        var newH1 = $("<h1>");
        newH1.addClass("suggestTitle");
        newH1.text("Top Searched Artists");
        $("#artist").append(newH1);
     
              for (var i = 0; i < artists.length; i++) {
              var newButton = $("<button>");
              newButton.addClass("celebBtn");
              newButton.attr("data-name", artists[i].name);
              newButton.attr("query-link", artists[i].queryURL)
              newButton.text(artists[i].name);
              $("#artist").append(newButton);
        }

    }

    getArtists();




$(".celebBtn").on("click", function(results) {
      event.preventDefault();
     $("#resultsText").empty();  
     $(".searchResultsDiv").show();
    
    // Creates Images from Celeb Object and Appends to Search Results Div
    var img = $("<img>");
    img.addClass("searchResultPhotos");
    img.attr("src", this, artists.img);
    var queryURL= $(this).attr("query-link");
    $("#celebphoto").append(img)
    console.log(img, "image")

 //API CALLS FOR CELEBRITY BUTTONS   
   $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

    console.log (response);
        var chartName = response[0].charityName;
        var tagline = response[0].tagLine;
        var purpose = response[0].cause.causeName;
        var mission= response[0].mission;
        var site = response[0].websiteURL;
        $("#resultsText").append("Charity Name: " + chartName +"<br>"+ "Charity Tagline: " + tagline + 
        "<br>" + "Charity Purpose: " + purpose + "<br>" + "Mission Statement: " + mission + "<br>" + "Get Involved: " + site);
     
    });

    });

});