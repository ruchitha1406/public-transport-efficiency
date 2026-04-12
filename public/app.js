let map, marker, path = [], polyline;

// Fetch initial location to start map at correct place
async function initMap() {
  try {
    const res = await fetch('/location');
    const data = await res.json();
    const lat = data.lat || 0;
    const lon = data.lon || 0;

    map = L.map('map').setView([lat, lon], 18);

    // Satellite map
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      { attribution: 'Tiles © Esri' }
    ).addTo(map);

    // Marker
    marker = L.marker([lat, lon]).addTo(map);

    // Initialize polyline starting from initial point
    path.push([lat, lon]);
    polyline = L.polyline(path, { color: 'red', weight: 4 }).addTo(map);

  } catch (err) {
    console.error('Error initializing map:', err);
  }
}

// Update marker and polyline
function updateBusLocation(lat, lon) {
  if (!lat || !lon) return;

  // Move marker
  marker.setLatLng([lat, lon]);

  // Add new point to polyline
  path.push([lat, lon]);
  polyline.setLatLngs(path);

  // Center map on new location
  map.setView([lat, lon], map.getZoom());
}

// Poll server every 2 seconds
setInterval(async () => {
  try {
    const res = await fetch('/location');
    const data = await res.json();
    updateBusLocation(data.lat, data.lon);
  } catch (err) {
    console.error('Error fetching location:', err);
  }
}, 2000);

// Initialize map
initMap();