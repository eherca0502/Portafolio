const GITHUB_USERNAME = "eherca0502";

const projectsContainer = document.getElementById("projects");


const featuredProjects = [
    "Portafolio",
    "paginawebcyclo",
    "Sistema-Restaurante"
];

async function fetchGitHubProjects() {
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        );

        if (!response.ok) {
            throw new Error("No se pudieron cargar los repositorios");
        }

        const repos = await response.json();

        const filteredRepos = repos.filter(repo =>
            !repo.fork &&
            !featuredProjects.includes(repo.name)
        );

        if (filteredRepos.length === 0) {
            projectsContainer.innerHTML = `
                <p class="github-loading">
                    Aún no hay más proyectos públicos disponibles.
                </p>
            `;
            return;
        }

        projectsContainer.innerHTML = filteredRepos.map(repo => `
            <article class="project-card github-project-card">

                <div class="github-project-icon">
                    <i class="fa-brands fa-github"></i>
                </div>

                <div class="project-content">

                    <h3>${repo.name.replace(/[-_]/g, " ")}</h3>

                    <p>
                        ${repo.description
                            ? repo.description
                            : "Proyecto disponible en mi repositorio de GitHub."
                        }
                    </p>

                    <span class="project-tech">
                        <i class="fa-solid fa-code"></i>
                        ${repo.language ? repo.language : "Código"}
                    </span>

                    <div class="project-links">

                        <a href="${repo.html_url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="github-link">

                            <i class="fa-brands fa-github"></i>
                         <span data-key="verCodigo">Ver código</span>
                        </a>

                    </div>

                </div>

            </article>
        `).join("");
        setLanguage(currentLang);

    } catch (error) {
        console.error(error);

        projectsContainer.innerHTML = `
            <p class="github-loading">
                No se pudieron cargar los proyectos de GitHub.
            </p>
        `;
    }
}

fetchGitHubProjects();