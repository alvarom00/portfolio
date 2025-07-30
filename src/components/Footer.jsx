import { useTranslation } from "react-i18next"

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} {t("footer.rights")}</p>
        </footer>
    )
}