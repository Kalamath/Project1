// $(document).ready(function(){
//   initAutocomplete()
//   function initAutocomplete() {

    
    


//     getCoords().then(function(data){
//       var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: data.latitude, lng: data.longitude},
//         zoom: 13,
//         mapTypeId: 'roadmap'
//       });
    
//       var request = {
//         query: 'kfc',
//         fields: ['name', 'geometry'],
//       };
  
//      var service=new google.maps.places.PlacesService(map);
//      service.findPlaceFromQuery(request, function(results, status) {
  
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         console.log(results);
//       }})  
//       console.log(data); 
//     })
 
//   }

//   function getCoords(){
//     return new Promise(function (resolve , reject ){

//       if (navigator.geolocation) {
      
//         navigator.geolocation.getCurrentPosition(function(position){
//           console.log(position)
//           var latitude = position.coords.latitude
//           var longitude = position.coords.longitude

//           resolve({
//             latitude: latitude,
//             longitude: longitude, 
//           })
  
//         });
//       } else {
//         reject("does not work")
//       }

//     })
//   }

// });
 