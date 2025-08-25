
const GITHUB_USERNAME = "eherca0502"; 
const projectsContainer = document.getElementById("projects");


async function fetchGitHubProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
    const repos = await response.json();


    const filteredRepos = repos.filter(repo => !repo.fork);


    projectsContainer.innerHTML = filteredRepos.map(repo => `
      <div class="project-card">
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description ? repo.description : "Sin descripción"}</p>
        <span>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</span>
      </div>
    `).join("");
  } catch (error) {
    projectsContainer.innerHTML = "<p>Error al cargar proyectos 🚨</p>";
    console.error(error);
  }
}


fetchGitHubProjects();


const text = "I build things for the web";
const typingElement = document.querySelector(".typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); 
  }
}

window.addEventListener("load", typeWriter);
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});


