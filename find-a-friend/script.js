const form = document.getElementById("profileForm");
const profileList = document.getElementById("profileList");

// Get current username from localStorage
const currentUser = localStorage.getItem('currentUser');

// Initialize profiles for this user
let profiles = JSON.parse(localStorage.getItem(currentUser)) || [];

// Display profiles when page loads
displayProfiles();

// Form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;

  const profile = { name, age, country };
  profiles.push(profile);

  // Save profiles for this user
  localStorage.setItem(currentUser, JSON.stringify(profiles));

  displayProfiles();
  form.reset();
});

// Display function
function displayProfiles() {
  profileList.innerHTML = "";

  profiles.forEach(profile => {
    const div = document.createElement("div");
    div.classList.add("profile-card");

    div.innerHTML = `
      <h3>${profile.name}</h3>
      <p>Age: ${profile.age}</p>
      <p>Country: ${profile.country}</p>
    `;

    profileList.appendChild(div);
  });
}
