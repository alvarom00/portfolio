import { ExternalLink, Github } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import barrientosImg from "../assets/projects/barrientos.png";

export const ProjectsSection = () => {
  const { t, i18n } = useTranslation();

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Campos Barrientos",
        description: t("projects.barrientos.description"),
        image: barrientosImg,
        tags: ["React (TypeScript)", "Tailwind CSS", "Node.js", "MongoDB"],
        demoUrl: "https://camposbarrientos.com",
        githubUrl: "https://github.com/alvarom00/barrientos-frontend",
      },
    ],
    [t, i18n.language]
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {i18n.language === "en" ? (
            <>
              {t("projects.featured")}{" "}
              <span className="text-primary">{t("projects.projects")}</span>
            </>
          ) : (
            <>
              <span className="text-primary">{t("projects.projects")}</span>{" "}
              {t("projects.featured")}
            </>
          )}
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.text")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border bg-primary/20 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="mb-4">{t("projects.barrientos.description")}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <Github size={20} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
