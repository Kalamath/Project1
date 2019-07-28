$(document).ready(function(){
  function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });
  
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
  
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
  
        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));
  
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }
});
  
  // var map, infoWindow;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 6
  //   });
  //   infoWindow = new google.maps.InfoWindow;
    
  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
        
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent('Location found.');
  //       infoWindow.open(map);
  //       map.setCenter(pos);
  //     }, function() {
  //       handleLocationError(true, infoWindow, map.getCenter());
  //     });
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }
  
  // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //     'Error: The Geolocation service failed.' :
  //     'Error: Your browser doesn\'t support geolocation.');
  //     infoWindow.open(map);
  //   }
    
  //   var input = document.getElementById('pac-input');
  //   var searchBox = new google.maps.places.SearchBox(input);
  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  
  //   // Bias the SearchBox results towards current map's viewport.
  //   map.addListener('bounds_changed', function() {
  //     searchBox.setBounds(map.getBounds());
  //   });

  //   var markers = [];
  //   // Listen for the event fired when the user selects a prediction and retrieve
  //   // more details for that place.
  //   searchBox.addListener('places_changed', function() {
  //     var places = searchBox.getPlaces();

  //     if (places.length == 0) {
  //       return;
  //     }

  //     // Clear out the old markers.
  //     markers.forEach(function(marker) {
  //       marker.setMap(null);
  //     });
  //     markers = [];

  //     // For each place, get the icon, name and location.
  //     var bounds = new google.maps.LatLngBounds();
  //     places.forEach(function(place) {
  //       if (!place.geometry) {
  //         console.log("Returned place contains no geometry");
  //         return;
  //       }
  //       var icon = {
  //         url: place.icon,
  //         size: new google.maps.Size(71, 71),
  //         origin: new google.maps.Point(0, 0),
  //         anchor: new google.maps.Point(17, 34),
  //         scaledSize: new google.maps.Size(25, 25)
  //       };

  //       // Create a marker for each place.
  //       markers.push(new google.maps.Marker({
  //         map: map,
  //         icon: icon,
  //         title: place.name,
  //         position: place.geometry.location
  //       }));

  //       if (place.geometry.viewport) {
  //         // Only geocodes have viewport.
  //         bounds.union(place.geometry.viewport);
  //       } else {
  //         bounds.extend(place.geometry.location);
  //       }
  //     });
  //     map.fitBounds(bounds);
  //   });
  // });
  -------------------------------------------------------------------
//     function displaySearchButton(){
//       $("#searchButton").empty(); // erasing anything in this div id so that it doesnt duplicate the results
//       {
//         var searchButton = $("<button>");
//         searchButton.addClass("search");
//         searchButton.addClass("btn btn-primary")
//         searchButton.attr("data-name", emotions[i]);
//         searchButton.text(emotions[i]);
//         $("#gifButtonsView").append(gifButton);
//     }
// };
// // Function to add a new emotion button
// function addNewButton(){
//     $("#addGif").on("click", function(){
//     var emotion = $("#emotion-input").val().trim();
//     if (emotion == ""){
//       return false; // added so user cannot add a blank button
//     }
//     emotions.push(emotion);

//     displayGifButtons();
//     return false;
//     });


// $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response) {




//       });

 