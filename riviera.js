let images = ["hajeb.png", "hajeb2.jpeg", "hajeb3.jpeg","hajeb4.jpeg"]; // replace with your image paths
let index = 0;

setInterval(() => {
  let imageContainer = document.getElementById('imageContainer');
  
  // Add new image to the container
  let img = document.createElement('img');
  img.src = images[index];
  img.style.width = '100%';
  img.style.height = 'auto';
  imageContainer.innerHTML = '';
  imageContainer.appendChild(img);
  
  // Update index
  index = (index + 1) % images.length;
}, 2000); // Change image every 3 seconds
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });