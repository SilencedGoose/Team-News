import React, { FC, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";

let users: user[] = [
  { name: "Shouta", location: [42.546, 1.601] },
  { name: "Hitoshi", location: [12.444, 1.2] },
];

let MapHandler: FC = () => {
  useEffect(() => {
    //load map
    var map = L.map("map", { scrollWheelZoom: false }).setView([15, 0], 2);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        minZoom: 1,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiYW5pbWF0b3JvZnNvdWxzIiwiYSI6ImNreml0eXNtMTFvYWwycW5yY2VhaHI2MDAifQ.ZSNNSGLF4DixEuS3RrLtHQ",
      }
    ).addTo(map);

    for (let user of users) {
      addMarker(map, user.location, user.name);
    }
  }, []);

  function showNews() {
    alert("ALERT!");
  }

  function addMarker(map: L.Map, location: L.LatLngExpression, name: string) {
    var marker = L.marker(location).addTo(map);
    marker.bindPopup(
      "<b>" + name + "</b><br><button onClick={showNews()}>View news</button>"
    );
  }

  return (
    <div id="mapDiv">
      <div id="map"></div>
    </div>
  );
};

export default MapHandler;
