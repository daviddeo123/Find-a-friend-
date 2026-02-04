const form = document.getElementById("profileForm");
const profileList = document.getElementById("profileList");

let profiles = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;

  const profile = {
    name,
    age,
    country
  };

  profiles.push(profile);
  showProfiles();
  form.reset();
});

function showProfiles() {
  profileList.innerHTML = "";

  profiles.forEach(p => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Age: ${p.age}</p>
      <p>Country: ${p.country}</p>
    `;

    profileList.appendChild(div);
  });
}
