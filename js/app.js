let map;

function initMap() {
  if (!map) {
    map = L.map('map').setView([28.6, 77.2], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }
}

function requestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        startSimulation(coords);
      },
      () => {
        alert("Location access denied. Showing random bins instead.");
        startSimulation();
      }
    );
  } else {
    alert("Geolocation not supported. Showing random bins instead.");
    startSimulation();
  }
}

function startSimulation(coords = null) {
  initMap();

  if (coords) {
    map.setView(coords, 15);
  }

  // Custom dustbin icon
  const dustbinIcon = L.icon({
    iconUrl: 'images/dustbin.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  // Add 10 simulated bins
  for (let i = 0; i < 10; i++) {
    const lat = (coords ? coords[0] : 28.6) + (Math.random() - 0.5) * 0.1;
    const lon = (coords ? coords[1] : 77.2) + (Math.random() - 0.5) * 0.1;

    L.marker([lat, lon], { icon: dustbinIcon })
      .addTo(map)
      .bindPopup("Eco Dustbin Location 🗑️");
  }

  // Ensure map resizes correctly
  setTimeout(() => {
    map.invalidateSize();
  }, 100);
}