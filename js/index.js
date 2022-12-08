var today = new Date();
var thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");


copyright.innerHTML = `<center> Musab © ${thisYear} </center>`;

copyright.innerHTML = `<center> Musab ${thisYear} </center>`;

copyright.innerHTML = `Musab ${thisYear}`;


footer.appendChild(copyright);

const skills = ["Mathematic", "Phisic", "Chemstry", "Biology", "Astronomy", "Electric"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.lastElementChild;

for (let i = 0; i <= skills.length - 1; i++) {


    let skill = document.createElement("li");

    skill.innerHTML = skills[i];

    skillsList.appendChild(skill);



}

let messageForm = document.getElementById("leave_message");

messageForm.addEventListener("submit", function (event) {

    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let textMessage = event.target.message.value;
    console.log(`Entered name: ${name}`);
    console.log(`Entered email: ${email}`);

    let messageSection = document.getElementById("message");
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href= mailto:${email}>${name}</a> <span> wrote : ${textMessage}  </span>`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", (event) => {

        let entry = removeButton.parentNode;
        entry.parentNode.removeChild(entry);

    });

    newMessage.appendChild(removeButton);


    messageList.appendChild(newMessage);

    event.target.reset();

});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

