// Check if localStorage has a previous visit date
const lastVisitDate = localStorage.getItem('lastVisitDate');
const currentVisitDate = new Date();

if (!lastVisitDate) {
  // If this is the user's first visit
  document.getElementById('messageSection').innerHTML = 'Welcome! Let us know if you have any questions.';
} else {
  const daysBetweenVisits = Math.floor(
    (currentVisitDate - new Date(lastVisitDate)) / (1000 * 60 * 60 * 24)
  );

  if (daysBetweenVisits === 1) {
    // If the user last visited yesterday
    document.getElementById('messageSection').innerHTML = 'You last visited 1 day ago.';
  } else if (daysBetweenVisits < 1) {
    // If the user visited today (less than a day)
    document.getElementById('messageSection').innerHTML = 'Back so soon! Awesome!';
  } else {
    // If the user visited more than a day ago
    document.getElementById('messageSection').innerHTML = `You last visited ${daysBetweenVisits} days ago.`;
  }
}

// Store the current visit date in localStorage
localStorage.setItem('lastVisitDate', currentVisitDate.toISOString());