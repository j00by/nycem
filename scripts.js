$(document).ready(function() {
  // Function to update the active button, title, and content dynamically
  function updateContent(button, title, content, imagePath, imageAlt) {
      // Remove active class from all buttons
      $('button').removeClass('active');
      // Add active class to the clicked button
      button.addClass('active');
      // Update the title text
      $('#definitionTitle').text(title);
      // Update the content text
      $('#definitionContent').html(content);
      // Update the placeholder image source and alt text
      $('#placeholderImage').attr('src', imagePath).attr('alt', imageAlt);
  }

  // Event handler for the Equity in Mitigation button
  $('#btnEquityInMitigation').click(function() {
      updateContent(
          $(this), 
          'Equity in Mitigation',
          'Discuss the importance of considering social vulnerability and how the city plans to support the most vulnerable populations during disasters.',
          'path/to/equity_in_mitigation_image.jpg',
          'Equity in Mitigation Image'
      );
  });

  // Event handler for the Community Resilience button
  $('#btnCommunityResilience').click(function() {
      updateContent(
          $(this), 
          'Community Resilience',
          'Highlight local initiatives and workshops aimed at educating the public on hazard mitigation and preparedness measures.',
          'path/to/community_resilience_image.jpg',
          'Community Resilience Image'
      );
  });

  // Event handler for the Infrastructure Protection button
  $('#btnInfrastructureProtection').click(function() {
      updateContent(
          $(this), 
          'Infrastructure Protection',
          'Outline specific structural measures and policies designed to reduce risks and ensure the continuity of essential services.',
          'path/to/infrastructure_protection_image.jpg',
          'Infrastructure Protection Image'
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
});