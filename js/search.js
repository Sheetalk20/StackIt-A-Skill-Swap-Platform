function searchSkills() {
  const query = document.getElementById("skillSearch").value.toLowerCase();
  const profiles = document.querySelectorAll(".profile-card");

  profiles.forEach(profile => {
    const skillText = profile.innerText.toLowerCase();
    profile.style.display = skillText.includes(query) ? "block" : "none";
  });
}
