var theMap = L.map('map').setView([55.95206, -3.19648], 9);

var dark  = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
    dark.addTo(theMap);


 /*var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		{attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
		)
		//osm.addTo(theMap);*/


//googleStreets.addTo(theMap);
var myIcon = L.icon({
    iconUrl: 'scotland.png',
    iconSize: [40, 40],

});


var Edinburgh = L.marker([55.95206, -3.19648],{
    title: 'Welcome to Edinburgh',
        opacity: 1,
		icon:myIcon,
   }) .addTo(theMap)

   .bindPopup('<h2>Welcome to Edinburgh</h2><img width="200" height="200"img src ="edinburgh.jpg">'

 );
