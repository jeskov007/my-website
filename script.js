// Array to store projects
let projects = [
    {
        name: "DRAWER",
        description: "Drawer is one of my first projects I made, it is a drawing app. How to use click to erase, and release to draw.(mouse needed)",
        link: "https://editor.p5js.org/Jes007kov/sketches/LxPMhbcVx"
    },
    {
        name: "Bouncing Link",
        description: "This is a satisfying app. You watch link bounce around hitting walls and change tint. How to use up and down arrows.",
        link: "https://editor.p5js.org/Jes007kov/sketches/e73kBIKQg"
    },
    {
        name: "Random Number",
        description: "This app randomizes a number between 1-1000. Just click the screen and the number will change.",
        link: "https://editor.p5js.org/Jes007kov/sketches/i8R5Oj-hv"
    },
   {
        name: "Magic 8 Ball",
        description: "This App bring to digital life the ball that you shake and it gives you an answer to a question you ask.",
        link: "https://editor.p5js.org/Jes007kov/sketches/nayTVbVxG"
    },
    {
        name: "Bouncing Link",
        description: "This is a satisfying app. You watch link bounce around hitting walls and change tint. How to use up and down arrows.",
        link: "https://editor.p5js.org/Jes007kov/sketches/e73kBIKQg"
    },
    {
        name: "Random Number",
        description: "This app randomizes a number between 1-1000. Just click the screen and the number will change.",
        link: "https://editor.p5js.org/Jes007kov/sketches/i8R5Oj-hv"
    },

    // Add more projects here (copy and paste above and edit)
];

// Function to display projects
function displayProjects() {
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.innerHTML = ""; // Clear previous projects

    projects.forEach((project, index) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}">View Project</a>` : ''}
            <button onclick="deleteProject(${index})">Delete</button>
        `;
        projectContainer.appendChild(projectDiv);
    });
}

function deleteProject(index) {
    projects.splice(index, 1);
    displayProjects();
}

// Initial display
document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
});

