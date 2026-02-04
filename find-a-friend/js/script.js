// ===== Get Elements =====
const form = document.getElementById("profileForm");
const profileList = document.getElementById("profileList");

// ===== Check Logged-In User =====
const currentUser = localStorage.getItem('currentUser');
if(!currentUser){
    // Redirect to login if no user is logged in
    window.location.href = 'login.html';
}

// ===== Initialize Profiles =====
let profiles = JSON.parse(localStorage.getItem(currentUser)) || [];

// ===== Display Profiles on Page Load =====
displayProfiles();

// ===== Form Submit =====
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;
  const photoInput = document.getElementById("photo");

  const profile = { name, age, country, photo: "" };

  // Handle photo upload
  if(photoInput.files[0]){
    const reader = new FileReader();
    reader.onload = function(){
      profile.photo = reader.result; // store image as Base64
      saveProfile(profile);
    }
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    saveProfile(profile);
  }

  form.reset();
});

// ===== Save Profile Function =====
function saveProfile(profile){
  profiles.push(profile);
  localStorage.setItem(currentUser, JSON.stringify(profiles));
  displayProfiles();
}

// ===== Display Profiles Function =====
function displayProfiles() {
  profileList.innerHTML = "";

  profiles.forEach(profile => {
    const div = document.createElement("div");
    div.classList.add("profile-card");

    div.innerHTML = `
      ${profile.photo ? `<img src="${profile.photo}" width="100">` : ''}
      <h3>${profile.name}</h3>
      <p>Age: ${profile.age}</p>
      <p>Country: ${profile.country}</p>
    `;

    profileList.appendChild(div);
  });
}
