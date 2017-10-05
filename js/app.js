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
});
