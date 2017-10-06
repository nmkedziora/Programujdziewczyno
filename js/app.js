'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // zadanie 1: dropdown-menu
    const menuItem = document.querySelector('.for-dropdown');
    const dropdown = document.querySelector('.dropdown');

    menuItem.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
    });

    menuItem.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    });

    // zadanie 2: read-more
    const buttons = document.querySelectorAll('.read-more');

    for (let button of buttons) {
        button.addEventListener('click', function() {
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

    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        navbar.style.borderBottom = '3px solid #ea6c56';
      }
      if (window.scrollY === 0) {
        navbar.style.borderBottom = 'none';
      }
    });

    // zadanie 4: back-to-top-button
    const backToTopButton = document.querySelector('.back-to-top');

    backToTopButton.addEventListener('click', function() {
      window.scroll(0, 0);
    });

    // zadanie 5: slider-with-dots
    const sliderDots = document.querySelectorAll('.dot');
    const sliderItems = document.querySelectorAll('.org');

    const dot1 = document.getElementById('dot1');
    const dot2 = document.getElementById('dot2');
    const dot3 = document.getElementById('dot3');

    dot1.addEventListener('click', function() {
      for (let i = 0; i < sliderItems.length; i++) {
        sliderDots[i].classList.remove('active');
        sliderItems[i].classList.remove('visible');
      };
      this.classList.add('active');
      sliderItems[0].classList.add('visible');
    });

    dot2.addEventListener('click', function() {
      for (let i = 0; i < sliderItems.length; i++) {
        sliderDots[i].classList.remove('active');
        sliderItems[i].classList.remove('visible');
      };
      this.classList.add('active');
      sliderItems[1].classList.add('visible');
    });

    dot3.addEventListener('click', function() {
      for (let i = 0; i < sliderItems.length; i++) {
        sliderDots[i].classList.remove('active');
        sliderItems[i].classList.remove('visible');
      };
      this.classList.add('active');
      sliderItems[2].classList.add('visible');
    });

    // zadanie 6: tasks-list
    const list = document.querySelector('.plan .list');
    const input = document.querySelector('.plan input');
    const addButton = document.querySelector('.add-task-btn');

    addButton.addEventListener('click', addTask);

    function addTask() {
      const li = document.createElement('li');

      if (input.value != '') {
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value = '';
      }
    }

    // function addTaskWithDeleteButton() {
    //   const li = document.createElement('li');
    //   const content = document.createElement('div');
    //   const button = document.createElement('button');
    //
    //   if (input.value != '') {
    //     button.innerHTML = 'USUŃ';
    //     button.classList.add('btn', 'btn-default');
    //
    //     content.innerHTML = input.value;
    //
    //     li.appendChild(content);
    //     li.appendChild(button);
    //     list.appendChild(li);
    //
    //     input.value = '';
    //   }
    //
    //   button.addEventListener('click', function() {
    //     this.parentElement.parentNode.removeChild(this.parentElement);
    //   });
    // }

    // function addTaskWithDoneButton() {
    //   const li = document.createElement('li');
    //   const content = document.createElement('div');
    //   const button = document.createElement('button');
    //
    //   if (input.value != '') {
    //     button.innerHTML = 'ZROBIONE';
    //     button.classList.add('btn', 'btn-default');
    //
    //     content.innerHTML = input.value;
    //
    //     li.appendChild(content);
    //     li.appendChild(button);
    //     list.appendChild(li);
    //
    //     input.value = '';
    //   }
    //
    //   button.addEventListener('click', function() {
    //     this.previousElementSibling.style.textDecoration = 'line-through';
    //   });
    // }
});
