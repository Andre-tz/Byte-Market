import { IoIosLaptop } from "react-icons/io";
import { FiCpu } from "react-icons/fi";
import { CiDesktopMouse2, CiMonitor } from "react-icons/ci";
import { FaHourglassEnd, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdSupportAgent, MdOutlineSecurity } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-10 py-8">
        <section id="hero" aria-label={t("home.hero.aria")}className="rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">{t("home.hero.badge")}</p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-100 md:text-5xl">{t("home.hero.title")}</h1>
            <p className="mt-4 max-w-2xl text-slate-300">{t("home.hero.subtitle")}</p>
        
            <div className="mt-6 flex flex-wrap gap-3">
                <Link to={"/catalog"}><button className="cursor-pointer rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">{t("home.hero.primaryButton")}</button> </Link>
                <button className="cursor-pointer rounded-lg border border-cyan-400/40 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800">{t("home.hero.secondaryButton")}</button>
            </div>
        </section>

        <section id="categorias" aria-label={t("home.categories.aria")} className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-100">{t("home.categories.title")}</h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <IoIosLaptop className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">{t("home.categories.laptops.title")}</p>
                    <p className="mt-1 text-sm text-slate-400">{t("home.categories.laptops.description")}</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <FiCpu className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">{t("home.categories.components.title")}</p>
                    <p className="mt-1 text-sm text-slate-400">{t("home.categories.components.description")}</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <CiDesktopMouse2 className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">{t("home.categories.peripherals.title")}</p>
                    <p className="mt-1 text-sm text-slate-400">{t("home.categories.peripherals.description")}</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <CiMonitor className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">{t("home.categories.monitors.title")}</p>
                    <p className="mt-1 text-sm text-slate-400">{t("home.categories.monitors.description")}</p>
                </article>

            </div>
        </section>

        <section id="destacados" aria-label={t("home.featured.aria")} className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">{t("home.featured.title")}</h2>
            <p className="mt-2 text-slate-400">{t("home.featured.subtitle")}</p>
            <div className="mt-4"><button className="rounded-lg border border-cyan-400/40 bg-slate-950 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800">{t("home.featured.button")}</button></div>
        </section>

        <section id="beneficios" aria-label={t("home.benefits.aria")} className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-100">{t("home.benefits.title")}</h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <FaHourglassEnd />
                        <p className="font-semibold text-slate-100">{t("home.benefits.shipping.title")}</p>
                    </div>
                    <p className="text-sm text-slate-400">{t("home.benefits.shipping.description")}</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <MdOutlineSecurity />
                        <p className="font-semibold text-slate-100">{t("home.benefits.securePayment.title")}</p>
                    </div>
                    <p className="text-sm text-slate-400">{t("home.benefits.securePayment.description")}</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <MdSupportAgent />
                        <p className="font-semibold text-slate-100">{t("home.benefits.support.title")}</p>
                    </div>
                    <p className="text-sm text-slate-400">{t("home.benefits.support.description")}</p>
                 </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <FaRegMoneyBillAlt />
                        <p className="font-semibold text-slate-100">{t("home.benefits.warranty.title")}</p>
                    </div>
                    <p className="text-sm text-slate-400">{t("home.benefits.warranty.description")}</p>
                </article>

            </div>
        </section>

         <section id="ofertas" aria-label={t("home.offers.aria")}className="rounded-xl border border-cyan-400/20 bg-gradient-to-r from-slate-900 to-slate-950 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">{t("home.offers.title")}</h2>
            <p className="mt-2 max-w-2xl text-slate-400">{t("home.offers.subtitle")}</p>
            <div className="mt-4"><button className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">{t("home.offers.button")}</button></div>
        </section>

        <section id="newsletter" aria-label={t("home.newsletter.aria")} className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">{t("home.newsletter.title")}</h2>
            <p className="mt-2 text-slate-400">{t("home.newsletter.subtitle")}</p>

            <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center" action="#">
                <label htmlFor="news" className="sr-only">{t("home.newsletter.label")}</label>
                <input type="email" id="news" placeholder={t("home.newsletter.placeholder")} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-400 placeholder:text-slate-500 focus:ring-2 sm:max-w-sm"/>
                <button className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">{t("home.newsletter.button")}</button>
            </form>
        </section>

        <section aria-label={t("home.closing.aria")} className="pb-2 text-center text-slate-400">
            <p>{t("home.closing.text")}</p>
        </section>
        
    </main>
  );
};

export default Home;
