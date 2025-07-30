import { useTranslation } from "react-i18next";

export const ResumeSection = () => {

const { t } = useTranslation();

const experience = [
  {
    title: t("resume.jobTitle1"),
    technologies: "TypeScript, React, Next.js, Tailwind CSS, Amazon Web Services, Git",
    company: "Eycon SA",
    duration: t("resume.jobDuration1"),
  },
];

const education = [
    {
        title: t("resume.educationTitle1"),
        institution: "Coderhouse",
        duration: t("resume.educationDuration1")
    },
    {
        title: t("resume.educationTitle2"),
        institution: "UTN, FRBA",
        duration: t("resume.educationDuration2")
    },
    {
        title: t("resume.educationTitle3"),
        institution: "Coderhouse",
        duration: t("resume.educationDuration3")
    }
]

  return (
    <section id="resume" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("resume.title1")} <span className="text-primary">{t("resume.title2")}</span>
        </h2>

        <h3 className="text-2xl font-semibold mb-6 pb-4">{t("resume.title3")}</h3>

        <div className="grid grid-cols-1 gap-6 pb-8">
          {experience.map((job, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              <div className="text-left mb-2">
                <h3 className="text-lg font-semibold text-primary">
                  {job.title}
                </h3>
                <p className="text-muted-foreground text-sm italic">
                  {job.company}
                </p>
                <p className="text-muted-foreground text-sm">{job.duration}</p>
              </div>
              <div className="mt-2 text-left">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{t("resume.technologies")}</span>{" "}
                  {job.technologies}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-6 pb-4">{t("resume.title4")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-60 pb-8">
                <div className="bg-card p-6 rounded-lg shadow-xs card-cover">
                    <h4 className="font-semibold text-lg">{t("resume.english")}</h4>
                    <p className="text-muted-foreground">{t("resume.englishLevel")}</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-xs card-cover">
                    <h4 className="font-semibold text-lg">{t("resume.spanish")}</h4>
                    <p className="text-muted-foreground">{t("resume.spanishLevel")}</p>
                </div>
            </div>
        <h3 className="text-2xl font-semibold mb-6 pb-4">{t("resume.title5")}</h3>

        <div className="grid grid-cols-1 gap-6">
          {education.map((course, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md transition-all hover:shadow-lg"
            >
              <div className="text-left mb-2">
                <h3 className="text-lg font-semibold text-primary">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm italic">
                  {course.institution}
                </p>
                <p className="text-muted-foreground text-sm">{course.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
