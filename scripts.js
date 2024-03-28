$(document).ready(function() {
    // Function to update the active button and content
    function updateContent(button, content, imagePath, imageAlt) {
      // Remove active class from all buttons
      $('button').removeClass('active');
      // Add active class to the clicked button
      button.addClass('active');
      // Update the definition text
      $('#definition').html(content);
      // Update the placeholder image source and alt text
      $('#placeholderImage').attr('src', imagePath).attr('alt', imageAlt);
    }
  
    $('#btnClimateGentrification').click(function() {
      updateContent($(this), '<strong>Climate Gentrification</strong> refers to the phenomenon where neighborhoods less susceptible to climate change impacts become more desirable, leading to increased property values and the displacement of lower-income residents. This process is significant because it underscores the intersection of climate resilience and social inequality. <br><br> In New York City, this is observed in areas like the Brooklyn waterfront, where post-industrial neighborhoods perceived as safer from sea-level rise have seen a surge in development. This has led to the displacement of long-standing, lower-income communities, highlighting the need for inclusive urban planning.', 'path/to/climate_gentrification_image.jpg', 'Climate Gentrification Image');
    });
  
    $('#btnMigration').click(function() {
      updateContent($(this), '<strong>Climate Migration</strong> is the movement of people, either within their country or across borders, driven by sudden or gradual changes in their environment due to climate change. This migration is crucial to understand because it reflects the direct human impact of climate change. <br><br> In the context of New York City, climate migration manifests through the influx of individuals from regions severely affected by climate change, showcasing internal climate migration. This underscores the importance of preparing urban areas for the influx of climate migrants.', 'path/to/climate_migration_image.jpg', 'Climate Migration Image');
    });
  
    $('#btnDisplacement').click(function() {
      updateContent($(this), '<strong>Climate Displacement</strong> occurs when individuals or communities are forced to leave their homes due to climate change-induced environmental changes. This displacement is a critical issue as it highlights the urgent need for climate adaptation and mitigation strategies. <br><br> In New York City, the aftermath of Hurricane Sandy provided a stark example of climate displacement, with initiatives like the state\'s buyout program in Staten Island\'s Oakwood Beach. This case illustrates the complex challenges of managing climate displacement.', 'path/to/climate_displacement_image.jpg', 'Climate Displacement Image');
    });
  });