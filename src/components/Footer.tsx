import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-10 border-t border-cyan-400/20 bg-slate-950 text-slate-300">
        <div className="mx-auto grid w-[min(1200px,94%)] gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">

            <section>
                <p className="text-lg font-semibold text-slate-100">{t("footer.brand.name")}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{t("footer.brand.description")}</p>
            </section>

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">{t("footer.quickLinks.title")}</p>
                <nav className="mt-3" aria-label={t("footer.quickLinks.aria")}>
                    <ul className="space-y-2 text-sm">
                        <li><a className="transition hover:text-cyan-300" href="#">{t("footer.quickLinks.home")}</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">{t("footer.quickLinks.laptops")}</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">{t("footer.quickLinks.components")}</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">{t("footer.quickLinks.peripherals")}</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">{t("footer.quickLinks.offers")}</a></li>
                    </ul>
                </nav>
            </section>

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">{t("footer.support.title")}</p>
                <ul className="mt-3 space-y-2 text-sm">
                    <li><a className="transition hover:text-cyan-300" href="#">{t("footer.support.faq")}</a></li>
                    <li><a className="transition hover:text-cyan-300" href="#">{t("footer.support.shipping")}</a></li>
                    <li><a className="transition hover:text-cyan-300" href="#">{t("footer.support.returns")}</a></li>
                    <li><a className="transition hover:text-cyan-300" href="#">{t("footer.support.technical")}</a></li>
                </ul>
            </section>

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">{t("footer.community.title")}</p>
                <p className="mt-3 text-sm">{t("footer.community.githubLabel")}{" "}<a href="https://github.com/Andre-tz"target="_blank"rel="noreferrer" className="text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition hover:text-cyan-200">itsAndreDev</a></p>
            </section>

        </div>

        <div className="border-t border-slate-800">
            <div className="mx-auto flex w-[min(1200px,94%)] flex-col gap-2 py-4 text-xs text-slate-500 sm:flex-row sm:justify-between">
                <p>{t("footer.bottom.copyright")}</p>
                <p>{t("footer.bottom.madeBy")}</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
