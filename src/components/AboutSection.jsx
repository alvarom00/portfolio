import { Code, Joystick, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("about.title1")}{" "}
          <span className="text-primary">{t("about.title2")}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t("about.title3")}</h3>
            <p className="text-muted-foreground">{t("about.body1")}</p>
            <p className="text-muted-foreground">{t("about.body2")}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <HashLink smooth to="#contact" className="cosmic-button">
                {t("about.button")}
              </HashLink>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.cardTitle1")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.cardBody1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.cardTitle2")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.cardBody2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {t("about.cardTitle3")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.cardBody3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
