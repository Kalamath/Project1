
$(document).ready(function(){

resultsDiv();

function resultsDiv() {
    $("#results").hide();

}


//Artists Array
    var artists = [
        {   name: "Usher",
            
            queryURL: "https://api.data.charitynavigator.org/v2/Organizations?app_id=270bf11f&app_key=6fbc2df180aae26a94dfe40a27140c98&pageSize=5&pageNum=5&search=Boys%20and%20Girls%20Club%20of%20America&searchType=NAME_ONLY&rated=true",
            // img: url("..images/usher.jpg"),
    
          },

        {   name: "Jennifer Lopez",
    
    
    
        },

        {   name: "Beyoncè",
    
    
    
        },
        {   name: "Elton John",
    
    
    
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
              newButton.text(artists[i].name);
              $("#artist").append(newButton);
        }

    }

    getArtists();


//API CALLS FOR CELEBRITY BUTTONS

$(".celebBtn").on("click", function() {

    $(".searchResultsDiv").show();

    var queryURL= this.queryURL;

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
      var results = response.data
        var chartName = results.charityName;
        var tagline = results.tagLine;
        var cause = results.cause.caseName;

        console.log(chartyName)
        $("#resultsText").text(chartsName + tagline+ cause)
        $("#celebphot").append(this.artists.photo)
    });

    });

});