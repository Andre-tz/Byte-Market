import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbShoppingBagCheck } from "react-icons/tb";

const AccountPage = () => {
  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-8 py-8">
        <section className="relative overflow-hidden rounded-4xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)] ring-1 ring-white/5">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-40 bg-linear-to-r from-cyan-400/10 to-transparent" />
            <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">Byte Market Account</span>
            <h1 className="relative max-w-3xl text-3xl font-bold leading-tight text-slate-100 md:text-5xl">Tu cuenta en Byte Market</h1>
            <p className="relative mt-4 max-w-2xl text-slate-300">Todo en un solo lugar. Inicia sesión para acceder a tus pedidos y favoritos, o crea una cuenta para disfrutar una experiencia de compra más rápida y personalizada.</p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
            <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent opacity-60" />
                <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/15" />
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/18 to-cyan-400/8 text-2xl text-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.12)]"><FiLogIn /></div>

                <div>
                    <span className="inline-flex rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Acceso rápido</span>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-100">Ya soy cliente</h3>
                    <p className="mt-3 max-w-md text-slate-400">Entra a tu cuenta para continuar con tus compras y consultar tu información.</p>
                </div>

                <div className="mt-6">
                    <button className="w-full cursor-pointer rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.2)] transition hover:bg-cyan-300 hover:shadow-[0_18px_34px_rgba(34,211,238,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Iniciar Sesión</button>
                </div>
            </article>

            <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_45px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/60 to-transparent opacity-60" />
                <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition duration-300 group-hover:bg-cyan-400/15" />
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/18 to-cyan-400/8 text-2xl text-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.12)]"><FaUserPlus /></div>

                <div>
                    <span className="inline-flex rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">Nuevo usuario</span>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-100">Quiero crear mi cuenta</h3>
                    <p className="mt-3 max-w-md text-slate-400">Regístrate gratis y empieza a guardar productos, gestionar pedidos y comprar con mayor facilidad.</p>
                </div>

                <div className="mt-6">
                    <button className="w-full cursor-pointer rounded-xl border border-cyan-400/35 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Crear cuenta</button>
                </div>
            </article>
        </section>

        <section className="relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-linear-to-br from-slate-900/90 to-slate-950 p-6 ring-1 ring-white/5">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/18 to-cyan-400/8 text-2xl text-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.12)]"><IoMdCheckboxOutline /></div>
            <h3 className="text-2xl font-semibold text-slate-100">¿Por qué crear una cuenta?</h3>
            
            <div>
                <ul className="mt-4 space-y-3 text-slate-400">
                    <li className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />Guarda tus productos favoritos para revisarlos después.
                    </li>
                    <li className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />Consulta el estado y el historial de tus pedidos.
                    </li>
                    <li className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />Compra más rápido con tus datos guardados.
                    </li>
                    <li className="flex items-start gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />Recibe una experiencia más personalizada en la tienda.
                    </li>
                </ul>
            </div>
        </section>

        <section className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-linear-to-r from-slate-900 to-slate-950 p-6 shadow-[0_0_35px_rgba(34,211,238,0.07)] ring-1 ring-cyan-400/10">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-linear-to-l from-cyan-400/10 to-transparent" />
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/18 to-cyan-400/8 text-2xl text-cyan-300 shadow-[0_10px_30px_rgba(34,211,238,0.12)]"><TbShoppingBagCheck /></div>
            <h3 className="text-2xl font-semibold text-slate-100">Compra con seguridad</h3>
            <p className="mt-3 max-w-3xl text-slate-400">Tu información personal y tus datos de compra se gestionan de forma segura para brindarte una experiencia confiable dentro de Byte Market.</p>
        </section>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/50 px-6 py-5 text-center text-slate-400">
            <p>Haz que tu experiencia en Byte Market sea más rápida, cómoda y personalizada desde tu cuenta.</p>
        </div>
    </main>
  );
};

export default AccountPage;
