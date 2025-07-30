import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../lib/i18n";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {i18n.language === "en" ? (
            <>
              <span className="text-primary">{t("contact.title1")}</span>{" "}
              {t("contact.title2")}
            </>
          ) : (
            <>
              {t("contact.title1")}{" "}
              <span className="text-primary">{t("contact.title2")}</span>
            </>
          )}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.body")}
        </p>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6 pb-4">
            {t("contact.title3")}
          </h3>

          <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 items-start md:items-start space-y-8 md:space-y-0">
            <div className="w-full max-w-md space-y-6">
              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:alvaromanterola00@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alvaromanterola00@gmail.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.phone")}</h4>
                  <a
                    href="tel:+5492916435736"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +54 9 291 643 5736
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{t("contact.location")}</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Bahía Blanca, Buenos Aires, Argentina.
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xs">
              <h4 className="font-medium mb-4 text-center md:text-left">
                {t("contact.title4")}
              </h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/alvaro-manterola/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.github.com/alvarom00"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
