(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // 1. Collect all <h2 id="..."> in the main content
    var headings = Array.from(document.querySelectorAll('main h2[id]'));
    if (headings.length === 0) return;

    // 2. Find the nav link whose href matches the current page
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('#navbarWebsite a.nav-link');
    var activeLink = null;

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href === currentPath) {
        activeLink = link;
      }
    });

    if (!activeLink) return;

    var navItem   = activeLink.parentElement;
    var pageUrl   = activeLink.getAttribute('href');
    var pageLabel = activeLink.textContent.trim();

    // 3. Build the dropdown items (one per <h2>)
    var items = headings.map(function (h) {
      return '<li><a class="dropdown-item" href="' + pageUrl + '#' + h.id + '">'
           + h.textContent.trim()
           + '</a></li>';
    }).join('');

    // 4. Convert the nav item into a Bootstrap 5 dropdown.
    //    The original link (page title) is kept as the first item so it remains cliquable.
    navItem.classList.add('dropdown');
    activeLink.classList.add('dropdown-toggle');
    activeLink.setAttribute('data-bs-toggle', 'dropdown');
    activeLink.setAttribute('aria-expanded', 'false');

    var menu = document.createElement('ul');
    menu.className = 'dropdown-menu';
    menu.innerHTML =
      '<li><a class="dropdown-item fw-semibold" href="' + pageUrl + '">'
      + pageLabel
      + '</a></li>'
      + '<li><hr class="dropdown-divider"></li>'
      + items;

    navItem.appendChild(menu);
  });

}());
