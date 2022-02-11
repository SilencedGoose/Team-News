import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapHandler() {
	function loadMap() {
		var map = L.map('map').setView([51.505, -0.09], 13);
		
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiYW5pbWF0b3JvZnNvdWxzIiwiYSI6ImNreml0eXNtMTFvYWwycW5yY2VhaHI2MDAifQ.ZSNNSGLF4DixEuS3RrLtHQ'
		}).addTo(map);
	}
	return (
		<div>
			<button onClick={loadMap}>Load Map</button>
			
			<div id="map" onload="alert('egg')"></div>
		</div>
	)
}
