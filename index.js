const listItems = [
  "Our service offers you the opportunity to transform your digital conversations into beautiful personalized books. Through innovative technology and a simple process, we capture every exchange, every emotion, and turn them into a tangible treasure.",
  "You have complete control over the design and content of your book, allowing you to create a unique and meaningful memento.",
  "Whether it's immortalizing conversations among loved ones, professional exchanges, or precious moments, our service helps you bring your stories to life in an authentic and memorable way.",
  "Discover today how we can turn your conversations into unforgettable memories, with the option to choose from a variety of customizable layout styles and covers to make your book truly unique to you.",
  "Additionally, with our QR code feature, videos and voice messages are also supported, ensuring that every moment of your stories is captured."
];

document.addEventListener('DOMContentLoaded', () => {
  const loadContent = (url, placeholderId, callback) => {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(placeholderId).innerHTML = data;
        if (callback) callback();
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
  };

  const addNavEventListeners = () => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  };

  const populateList = () => {
    const olElement = document.getElementById('dynamic-list');
    if (olElement) {
      listItems.forEach(item => {
        const liElement = document.createElement('li');
        liElement.textContent = item;
        liElement.classList.add('styled-li');
        olElement.appendChild(liElement);
      });
    } else {
      console.error('Error: Element with ID "dynamic-list" not found.');
    }
  };

  // Load the components
  loadContent('html/nav.html', 'nav-placeholder', addNavEventListeners);
  loadContent('html/hero.html', 'hero-placeholder');
  loadContent('html/about.html', 'about-placeholder', populateList);
  loadContent('html/joincommunity.html', 'joincommunity-placeholder');
  loadContent('html/booker-experience.html', 'experience-placeholder');
  loadContent('html/booker-offer.html', 'booker-offer-placeholder');
  loadContent('html/testimonials.html', 'testimonials-placeholder', () => {
    const script = document.createElement('script');
    script.src = '../js/testimonials.js';
    document.body.appendChild(script);
  }); // Ensure testimonials.js is loaded after testimonials.html
  loadContent('html/newsletter.html', 'newsletter-placeholder');
  loadContent('html/footer.html', 'footer-placeholder');
});
