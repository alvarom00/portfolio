import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { createPortal } from "react-dom";

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "resume", href: "#resume" },
  { key: "contact", href: "#contact" },
];

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <HashLink
              key={item.key}
              smooth
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t("navbar." + item.key)}
            </HashLink>
          ))}
        </div>

        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        )}

        {createPortal(
          <>
            {/* Fondo de blur, sin transición */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-40 bg-background/60 backdrop-blur-lg" />
            )}

            {/* Contenido del menú con animación */}
            <div
              className={cn(
                "fixed top-0 left-0 w-screen h-screen z-50 md:hidden flex items-center justify-center",
                "transition-opacity duration-300",
                isMenuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 left-5 p-2 text-foreground"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-8 text-xl z-10">
                {navItems.map((item, key) => (
                  <HashLink
                    key={key}
                    smooth
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {t("navbar." + item.key)}
                  </HashLink>
                ))}
              </div>
            </div>
          </>,
          document.body
        )}
      </div>
    </nav>
  );
};
