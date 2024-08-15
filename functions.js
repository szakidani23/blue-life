/// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', () => {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  };

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Target elements for the observer
  document
    .querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
    .forEach((element) => {
      observer.observe(element);
    });
});

/// Clamp Text on click

function readMore(button) {
  let clampedText = button.previousElementSibling;
  clampedText.classList.toggle('textclamp');
  clampedText.classList.contains('textclamp')
    ? (button.textContent = 'Read More')
    : (button.textContent = 'Read less');
}
/// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', () => {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  };

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Target elements for the observer
  document
    .querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
    .forEach((element) => {
      observer.observe(element);
    });
});

/// Clamp Text on click

function readMore(button) {
  let clampedText = button.previousElementSibling;
  clampedText.classList.toggle('textclamp');
  clampedText.classList.contains('textclamp')
    ? (button.textContent = 'Read More')
    : (button.textContent = 'Read less');
}
