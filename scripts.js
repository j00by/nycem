$(document).ready(function() {
  // Function to update the active button, title, and content dynamically
  function updateContent(button, title, content) {
    // Remove active class from all buttons
    $('button').removeClass('active');
    // Add active class to the clicked button
    button.addClass('active');
    // Update the title text
    $('#definitionTitle').text(title);
    // Update the content text
    $('#definitionContent').html(content);
  }

  // Event handler for the "What is the Hazard?" button
  $('#btnHazard').click(function() {
    updateContent(
      $(this), 
      'What is the Hazard?',
      'Description and examples of potential hazards that New York City might face, such as natural disasters, technological incidents, or human-caused events.'
    );
  });

  // Event handler for the "What is the Risk?" button
  $('#btnRisk').click(function() {
    updateContent(
      $(this), 
      'What is the Risk?',
      'Analysis of the likelihood and potential impact of different hazards on New York City, taking into account various vulnerability factors.'
    );
  });

  // Event handler for the "How to Manage the Risk?" button
  $('#btnRiskManagement').click(function() {
    updateContent(
      $(this), 
      'How to Manage the Risk?',
      'Strategies and measures that can be implemented to mitigate risks, including emergency preparedness, infrastructure improvements, and community education.'
    );
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Toggle mobile menu
  $('.hamburger-icon').click(function() {
    $('#nav-menu').toggle(); // Use jQuery's toggle function to show/hide the nav menu
  });
});
