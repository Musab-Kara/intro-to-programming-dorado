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

let messageForm = document.getElementsByName("leave_message");
messageForm.addEventListener('submit', function (event) {

    let name = event.target.name;
    let email = event.target.email;
    let message = event.target.message;

    return console.log(name, email, message);



});
