// Dummy profile data (replace with your actual data)
const profiles = [
    { name: "Sahil Sawant", description: "Front-end Developer" },
    { name: "Atharv keijkar", description: "UX Designer" },
    { name: "Avishkar Puri", description: "Software Engineer" },
    // Add more profiles here
];

// Function to create and display profiles
function displayProfiles() {
    const profileList = document.getElementById("profile-list");

    profiles.forEach(profile => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${profile.name}</strong>: ${profile.description}`;
        profileList.appendChild(li);
    });
}

// Call the function to display profiles when the page loads
window.onload = displayProfiles;