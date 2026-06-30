document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".experience-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".experience-card");

            card.classList.toggle("active");

            if(card.classList.contains("active")){

                button.innerHTML = `
                    <i class="fa-solid fa-chevron-up"></i>
                    <span data-key="ocultarExperiencia">Ocultar Experiencia</span>
                `;

            }else{

                button.innerHTML = `
                    <i class="fa-solid fa-chevron-down"></i>
                    <span data-key="verExperiencia">Ver Experiencia</span>
                `;

            }
                 setLanguage(currentLang);

        });

    });

});