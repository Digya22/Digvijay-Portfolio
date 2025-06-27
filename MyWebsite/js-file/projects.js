// document.getElementById('blind').addEventListener('click', function() {
//     document.getElementById('to-blind').style.display = 'none';
//     document.getElementById('to-project').style.display = 'block';
// });

// document.getElementById('backToHomeBtn').addEventListener('click', function() {
//     document.getElementById('to-project').style.display = 'none';
//     document.getElementById('to-blind').style.display = 'block';
// });





const projects = {
    "to-blind": {
        title: "Object Detection for Blind Person ",
        description: "Here we will create a stand alone system using rasperry pi, PiCamera and ultrasonic sensor to detect and name the objects in the path of blind person and give a voice output about it.The end product would be a wearable device that a blind person can wear on his/her head.",
        image: "image/blind/blind1.jpg",
        extraInfo:"",
        githubLink: "https://github.com/Digya22/Object-Detection-for-Blind-Person"
        
    },
    "ai-bot": {
        title: "GEN-AI-based-Interview-Bot",
        description: "Created a bot that takes interview of candidate and generate it's score, answer to the questions.Also gives the ideal solution to the particular question. So candidate can check it's answer and how to to give exact answer. which makes candidate prepared for the interview.",
        image: "image/ai bot.jpg",
        extraInfo:"",
        githubLink: "https://github.com/Digya22/GEN-AI-based-Interview-Bot"
    },
    "sign-lang": {
        title: "Voice to Sign Language Converter",
        description: "This project aims to provide a solution for converting voice messages into sign language, making it accessible to deaf individuals. The application utilizes Flask for the backend, while the frontend is developed using simple HTML, CSS, and JavaScript.",
        image: "image/image (5).png",
        extraInfo:"",
        githubLink: "https://github.com/Digya22/Voice-to-Signs-for-Deaf-people"
    },
    "auto-paper": {
        title: "Automatic-Question-Paper-Generator",
        description: "This project can create quetions papers automatically on providing some input such as Subject, No. of main Questions,Modules,marks of question ,etc.This project will help teachers by automatically creating papers for them according to their choice.",
        image: "image/paper/logo.png",
        extraInfo:"",
        githubLink: "https://github.com/Digya22/Automatic-Question-Paper-Generator-Website"
    }
};

const projectItems = document.querySelectorAll(".project-item");
const projectDetailsSection = document.getElementById("project-details-section");
const projectsSection = document.getElementById("projects-section");

const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-image");
const projectExtraInfo = document.getElementById("project-extra-info");
const projectGithub = document.getElementById("project-github");


const backToProjects = document.getElementById("backToProjects");

// Click event for project items
projectItems.forEach(item => {
    item.addEventListener("click", function () {
        const projectKey = this.getAttribute("data-project");
        const projectData = projects[projectKey];

        // Set project details
        projectTitle.textContent = projectData.title;
        projectDescription.textContent = projectData.description;
        projectImage.src = projectData.image;
        projectExtraInfo.textContent = projectData.extraInfo;
        projectGithub.href = projectData.githubLink; // Set GitHub link
        projectGithub.style.display = "block";

         

        // Show project details and hide grid
        projectsSection.style.display = "none";
        projectDetailsSection.style.display = "block";
        
    });
});

// Back button functionality
backToProjects.addEventListener("click", function () {
    projectDetailsSection.style.display = "none";
    projectsSection.style.display = "block";
});


