import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "Hi, I'm",
        description:
          "Full-Stack Web Developer & Unreal Engine Developer crafting immersive digital experiences — from dynamic web apps to real-time 3D worlds.",
        scroll: "Scroll",
      },
      navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        resume: "Resume",
        contact: "Contact",
      },
      about: {
        title1: "About",
        title2: "Me",
        title3: "Passionate Web & Game Developer",
        body1:
          "I'm a Full-Stack Web Developer and Unreal Engine Developer with a passion for creating immersive digital experiences. My journey in web development began with a fascination for crafting dynamic web applications, and it has since evolved into a love for building real-time 3D worlds.",
        body2:
          "With a strong foundation in both front-end and back-end technologies, I thrive on the challenge of bringing ideas to life through code. Whether it's designing intuitive user interfaces or optimizing server-side performance, I approach each project with creativity and dedication.",
        button: "Contact Me",
        cardTitle1: "Software Development",
        cardTitle2: "UI/UX & Interaction Design",
        cardTitle3: "Game Development & Real-Time Systems",
        cardBody1:
          "Building responsive web apps, scalable backend systems, and immersive real-time applications using modern technologies.",
        cardBody2:
          "Crafting user-friendly interfaces and engaging interactions that enhance the overall user experience.",
        cardBody3:
          "Creating immersive experiences using Unreal Engine, combining C++ and Blueprint systems to build responsive gameplay, AI behaviors, and interactive environments.",
      },
      skills: {
        title1: "My",
        title2: "Skills",
        all: "All",
        programming: "Programming",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
      },
      projects: {
        featured: "Featured",
        projects: "Projects",
        text: "Here are some of my recent projects showcasing my skills and creativity.",
        barrientos: {
          description:
            "Website for capturing and selling rural fields with catalog, gallery with lightbox and swipe on mobile, interactive map, and admin panel (CRUD, validations, and image/video upload).",
        },
      },
      resume: {
        title1: "My",
        title2: "Resume",
        title3: "Experience",
        title4: "Languages",
        title5: "Education",
        jobTitle1: "Frontend Web Developer (Internship)",
        jobDuration1: "December 2024 - February 2025",
        technologies: "Technologies:",
        english: "English",
        spanish: "Spanish",
        englishLevel: "Upper intermediate",
        spanishLevel: "Native",
        educationTitle1: "Diploma in Full Stack Web Development",
        educationTitle2:
          "Postgraduate Certificate in Video Game Programming with Unreal Engine",
        educationTitle3: "3D Design with Blender",
        educationDuration1: "August 2024 - Present",
        educationDuration2: "September 2022 - January 2023",
        educationDuration3: "September 2023 - November 2023",
      },
      contact: {
        title1: "Contact",
        title2: "Me",
        title3: "Contact Information",
        title4: "Connect with Me",
        body: "If you have a project in mind or want to collaborate, feel free to reach out! I'm always open to discussing new ideas and opportunities.",
        phone: "Phone",
        location: "Location",
      },
      footer: {
        rights: "Alvaro Manterola - All rights reserved",
      },
    },
  },
  es: {
    translation: {
      hero: {
        greeting: "Hola, soy",
        description:
          "Desarrollador Web Full-Stack y Desarrollador de Unreal Engine creando experiencias digitales inmersivas — desde aplicaciones web dinámicas hasta mundos 3D en tiempo real.",
        scroll: "Desplázate",
      },
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        resume: "Currículum",
        contact: "Contacto",
      },
      about: {
        title1: "Sobre",
        title2: "Mí",
        title3: "Desarrollador Web y de Juegos Apasionado",
        body1:
          "Soy un Desarrollador Web Full-Stack y Desarrollador de Unreal Engine con una pasión por crear experiencias digitales inmersivas. Mi viaje en el desarrollo web comenzó con una fascinación por crear aplicaciones web dinámicas, y desde entonces ha evolucionado hacia un amor por construir mundos 3D en tiempo real.",
        body2:
          "Con una sólida base en tecnologías tanto de front-end como de back-end, disfruto del desafío de dar vida a las ideas a través del código. Ya sea diseñando interfaces de usuario intuitivas o optimizando el rendimiento del servidor, abordo cada proyecto con creatividad y dedicación.",
        button: "Contáctame",
        cardTitle1: "Desarrollo de Software",
        cardTitle2: "Diseño UI/UX e Interacción",
        cardTitle3: "Desarrollo de Juegos y Sistemas en Tiempo Real",
        cardBody1:
          "Construyendo aplicaciones web responsivas, sistemas backend escalables y aplicaciones inmersivas en tiempo real utilizando tecnologías modernas.",
        cardBody2:
          "Creando interfaces amigables para el usuario e interacciones atractivas que mejoran la experiencia general.",
        cardBody3:
          "Creando experiencias inmersivas utilizando Unreal Engine, combinando clases C++ y Blueprints para obtener jugabilidad responsiva, comportamientos de IA y entornos interactivos.",
      },
      skills: {
        title1: "Mis",
        title2: "Habilidades",
        all: "Todas",
        programming: "Programación",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
      },
      projects: {
        featured: "Destacados",
        projects: "Proyectos",
        text: "Aquí están algunos de mis proyectos recientes que muestran mis habilidades y creatividad.",
        barrientos: {
          description:
            "Sitio para captar y vender campos rurales con catálogo, galería con lightbox y swipe en mobile, mapa interactivo, y panel de administración (CRUD, validaciones y carga de imágenes/videos)."
        },
      },
      resume: {
        title1: "Mi",
        title2: "Currículum",
        title3: "Experiencia",
        title4: "Idiomas",
        title5: "Educación",
        jobTitle1: "Desarrollador Web Frontend (Pasantía)",
        jobDuration1: "Diciembre 2024 - Febrero 2025",
        technologies: "Tecnologías:",
        english: "Inglés",
        spanish: "Español",
        englishLevel: "Intermedio alto",
        spanishLevel: "Nativo",
        educationTitle1: "Diploma en Desarrollo Web Full Stack",
        educationTitle2:
          "Certificado de Posgrado en Programación de Videojuegos con Unreal Engine",
        educationTitle3: "Diseño 3D con Blender",
        educationDuration1: "Agosto 2024 - Presente",
        educationDuration2: "Septiembre 2022 - Enero 2023",
        educationDuration3: "Septiembre 2023 - Noviembre 2023",
      },
      contact: {
        title1: "Ponte en",
        title2: "Contacto",
        title3: "Información de Contacto",
        title4: "Conecta conmigo",
        body: "Si tienes un proyecto en mente o quieres colaborar, ¡no dudes en ponerte en contacto! Siempre estoy abierto a discutir nuevas ideas y oportunidades.",
        phone: "Teléfono",
        location: "Ubicación",
      },
      footer: {
        rights: "Alvaro Manterola - Todos los derechos reservados",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
