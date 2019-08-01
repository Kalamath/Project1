$(document).ready(function(){
  initAutocomplete()
  function initAutocomplete() {

    getCoords().then(function(data){
      
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: data.latitude, lng: data.longitude},
        zoom: 13,
        mapTypeId: 'roadmap'
      });
      var marker = new google.maps.Marker({
        position: {lat: data.latitude, lng: data.longitude},
        map: map,
        title: 'Hello World!'
      });
     locationRequest(data.latitude, data.longitude).then(function(results){
       console.log(results)
       var charityLocation = results
       for (var i =0; i<charityLocation.results.length; i++){
         console.log(charityLocation.results[i].geometry.location)
         var marker = new google.maps.Marker({
          position: charityLocation.results[i].geometry.location, 
          map: map,
          title: 'Hello World!'
        });
       }
       
     });
      // var request = {
      //   query: 'school',
      //   fields: ['name', 'geometry'],
      // };

      // var service = new google.maps.places.PlacesService(map);

      // service.findPlaceFromQuery(request, function(results, status) {
      //   console.log(results);
      //   if (status === google.maps.places.PlacesServiceStatus.OK) {
      //     for (var i = 0; i < results.length; i++) {
      //       createMarker(results[i]);
      //     }

      //     map.setCenter(results[0].geometry.location);
      //   }
      // });

    });

  }

    function createMarker(place) {
      
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     position: place.geometry.location
    //   });

    //   google.maps.event.addListener(marker, 'click', function() {
    //     infowindow.setContent(place.name);
    //     infowindow.open(map, this);
    //   });

    //  var service=new google.maps.places.PlacesService(map);
    //  service.findPlaceFromQuery(request, function(results, status) {
  
    //   if (status === google.maps.places.PlacesServiceStatus.OK) {
    //     console.log(results);
        
    //   }
      
    // })  

    //   console.log(data); 
      
    // })

    
 
  }

  function getCoords(){
    return new Promise(function (resolve , reject ){

      if (navigator.geolocation) {
      
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position)
          var latitude = position.coords.latitude
          var longitude = position.coords.longitude

          resolve({
            latitude: latitude,
            longitude: longitude, 
          })
  
        });
      } else {
        reject("does not work")
      }
    })
      
  }

  function locationRequest(lat,lng) {
    
    return $.ajax({
      type: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=charities&location="+ lat +","+ lng +"&key=AIzaSyCfCbQMtphVTJZPsHwJfmHVYIgcWCpITKk",

     
      
    
    });

  }


}); 

