$("#search").click(function() {
  $("#load").empty();
  initMap();
});

$(".close").click(function() {
  $('figure').fadeOut();
});

// Makes google maps, but doesn't show it. Need it to collect data
function initMap() {
  console.log("c");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      findThem(geolocation);
    });
  }

}

// Searches for activities near the place the user enters
function findThem(geolocation) {
  console.log("e");
  var service = new google.maps.places.PlacesService(document.createElement('div'));
  var searchFor = ['bar'];
  for (sf in searchFor) {
    service.nearbySearch({
      location: geolocation,
      radius: 5000,
      type: [searchFor[sf]]
    }, callback);
  }
  console.log("f");
}

//Gets results
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(results);
    for(x = 0; x < 10; x++) {
      console.log(results[x].name);
      $("#load").append($("<li>" + results[x].name + "</li>"))
    }
    $("figure").fadeIn();
  }
}
