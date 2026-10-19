document.addEventListener('DOMContentLoaded', function () {
  const links = Array.from(document.querySelectorAll('nav a'));
  const targets = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateActiveLink() {
    const y = window.scrollY + 120;
    let activeId = 'home';
    targets.forEach(section => {
      if (section.offsetTop <= y) activeId = section.id;
    });
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + activeId));
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
});
