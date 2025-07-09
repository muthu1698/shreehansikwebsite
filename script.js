document.addEventListener('DOMContentLoaded', function() {
  // Set birth date to May 31, 2025 at 6:21 PM local time
  const birthDate = new Date("2025-05-31T18:21:00"); // Local time

  const secondsInYear = 365.25 * 24 * 60 * 60;

  function updateAge() {
    const now = new Date();
    const ageInSeconds = (now - birthDate) / 1000;
    const ageInYears = ageInSeconds / secondsInYear;
    const ageElem = document.getElementById("age");
    if (ageElem) {
      ageElem.textContent = ageInYears.toFixed(10);
    }
  }

  // Load saved profile picture on page load
  const profilePic = document.getElementById('profilePic');
  const savedProfilePic = localStorage.getItem('profilePicture');
  if (savedProfilePic) {
    profilePic.src = savedProfilePic;
  }

  setInterval(updateAge, 100); // Update every 100ms
  updateAge(); // Initial update
}); 