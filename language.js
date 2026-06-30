const translations = {

    es: {

        language: "ES",

        inicio: "Inicio",
        sobre: "Sobre Mí",
        tecnologias: "Tecnologías",
        experiencia: "Experiencia",
        cursos: "Cursos",
        proyectos: "Proyectos",
        github: "GitHub",
        contacto: "Contacto",

        descargar: "Descargar CV",

        disponible: "Disponible para nuevos proyectos",

        ingeniero: "Ingeniero Informático",

        descripcion:
            "Transformo ideas en experiencias digitales modernas mediante aplicaciones web, sistemas empresariales y soluciones tecnológicas diseñadas para crecer.",

        verproyectos: "Ver proyectos",

        problem: "Resolutor de Problemas y Desarrollado",

        desarrolloTitulo: "Desarrollo Web",

        desarrolloTexto:
            "Desarrollo aplicaciones web modernas, rápidas y escalables utilizando tecnologías actuales y buenas prácticas.",

        sistemaTitulo: "Sistemas Empresariales",

        sistemasTexto:
            "Diseño soluciones digitales enfocadas en automatizar procesos y optimizar operaciones.",

        baseTitulo: "Bases de Datos",

        basesTexto:
            "Estructuras seguras y eficientes para aplicaciones de cualquier tamaño.",

        herramientas: "Herramientas que utilizo",

        experienciaTitulo: "Experiencia Profesional",

        experienciaTexto:
            "Experiencia en desarrollo web, soporte técnico e implementación de soluciones empresariales durante prácticas profesionales y residencia.",

        formacion: "Formación",

        cursosTitulo: "Cursos y Certificaciones",

        cursosTexto:
            "Cursos y certificaciones orientadas al desarrollo web, programación, análisis de datos y soluciones digitales.",

        portafolio: "Portafolio",

        proyectosTitulo: "Proyectos Destacados",

        githubTitulo: "Más proyectos y prácticas",

        githubTexto:
            "Repositorios públicos con proyectos, prácticas y ejercicios desarrollados durante mi formación como Ingeniero Informático.",

        contactoTitulo: "¿Tienes un proyecto en mente?",

        contactoTexto:
            "Estoy disponible para colaborar en nuevos proyectos y desarrollar soluciones digitales modernas.",

        footer:
            "© 2026 Eduardo Hernández. Todos los derechos reservados.",

        verExperiencia: "Ver Experiencia",
        verCertificado:"Ver Certificado",

        ocultarExperiencia: "Ocultar experiencia",
        exp1_1: "Desarrollo de página web informativa utilizando PHP y MySQL.",
exp1_2: "Integración con WhatsApp Business para captación de clientes.",
exp1_3: "Implementación de plataforma e-commerce conectada con ERP Odoo.",
exp1_4: "Integración de Stripe para pagos en línea.",
exp1_5: "Automatización del envío de facturas electrónicas al cliente.",
exp1_6: "Notificaciones automáticas por correo a la empresa después de cada compra.",

exp2_1: "Atención a usuarios mediante sistema de tickets.",
exp2_2: "Instalación y configuración de sistemas operativos.",
exp2_3: "Configuración de impresoras y equipos.",
exp2_4: "Elaboración de cableado de red.",
exp2_5: "Cambio de teclados y baterías en equipos portátiles.",
exp2_6: "Clonación de discos duros para despliegue de sistemas.",
proyecto1Descripcion: "Desarrollo de sitio web corporativo para una empresa real, enfocado en diseño moderno, experiencia de usuario y presencia digital profesional.",
proyecto2Descripcion:"Plataforma web para la gestión de pedidos, productos, clientes y administración del negocio.",
proyecto3Descripcion:"Sitio web responsivo desarrollado para mostrar experiencia profesional, habilidades técnicas y proyectos.",
verCodigo: "Ver código",
  
    },

    en: {

        language: "EN",

        inicio: "Home",
        sobre: "About Me",
        tecnologias: "Technologies",
        experiencia: "Experience",
        cursos: "Courses",
        proyectos: "Projects",
        github: "GitHub",
        contacto: "Contact",

        descargar: "Download CV",

        disponible: "Available for new projects",

        ingeniero: "Computer Engineer",

        descripcion:
            "I transform ideas into modern digital experiences through web applications, business systems and scalable technology solutions.",

        verproyectos: "View Projects",

        problem: "Problem Solver & Developer",

        desarrolloTitulo: "Web Development",

        desarrolloTexto:
            "I develop modern, fast and scalable web applications using current technologies and best practices.",

        sistemaTitulo: "Business Systems",

        sistemasTexto:
            "I design digital solutions focused on automating processes and optimizing business operations.",

        baseTitulo: "Databases",

        basesTexto:
            "Secure and efficient database structures for applications of any size.",

        herramientas: "Technologies I Use",

        experienciaTitulo: "Professional Experience",

        experienciaTexto:
            "Experience in web development, technical support and implementation of business solutions during internships and residency.",

        formacion: "Education",

        cursosTitulo: "Courses & Certifications",

        cursosTexto:
            "Courses and certifications focused on web development, programming, data analysis and digital solutions.",

        portafolio: "Portfolio",

        proyectosTitulo: "Featured Projects",

        githubTitulo: "More Projects & Practice",

        githubTexto:
            "Public repositories with projects, practice exercises and software developed during my Computer Engineering studies.",

        contactoTitulo: "Do you have a project in mind?",

        contactoTexto:
            "I'm available to collaborate on new projects and develop modern digital solutions.",

        footer:
            "© 2026 Eduardo Hernández. All rights reserved.",

        verExperiencia: "View Experience",
        verCertificado:"View Certificate",

        ocultarExperiencia: "Hide Experience",
        exp1_1: "Development of an informational website using PHP and MySQL.",
exp1_2: "Integration with WhatsApp Business for customer acquisition.",
exp1_3: "E-commerce platform integrated with ERP Odoo.",
exp1_4: "Stripe payment integration.",
exp1_5: "Automation of electronic invoice delivery to clients.",
exp1_6: "Automatic email notifications to the company after each purchase.",

exp2_1: "User support through ticket system.",
exp2_2: "Operating system installation and configuration.",
exp2_3: "Printer and equipment configuration.",
exp2_4: "Network cabling installation.",
exp2_5: "Keyboard and laptop battery replacement.",
exp2_6: "Hard drive cloning for system deployment.",
proyecto1Descripcion:"Development of a corporate website for a real company, focused on modern design, user experience, and professional digital presence.",
proyecto2Descripcion:"Web platform for managing orders, products, customers, and business administration.",
proyecto3Descripcion: "Responsive website developed to showcase professional experience, technical skills, and projects.",
  verCodigo: "View Code",
    }


};

function toggleLanguage() {
    const newLang = currentLang === "es" ? "en" : "es";

    setLanguage(newLang);

    const btn = document.getElementById("language-btn");
    btn.textContent = newLang.toUpperCase();
}
let currentLang = "es";


function setLanguage(lang) {
    currentLang = lang;

    const t = translations[lang];

    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");

        if (t[key]) {
            el.textContent = t[key];
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
});