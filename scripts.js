$(document).ready(function () {
  // Function to update the active button, title, and content dynamically
  function updateContent(button, title, content, researchNotes) {
    // Remove active class from all buttons
    $('button').removeClass('active');
    // Add active class to the clicked button
    button.addClass('active');
    // Update the title text
    $('#definitionTitle').text(title);
    // Update the content text with both description and research notes
    $('#definitionContent').html(content + "<br><br><strong>Research Notes/GIS Spatial Analysis:</strong><br>" + researchNotes);
  }

  // Event handler for the "Climate Gentrification" button
  $('#btnHazard').click(function () {
    updateContent(
      $(this),
      'What is the Hazard?',
      'The hazard associated with climate gentrification involves the socio-economic and environmental shifts that make certain areas more desirable due to their perceived resilience to climate change impacts. This desirability leads to increased property values and investment, which can displace lower-income residents.',
      'Identify and map areas within New York City that are less prone to climate change impacts, such as flooding and heatwaves. Analyze historical data on property values, development projects, and demographic changes in these areas over the past decade.'
    );
  });

  // Event handler for the "What is the Risk?" button
  $('#btnRisk').click(function () {
    updateContent(
      $(this),
      'What is the Risk?',
      'The risk lies in the exacerbation of social inequality and the loss of community cohesion. As lower-income residents are displaced, there\'s a risk of losing the cultural and social fabric that defines many of New York City\'s neighborhoods.',
      'Conduct socio-economic impact assessments to understand the effects of rising property values on different income groups. Evaluate the correlation between climate gentrification and changes in local businesses, schools, and community services.'
    );
  });

  // Event handler for the "How to Manage the Risk?" button
  $('#btnRiskManagement').click(function () {
    updateContent(
      $(this),
      'How to Manage the Risk?',
      'Managing the risk requires implementing policies that ensure equitable development and protect vulnerable populations. This could include affordable housing mandates, community land trusts, and inclusive zoning laws.',
      'Review case studies of cities that have successfully implemented policies to combat climate gentrification. Map potential areas for affordable housing projects and community centers that cater to displaced populations.'
    );
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Toggle mobile menu
  $('.hamburger-icon').click(function () {
    $('#nav-menu').toggle(); // Use jQuery's toggle function to show/hide the nav menu
  });

  // Add mapbox

  mapboxgl.accessToken = 'pk.eyJ1IjoiajAwYnkiLCJhIjoiY2x1bHUzbXZnMGhuczJxcG83YXY4czJ3ayJ9.S5PZpU9VDwLMjoX_0x5FDQ';
  const videoStyle = {
    'version': 8,
    'sources': {
      'satellite': {
        'type': 'raster',
        'url': 'mapbox://mapbox.satellite',
        'tileSize': 256
      },
      'video': {
        'type': 'video',
        'urls': [
          'https://static-assets.mapbox.com/mapbox-gl-js/drone.mp4',
          'https://static-assets.mapbox.com/mapbox-gl-js/drone.webm'
        ],
        'coordinates': [
          [-122.51596391201019, 37.56238816766053],
          [-122.51467645168304, 37.56410183312965],
          [-122.51309394836426, 37.563391708549425],
          [-122.51423120498657, 37.56161849366671]
        ]
      }
    },
    'layers': [
      {
        'id': 'background',
        'type': 'background',
        'paint': {
          'background-color': 'rgb(4,7,14)'
        }
      },
      {
        'id': 'satellite',
        'type': 'raster',
        'source': 'satellite'
      },
      {
        'id': 'video',
        'type': 'raster',
        'source': 'video'
      }
    ]
  };

  const map = new mapboxgl.Map({
    container: 'map',
    minZoom: 14,
    zoom: 17,
    center: [-122.514426, 37.562984],
    bearing: -96,
    style: videoStyle
  });

  let playingVideo = true;

  map.on('click', () => {
    playingVideo = !playingVideo;

    if (playingVideo) {
      map.getSource('video').play();
    } else {
      map.getSource('video').pause();
    }
  });

});
