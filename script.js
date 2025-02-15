function generateCard() {
    const name = document.getElementById("name").value;
    const skills = document.getElementById("skills").value.split(",");
    const github = document.getElementById("github").value;

    const card = `
        <h2>${name}</h2>
        <p><strong>Skills:</strong> ${skills.join(", ")}</p>
        <a href="${github}" target="_blank">GitHub Profile</a>
    `;

    document.getElementById("profile-card").innerHTML = card;
}
