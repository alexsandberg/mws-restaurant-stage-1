/* INSTRUCTIONS
 * 1. replace <YOUR_KEY> with your Google Maps API Key
 * 2. move this file to the root directory of your project
 */
 
var config = {
	API_KEY : '<YOUR_KEY>'
}

var el = document.createElement('script');
el.async = true;
el.defer = true;
el.src = `https://maps.googleapis.com/maps/api/js?key=${config.API_KEY}&libraries=places&callback=initMap`;
document.body.appendChild(el); 