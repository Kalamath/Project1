$(document).ready(function(){
  initAutocomplete()
  function initAutocomplete() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position)
        var latitude = position.coords.latitude
        var longitude = position.coords.longitude

        console.log('should see first');
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: latitude, lng: longitude},
          zoom: 13,
          mapTypeId: 'roadmap'
        });
      
        var request = {
          query: 'Charities',
          fields: ['name', 'geometry'],
        };
    
       var service=new google.maps.places.PlacesService(map);
       service.findPlaceFromQuery(request, function(results, status) {
    
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
        }})
      });
    }
    console.log('should see second');
 

}
});
 