import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapHandler() {
	function loadMap() {
		var map = L.map('map').setView([0, 0], 1);
		
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			minZoom: 1,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiYW5pbWF0b3JvZnNvdWxzIiwiYSI6ImNreml0eXNtMTFvYWwycW5yY2VhaHI2MDAifQ.ZSNNSGLF4DixEuS3RrLtHQ'
		}).addTo(map);
		
		
		let users = [
			["Shouta", [42.546, 1.601]],
			["Hitoshi", [12.444, 1.2]]
		]
		
		for (var i = 0; i < users.length; i++) {
			addMarker(map, users[i][1], users[i][0]);
		}
	}
	
	function showNews() {
		alert("ALERT!");
	}
	
	
	function addMarker(map, location, name) {
		var marker = L.marker(location).addTo(map);
		marker.bindPopup("<b>"+name+"</b><br><button onClick={showNews()}>View news</button>")
	}
	
	
	
	
	return (
		<div id="mapDiv">
			<button class="button" onClick={loadMap}>Load Map</button>
			<div id="map"></div>
		</div>
	)
}
