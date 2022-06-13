mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5uZXJxdWF5ZSIsImEiOiJjbDN1OHN1NG4wZzZvM2ZuMHkyYzRybWY0In0.rfM8ZifOkxDoNJ3y39Q5HQ";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/annerquaye/cl4bntzbp000416my5pd9uy9l",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});


map.on("load", function () {
    map.addLayer(
        {
          id: "citi-bike-start-20",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/citiStartsGeo20.geojson",
          },
          'paint': {
            'circle-color': '#440381',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-opacity': 0.5,
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'tripCount'],
                0,
                '#C4D6B0',
                3500,
                '#FCDE9C',
                7000,
                '#BA5624',
                10500,
                '#845A6D',
                14000,
                '#381D2A'
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
        
        });


  mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5uZXJxdWF5ZSIsImEiOiJjbDN1OHN1NG4wZzZvM2ZuMHkyYzRybWY0In0.rfM8ZifOkxDoNJ3y39Q5HQ";
var map2 = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/annerquaye/cl4bntzbp000416my5pd9uy9l",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});

  map2.on("load", function () {
    map2.addLayer(
        {
          id: "citi-bike-stop-20",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/citiStopsGeo20.geojson",
          },
          paint: {
              'circle-color': '#EC368D',
              'circle-stroke-color': '#4d4d4d',
              'circle-stroke-width': 0.7,
              'circle-opacity': 0.7,
              'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'tripCount'],
                0,
                '#B0DAF1',
                3500,
                '#8D91C7',
                7000,
                '#6E75A8',
                10500,
                '#845A6D',
                14000,
                '#3E1929'
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
        
        });


  mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5uZXJxdWF5ZSIsImEiOiJjbDN1OHN1NG4wZzZvM2ZuMHkyYzRybWY0In0.rfM8ZifOkxDoNJ3y39Q5HQ";
var map3 = new mapboxgl.Map({
  container: "map3",
  style: "mapbox://styles/annerquaye/cl4bntzbp000416my5pd9uy9l",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});

  map3.on("load", function () {
    map3.addLayer(
        {
          id: "citi-bike-starts-21",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/citiGeoStarts21.geojson",
          },
          'paint': {
            'circle-color': '#440381',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.5,
            'circle-opacity': 0.5,
            'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'start_station_id'],
                0,
                '#C4D6B0',
                3500,
                '#FCDE9C',
                7000,
                '#BA5624',
                10500,
                '#845A6D',
                14000,
                '#381D2A'
                ],
            },
            minzoom: 3,
          },
          "settlement-minor-label"
        );
        
        });


  mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5uZXJxdWF5ZSIsImEiOiJjbDN1OHN1NG4wZzZvM2ZuMHkyYzRybWY0In0.rfM8ZifOkxDoNJ3y39Q5HQ";
var map4 = new mapboxgl.Map({
  container: "map4",
  style: "mapbox://styles/annerquaye/cl4bntzbp000416my5pd9uy9l",
  zoom: 2,
  maxZoom: 15,
  minZoom: 10.2,
  center: [-73.90,40.763],
});

map4.on("load", function () {
    map4.addLayer(
        {
          id: "citi-bike-stops-21",
          type: "circle",
          source: {
            type: "geojson",
            data: "data/citiGeoStops21.geojson",
          },
          paint: {
            'circle-color': '#EC368D',
            'circle-stroke-color': '#4d4d4d',
            'circle-stroke-width': 0.7,
            'circle-opacity': 0.7,
            'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'end_station_id'],
              0,
              '#B0DAF1',
              3500,
              '#8D91C7',
              7000,
              '#6E75A8',
              10500,
              '#845A6D',
              14000,
              '#3E1929'
              ],
          },
          minzoom: 3,
        },
        "settlement-minor-label"
      );
      
      });

// Pop up
            map.on("click", "citi-bike-start-20", function (e) {
                var startStation = e.features[0].properties['start station name'];
                var totalTrips = e.features[0].properties.tripCount;
                console.log(startStation);
                new mapboxgl.Popup()
                  .setLngLat(e.lngLat)
                  .setHTML(
                    "<h4>" 
                    + "Station name:" 
                    + "</h4>" 
                    + "<hr>"
                    + "<h6>" 
                    + startStation
                    + "</h6>"
                    + "<h4>" 
                    + "No. of trips: " 
                    + totalTrips 
                    + "</h4>"
                  )
                  .addTo(map);
                });

map.on("mouseenter", "citi-bike-start-20", function () {
    map.getCanvas().style.cursor = "pointer";});
map.on("mouseleave", "citi-bike-start-20", function () {
    map.getCanvas().style.cursor = ""; });

    // Stops in 2020
    map2.on("click", "citi-bike-stop-20", function (e) {
        var startStation = e.features[0].properties['end station name'];
        var totalTrips = e.features[0].properties.tripCount;
        console.log(startStation);
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
              "<h4>" 
              + "Station name:" 
              + "</h4>" 
              + "<hr>"
              + "<h6>" 
              + startStation 
              + "</h6>"
              + "<h4>" 
              + "No. of trips: " 
              + totalTrips 
              + "</h4>"
          )
          .addTo(map2);
        });

map2.on("mouseenter", "citi-bike-stop-20", function () {
map2.getCanvas().style.cursor = "pointer";});
map2.on("mouseleave", "citi-bike-stop-20", function () {
map2.getCanvas().style.cursor = ""; });

// Starts in Geo 2021
map3.on("click", "citi-bike-starts-21", function (e) {
    var startStation = e.features[0].properties['start_station_name'];
    var totalTrips = e.features[0].properties.start_station_id;
    console.log(startStation);
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h4>" 
        + "Station name:" 
        + "</h4>"
        + "<hr>" 
        + "<h6>" 
        +  startStation 
        + "</h6>"
        + "<h4>" 
        + "No. of trips: " 
        + totalTrips 
        + "</h4>"
      )
      .addTo(map3);
    });

map3.on("mouseenter", "citi-bike-starts-21", function () {
map3.getCanvas().style.cursor = "pointer";});
map3.on("mouseleave", "citi-bike-starts-21", function () {
map3.getCanvas().style.cursor = ""; });

// Stops in Geo 2021
map4.on("click", "citi-bike-stops-21", function (e) {
    var startStation = e.features[0].properties['end_station_name'];
    var totalTrips = e.features[0].properties.end_station_id;
    console.log(startStation);
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h4>" 
        + "Station name:" 
        + "</h4>"
        + "<hr>"
        + "<h6>" 
        + startStation
        + "</h6>"
        + "<h4>" 
        + "No. of trips: " 
        + totalTrips 
        + "</h4>"
      )
      .addTo(map4);
    });

map4.on("mouseenter", "citi-bike-stops-21", function () {
map4.getCanvas().style.cursor = "pointer";});
map4.on("mouseleave", "citi-bike-start-20", function () {
map4.getCanvas().style.cursor = ""; });