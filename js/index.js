var today = new Date();
var thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `Musab ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Mathematic", "Phisic", "Chemstry", "Biology", "Astronomy", "Electric"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.lastElementChild;

for (let i = 0; i <= skills.length; i++) {


    let skill = document.createElement("li");

    skill.innerHTML = skills[i];

    skillsList.appendChild(skill);


}