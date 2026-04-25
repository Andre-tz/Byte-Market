import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbShoppingBagCheck } from "react-icons/tb";

const AccountPage = () => {
  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-8 py-8">
        <section className="rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-100 md:text-5xl">Tu cuenta en Byte Market</h1>
            <p className="mt-4 max-w-2xl text-slate-300">Todo en un solo lugar. Inicia sesión para acceder a tus pedidos y favoritos, o crea una cuenta para disfrutar una experiencia de compra más rápida y personalizada.</p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300"><FiLogIn /></div>

                <div>
                    <h3 className="text-2xl font-semibold text-slate-100">Ya soy cliente</h3>
                    <p className="mt-3 text-slate-400">Entra a tu cuenta para continuar con tus compras y consultar tu información.</p>
                </div>

                <div className="mt-6">
                    <button className="w-full cursor-pointer rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Iniciar Sesión</button>
                </div>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/40 hover:bg-slate-900">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300"><FaUserPlus /></div>
                <div>
                    <h3 className="text-2xl font-semibold text-slate-100">Quiero crear mi cuenta</h3>
                    <p className="mt-3 text-slate-400">Regístrate gratis y empieza a guardar productos, gestionarpedidos y comprar con mayor facilidad.</p>
                </div>
    
                <div className="mt-6">
                    <button className="w-full cursor-pointer rounded-lg border border-cyan-400/35 bg-slate-950 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Crear cuenta</button>
                </div>

            </article>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300"><IoMdCheckboxOutline /></div>
            <h3 className="text-2xl font-semibold text-slate-100">¿Por qué crear una cuenta?</h3>
            <div>
                <ul className="mt-4 space-y-3 text-slate-400">
                    <li>Guarda tus productos favoritos para revisarlos después.</li>
                    <li>Consulta el estado y el historial de tus pedidos.</li>
                    <li>Compra más rápido con tus datos guardados.</li>
                    <li>Recibe una experiencia más personalizada en la tienda.</li>
                </ul>
            </div>
        </section>

        <section className="rounded-2xl border border-cyan-400/20 bg-linear-to-r from-slate-900 to-slate-950 p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-300"><TbShoppingBagCheck /></div>
            <h3 className="text-2xl font-semibold text-slate-100">Compra con seguridad</h3>
            <p className="mt-3 max-w-3xl text-slate-400">Tu información personal y tus datos de compra se gestionan de forma segura para brindarte una experiencia confiable dentro de Byte Market.</p>
        </section>

        <div className="pb-2 text-center text-slate-400">
            <p>Haz que tu experiencia en Byte Market sea más rápida, cómoda y personalizada desde tu cuenta.</p>
        </div>
    </main>
  );
};

export default AccountPage;
