const form = document.getElementById("profileForm");
const profileList = document.getElementById("profileList");

let profiles = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;

  const profile = { name, age, country };
  profiles.push(profile);

  displayProfiles();
  form.reset();
});

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

