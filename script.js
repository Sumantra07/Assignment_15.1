/* This is the main script file. We have used Github to host the json file. However for reference the same
is attached with project as well.

PLEASE DO READ THE Readme.txt file before Evaluating.
*/

// Registering the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
// Handle network changes  - offline and online changes
function updateOnlineStatus ()
{
  var condition = navigator.onLine ? "Live" : "Currently offline";
  var indicator = document.querySelector('.offlineIndicator');
  var cardTitle = document.querySelector('.card-title');

   if (condition === "Currently offline")
   {

      indicator.style.display = "block";
      document.getElementById("overlay").style.display = "block";
    }
    else {
        indicator.style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
}

window.addEventListener('load', updateOnlineStatus);




// Fetching details from external link
var url = "https://my-json-server.typicode.com/Sumantra07/TestDataRepository/details" ;
fetch(url)
.then(function (response) {

  return response.json();
})
.then(function (detailsJson) {
  renderData(detailsJson);
})
.catch(function (err) {
  console.log(err);
});
// get the result from localhost
 var renderData = function (detailjson) {
  // Main text - Flight details
  var Flight1Title = document.querySelector('#flight1details');
  var Flight2Title = document.querySelector('#flight2details');
  var Flight3Title = document.querySelector('#flight3details');
  var Flight4Title = document.querySelector('#flight4details');
  var Flight5Title = document.querySelector('#flight5details');
  var Flight6Title = document.querySelector('#flight6details');

  var FlightDetailarr = [Flight1Title,Flight2Title,Flight3Title,Flight4Title,Flight5Title,Flight6Title];
  // Fill in data from the json
  for (var i in FlightDetailarr )
  {
    FlightDetailarr[i].innerHTML = detailjson[i].Departure + " to " + detailjson[i].destination ;
    i++;
  }


  // Time details
  flight1time
  var Flight1Time = document.querySelector('#flight1time');
  var Flight2Time = document.querySelector('#flight2time');
  var Flight3Time = document.querySelector('#flight3time');
  var Flight4Time = document.querySelector('#flight4time');
  var Flight5Time = document.querySelector('#flight5time');
  var Flight6Time = document.querySelector('#flight6time');

  var FlightTimearr = [Flight1Time,Flight2Time,Flight3Time,Flight4Time,Flight5Time,Flight6Time];
  // Fill in data from the json
  for (var i in FlightTimearr )
  {
    FlightTimearr[i].innerHTML = detailjson[i].TimeofDeparture ;
    i++;
  }

  // Status details
  flight6status
  var Flight1Status = document.querySelector('#flight1status');
  var Flight2Status = document.querySelector('#flight2status');
  var Flight3Status = document.querySelector('#flight3status');
  var Flight4Status = document.querySelector('#flight4status');
  var Flight5Status = document.querySelector('#flight5status');
  var Flight6Status = document.querySelector('#flight6status');

  var FlightStatusarr = [Flight1Status,Flight2Status,Flight3Status,Flight4Status,Flight5Status,Flight6Status];
  // Fill in data from the json
  for (var i in FlightStatusarr )
  {
    FlightStatusarr[i].innerHTML = detailjson[i].Status ;
    i++;
  }






}
