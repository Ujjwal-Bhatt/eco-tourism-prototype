# Eco Tourism Prototype

**Eco Tourism** is a lightweight, interactive web prototype showcasing a greener future—by helping users locate dustbin spots using an intuitive map interface.

---

##  Project Overview

This project includes:

- **Landing Page** (`index.html`): A welcoming homepage with an eco-conscious message and a button leading to the map.
- **Map Interface** (`map.html` + `app.js`): An interactive map (via Leaflet.js) that:
  - Requests user location (with graceful fallback if denied).
  - Uses a **custom dustbin icon** to represent simulated waste collection points.
  - Adds 10 randomly positioned "dustbins" around your location or Delhi.
- **Design** (`css/style.css`): Clean, green-themed styling for both the landing page and the map view.
- **Assets**:
  - `images/dustbin.png`: Custom marker icon.
  - `quotes.txt`: Contains the landing page quote.
- **Documentation** (`README.md`): This file — to help users get started and contribute.

---

##  Features

- Requests and uses the user’s location to personalize the experience.
- Simulates eco-friendly infrastructure (dustbins) on the map.
- Clean, responsive design with visually appealing elements.

---


eco-tourism-prototype/
├── assets/
│   ├── css/
│   │   └── style.css        – Page styling
│   ├── images/
│   │   └── dustbin.png      – Dustbin map marker
│   └── quotes.txt           – Landing page quote
├── js/
│   └── app.js               – Handles map logic & UI
├── index.html               – Landing page
├── map.html                 – Interactive map page
└── README.md                – Project documentation (this file)



Future Ideas

Connect with a backend to fetch real dustbin locations dynamically.

Improve marker clustering and map performance.

Enhance UI with added info (e.g., cleanliness status).

Mobile responsive adjustments.
