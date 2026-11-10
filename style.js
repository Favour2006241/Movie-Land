document.addEventListener('DOMContentLoaded', () => {

  // Function to attach smooth scrolling to slider elements
  function setupSlider(sliderId, leftArrowId, rightArrowId, scrollDistance = 380) {
    const slider = document.getElementById(sliderId);
    const leftArrow = document.getElementById(leftArrowId);
    const rightArrow = document.getElementById(rightArrowId);

    if (slider && leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => {
        slider.scrollBy({
          left: -scrollDistance,
          behavior: 'smooth'
        });
      });

      rightArrow.addEventListener('click', () => {
        slider.scrollBy({
          left: scrollDistance,
          behavior: 'smooth'
        });
      });
    }
  }

  // Setup Row 1 Slider
  setupSlider('moviesSlider1', 'slideLeft1', 'slideRight1');

  // Setup Row 2 Slider
  setupSlider('moviesSlider2', 'slideLeft2', 'slideRight2');

  // Toggle Heart Icon (Add/Remove Watchlist)
  const heartIcons = document.querySelectorAll('.fa-heart');
  heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
      if (icon.classList.contains('fa-solid')) {
        icon.style.color = '#0abb19';
      } else {
        icon.style.color = '#8c8c8c';
      }
    });
  });

  // Active Category Chips Selector
  const categoryBtns = document.querySelectorAll('.category-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });

  // Active Sub Nav Items
  const subNavItems = document.querySelectorAll('.sub-nav-item');
  subNavItems.forEach(item => {
    item.addEventListener('click', () => {
      subNavItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

});