document.addEventListener("DOMContentLoaded", function () {

  // Get all bullet elements and slide elements
  var bullets = document.querySelectorAll(".bullet");
  var slides = document.querySelectorAll(".slide");

  // Get the slider container element
  var sliderContainer = document.querySelector(".slider-container");

  // Get all tabs in the left side container
  var tabs = document.querySelectorAll(".tabs-2");

  // Add click event listeners to each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Redirect to index.html when a tab is clicked
      window.location.href = 'index.html';
    });
  });

  // Add click event listeners to each bullet
  bullets.forEach(function (bullet) {
    bullet.addEventListener("click", function () {
      // Get the slide index from the data-slide attribute
      var slideIndex = parseInt(this.getAttribute("data-slide"));

      // Calculate the slide position based on the slide index
      var slidePosition = -(slideIndex * 3);

      // Remove the "active" class from all bullets
      for (var i = 0; i < bullets.length; i++) {
        bullets[i].classList.remove("active");
      }

      // Add the "active" class to the clicked bullet
      this.classList.add("active");

      // Translate the slider container to the appropriate slide position
      sliderContainer.style.transform = "translateX(" + (slidePosition * 6) + "%)";
    });
  });

  // Add click event listeners to each bullet for opacity changes
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      // Set opacity values based on the bullet index
      if (index == 0) {
        document.querySelector(".slider-container").firstElementChild.querySelector("div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(3) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(4) div").style.opacity = "0.6";
      }
      else if (index == 1) {
        document.querySelector(".slider-container").firstElementChild.querySelector("div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(5) div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(4) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(3) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(7) div").style.opacity = "1";
      }

      else if (index == 2) {
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(3) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(4) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(5) div").style.opacity = "1";
      }
      else if (index == 3) {
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(4) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(5) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(3) div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(7) div").style.opacity = "0.6";
      }
      else if (index == 4) {
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(4) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(5) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(3) div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(7) div").style.opacity = "0.6";
      }
      else if (index == 5) {
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(2) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(6) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(5) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(3) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(7) div").style.opacity = "1";
        document.querySelector(".slider-container :nth-child(8) div").style.opacity = "0.6";
        document.querySelector(".slider-container :nth-child(4) div").style.opacity = "0.6";
      }
    })
  })
});
