const { showListing } = require("../../controllers/listings")

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  // showListing
  document.addEventListener('DOMContentLoaded', function () {
    //map centered around Toronto, Canada
    let map = L.map('map').setView([43.70, -79.42], 13);

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    //dataset with dynamic information for each location
    let locations = [
        {
            coordinates: [43.70, -79.42],
            title: "Toronto, Canada",
            description: "A dynamic description for Toronto."
        },
        {
            coordinates: [40.71, -74.01],
            title: "New York City, USA",
            description: "A dynamic description for New York City."
        },
        {
            coordinates: [34.05, -118.24],
            title: "Los Angeles, USA",
            description: "A dynamic description for Los Angeles."
        },
        {
            coordinates: [51.51, -0.13],
            title: "London, UK",
            description: "A dynamic description for London."
        },
  
    ];

    locations.forEach(function (location) {
        var marker = L.marker(location.coordinates).addTo(map);
        marker.bindPopup(`<b>${location.title}</b><br>${location.description}`);
    });
});