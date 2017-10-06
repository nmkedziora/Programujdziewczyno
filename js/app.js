'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // zadanie 1: dropdown-menu
    const menuItem = document.querySelector('.for-dropdown');
    const dropdown = document.querySelector('.dropdown');

    menuItem.addEventListener('mouseover', () => {
        dropdown.style.display = 'block';
    });

    menuItem.addEventListener('mouseout', () => {
        dropdown.style.display = 'none';
    });

    // zadanie 2: read-more
    const buttons = document.querySelectorAll('.read-more');

    for (let button of buttons) {
        button.addEventListener('click', () => {
            const text = button.previousElementSibling;

            if (text.style.display === '' || text.style.display === 'none') {
              text.style.display = 'block';
              button.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            } else {
              text.style.display = 'none';
              button.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            }
        });
    }

    // zadanie 3: menu-border-on-scroll
    const navbar = document.querySelector('.navbar-fixed-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.style.borderBottom = '3px solid #ea6c56';
      }
      if (window.scrollY === 0) {
        navbar.style.borderBottom = 'none';
      }
    });
});
