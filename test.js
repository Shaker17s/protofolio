// Portfolio Website Test Utility
// This file contains utility functions for testing portfolio functionality

/**
 * Toggle theme between light and dark mode
 */
function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  return newTheme;
}

/**
 * Smooth scroll to element with offset for fixed header
 * @param {string} selector - CSS selector of target element
 */
function smoothScrollTo(selector) {
  const element = document.querySelector(selector);
  if (element) {
    const headerOffset = 80; // Adjust based on header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Initialize portfolio utilities
 */
function initPortfolioUtils() {
  // Restore theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Add theme toggle to footer if it exists
  const footer = document.querySelector('.contact-footer');
  if (footer) {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌓 Toggle Theme';
    themeToggle.className = 'theme-toggle';
    themeToggle.addEventListener('click', toggleTheme);
    footer.appendChild(themeToggle);
  }

  // Add scroll reveal enhancement
  const revealElements = document.querySelectorAll('[data-reveal]');
  revealElements.forEach((el, index) => {
    el.style.setProperty('--delay', `${index * 50}ms`);
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioUtils);
} else {
  initPortfolioUtils();
}

// Export for use in other modules (if using ES modules)
if (typeof exports !== 'undefined') {
  exports.toggleTheme = toggleTheme;
  exports.smoothScrollTo = smoothScrollTo;
  exports.isInViewport = isInViewport;
  exports.initPortfolioUtils = initPortfolioUtils;
}
