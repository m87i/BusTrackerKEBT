(function () {
  // Initialize global variables
  const map = L.map('theMap').setView([26.310542, 50.145261], 16);
  const busLayer = L.geoJSON().addTo(map);
  const busLayer2 = L.geoJSON().addTo(map);
  let busMarkers = [];
  let currentCoordinateIndex1 = 0;

    // Initialize global variables for the second bus
    // const busLayer2 = L.geoJSON().addTo(map);
    let busMarkers2 = [];
    let currentCoordinateIndex2 = 0;

  // Tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // GeoJSON data
  const geojsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
              [26.314960532134904, 50.14772495527663],
              [26.31440517457358, 50.145258401560966],
              [26.31393364247822, 50.14343478838728],
              [26.312990572531177, 50.13989277049211],
              [26.31273908591514, 50.1401265670531],
              [26.312927700927887, 50.14025515516087],
              [26.31303248691411, 50.14025515516087],
              [26.3134830655723, 50.14192680057019],
              [26.312340897657265, 50.142300875067775],
              [26.31139781474515, 50.14261650042431],
              [26.31077956733779, 50.142476222487744],
              [26.309867908363415, 50.14359844597948],
              [26.309763119515367, 50.14504798465563],
              [26.308411334887396, 50.14564416588635],
              [26.30755205273961, 50.14647414367613],
              [26.307227200512358, 50.14607668952294],
              [26.307070013623388, 50.145632476057585],
              [26.306776597528156, 50.14559740657418],
              [26.306713722553326, 50.1459130319308],
              [26.30724815874767, 50.1464624538483],
              [26.305990657897297, 50.14809902977322],
              [26.30609699595719, 50.14814564547706],
              [26.30738889675841, 50.14676940730965],
              [26.30787772033331, 50.14728874246663],
              [26.307994106594478, 50.147184875435016],
              [26.307679863420447, 50.14656167324634],
              [26.30850620475718, 50.14569178685724],
              [26.30984463244873, 50.144990684394315],
              [26.30997265515738, 50.143627429605516],
              [26.310798980143744, 50.14243295874289],
              [26.31149727844965, 50.142640692412186],
              [26.31348740526657, 50.14205644035954],
              [26.31306843404016, 50.13994014959195],
              [26.31269601390133, 50.14010893351815],
              [26.3130567959292, 50.14021280054979],
              [26.313778356615458, 50.14303019378028],
              [26.314534826702584, 50.146224104999106],
              [26.31488396507696, 50.14783404398821],
              [26.31488396507696, 50.147885977504075],
              [26.31507017178002, 50.14805476143022],
              [26.31508180968879, 50.1477950938511],
              [26.31501198221771, 50.147678243440794],
              [26.314988706384042, 50.14769122681949]
          ],
          "type": "LineString",
          "bbox": [26.305990657897297, 50.13989277049211, 26.31508180968879, 50.14814564547706]
        },
        "bbox": [26.305990657897297, 50.13989277049211, 26.31508180968879, 50.14814564547706]
      }
    ]
  };

  //route for second bus
  const geojsonData2 ={
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              50.14894422334157,
              26.312192588348864
            ],
            [
              50.15025885105524,
              26.313970454748343
            ],
            [
              50.15052749236986,
              26.314482803113975
            ],
            [
              50.15055035546101,
              26.31526156829017
            ],
            [
              50.15004736751928,
              26.31619915328085
            ],
            [
              50.149247159345464,
              26.31725969148505
            ],
            [
              50.1489042129856,
              26.317541475366028
            ],
            [
              50.148481245808426,
              26.31757221538409
            ],
            [
              50.146597113524166,
              26.316696359460465
            ],
            [
              50.14558951706579,
              26.316219213117805
            ],
            [
              50.14187850926419,
              26.315237647550106
            ],
            [
              50.139505912844925,
              26.314630980576965
            ],
            [
              50.13892416674486,
              26.314133375583097
            ],
            [
              50.138756866162964,
              26.31362890369887
            ],
            [
              50.13883671366739,
              26.31320968504872
            ],
            [
              50.13926256338712,
              26.311997492407286
            ],
            [
              50.139334806367174,
              26.31121357534309
            ],
            [
              50.13903823470528,
              26.31028991307086
            ],
            [
              50.13907245506488,
              26.309390098904885
            ],
            [
              50.1400650559188,
              26.307819821653624
            ],
            [
              50.14252510806347,
              26.305699755282973
            ],
            [
              50.143099248606404,
              26.304152285202136
            ],
            [
              50.14372281958913,
              26.303975040244637
            ],
            [
              50.14574562302181,
              26.30396140600618
            ],
            [
              50.14724839409922,
              26.30399208867091
            ],
            [
              50.14852975642427,
              26.304551090995687
            ],
            [
              50.149303513040365,
              26.30527796481772
            ],
            [
              50.1496000894837,
              26.30627324872465
            ],
            [
              50.149434599290345,
              26.307556131736234
            ],
            [
              50.148760304888015,
              26.308828747455067
            ],
            [
              50.14858920268779,
              26.30996715335641
            ],
            [
              50.148288823982284,
              26.31043410092127
            ],
            [
              50.148395287321904,
              26.31101352229041
            ],
            [
              50.14894469570274,
              26.312195900685296
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  };

  // Icon specs
  var busIcon = L.icon({
    iconUrl: 'YellowBus.png',
    iconSize: [32, 40],
    iconAnchor: [16, 20],
  });

  // Icon specs
  var busIcon2 = L.icon({
    iconUrl: 'BlueBus.png',
    iconSize: [15, 40],
    iconAnchor: [16, 20],
  });

  // Create a custom icon for the station using SVG content
const stationIcon = L.icon({
  iconUrl: 'BusStation.svg',
  iconSize: [22, 22],
  iconAnchor: [15, 15],
});

// Create a marker for the station with the custom icon
const stationMarker = L.marker([26.314886140990225, 50.14668963955796], {
  icon: stationIcon,
}).addTo(map);
stationMarker.bindPopup("Station 1");
  
// Create a marker for the station with the custom icon
const stationMarker2 = L.marker([26.314545024036093, 50.14519989170711], {
  icon: stationIcon,
}).addTo(map);
stationMarker2.bindPopup("Station 2");

// Create a marker for the station with the custom icon
const stationMarker3 = L.marker([26.314056326995185, 50.14341601319251], {
  icon: stationIcon,
}).addTo(map);
stationMarker3.bindPopup("Station 3");

// Create a marker for the station with the custom icon
const stationMarker4 = L.marker([26.31273908591514, 50.1401265670531], {
  icon: stationIcon,
}).addTo(map);
stationMarker4.bindPopup("Station 4");

// Create a marker for the station with the custom icon
const stationMarker5 = L.marker([26.31234256065862, 50.142167985127486], {
  icon: stationIcon,
}).addTo(map);
stationMarker5.bindPopup("Station 5");

// Create a marker for the station with the custom icon
const stationMarker6 = L.marker([26.309759175933507, 50.14399564239329], {
  icon: stationIcon,
}).addTo(map);
stationMarker6.bindPopup("Station 6");

// Create a marker for the station with the custom icon
const stationMarker7 = L.marker([26.30825865234182, 50.145631392142235], {
  icon: stationIcon,
}).addTo(map);
stationMarker7.bindPopup("Station 7");

// Create a marker for the station with the custom icon
const stationMarker8 = L.marker([26.306119062963546, 50.1477375425726], {
  icon: stationIcon,
}).addTo(map);
stationMarker8.bindPopup("Station 8");

  


  // Function to calculate bearing between two coordinates
  function calculateBearing(coord1, coord2) {
    const lat1 = coord1[0];
    const lon1 = coord1[1];
    const lat2 = coord2[0];
    const lon2 = coord2[1];
    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    return (Math.atan2(y, x) * 180) / Math.PI;
  }


   // Function to calculate bearing between two coordinates
    function calculateBearing2(coord1, coord2) {
    const lat1 = coord1[1];
    const lon1 = coord1[0];
    const lat2 = coord2[1];
    const lon2 = coord2[0];
    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    return (Math.atan2(y, x) * 180) / Math.PI;
  }


  // Function to move the bus marker sequentially through the coordinates
  function moveBusMarker() {
    // Clear existing bus markers
    busLayer.clearLayers();

    // Get the current coordinate
    const currentCoordinate = geojsonData.features[0].geometry.coordinates[currentCoordinateIndex1];
    const nextCoordinateIndex = (currentCoordinateIndex1 + 1) % geojsonData.features[0].geometry.coordinates.length;
    const nextCoordinate = geojsonData.features[0].geometry.coordinates[nextCoordinateIndex];

    // Calculate the bearing between current and next coordinates
    const bearing = calculateBearing(currentCoordinate, nextCoordinate);

    // Create a marker for the bus and set the rotation angle
    const busMarker = L.marker([currentCoordinate[0], currentCoordinate[1]], {
      icon: busIcon,
      rotationAngle: bearing, // Set the rotation angle
    }).addTo(map);

    // Bind a popup with the current coordinates
    // busMarker.bindPopup(`Latitude: ${currentCoordinate[0]}, Longitude: ${currentCoordinate[1]}`).openPopup();

    busMarker.bindPopup(`Latitude: ${currentCoordinate[0]}, Longitude: ${currentCoordinate[1]}, occuppancy: 2`);

busMarker.on('click', function () {
    busMarker.openPopup();
});



    // Update the current coordinate index
    currentCoordinateIndex1 = nextCoordinateIndex;

    // Add the bus marker to the layer
    busLayer.addLayer(busMarker);

    // Schedule the next movement after a delay (in milliseconds)
    setTimeout(moveBusMarker, 3000); // Change 3000 to control the bus speed (3 seconds in this example)
  }

  // #############################################################
  // #############################################################

    // Function to move the 2nd bus marker sequentially through the coordinates
    function moveBusMarker2() {
      // Clear existing bus markers
      busLayer2.clearLayers();
  
      // Get the current coordinate
      const currentCoordinate2 = geojsonData2.features[0].geometry.coordinates[currentCoordinateIndex2];
      const nextCoordinateIndex2 = (currentCoordinateIndex2 + 1) % geojsonData2.features[0].geometry.coordinates.length;
      const nextCoordinate2 = geojsonData2.features[0].geometry.coordinates[nextCoordinateIndex2];
  
      // Calculate the bearing between current and next coordinates
      const bearing2 = calculateBearing2(currentCoordinate2, nextCoordinate2);
  
      // Create a marker for the bus and set the rotation angle
      const busMarker = L.marker([currentCoordinate2[1], currentCoordinate2[0]], {
        icon: busIcon2,
        rotationAngle: bearing2, // Set the rotation angle
      }).addTo(map);
  
      // Bind a popup with the current coordinates
      // busMarker.bindPopup(`Latitude: ${currentCoordinate[0]}, Longitude: ${currentCoordinate[1]}`).openPopup();
  
      busMarker.bindPopup(`Latitude: ${currentCoordinate2[1]}, Longitude: ${currentCoordinate2[0]}, occuppancy: 7`);
  
  busMarker.on('click', function () {
      busMarker.openPopup();
  });
  
  
  
      // Update the current coordinate index
      currentCoordinateIndex2 = nextCoordinateIndex2;
  
      // Add the bus marker to the layer
      busLayer2.addLayer(busMarker);
  
      // Schedule the next movement after a delay (in milliseconds)
      setTimeout(moveBusMarker2, 3000); // Change 3000 to control the bus speed (3 seconds in this example)
    }

  // // Start moving the bus marker
  moveBusMarker();

  // // Start moving the bus marker
  moveBusMarker2();


})();
