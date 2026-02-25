import { IoIosLaptop } from "react-icons/io";
import { FiCpu } from "react-icons/fi";
import { CiDesktopMouse2, CiMonitor } from "react-icons/ci";
import { FaHourglassEnd, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdSupportAgent, MdOutlineSecurity } from "react-icons/md";

const Home = () => {
  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-10 py-8">
        <section id="hero" aria-label="Hero principal"className="rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">Byte Market</p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-100 md:text-5xl">Potencia tu setup con tecnologia de alto rendimiento</h1>
            <p className="mt-4 max-w-2xl text-slate-300">Descubre laptops, componentes y perifericos seleccionados para gaming, productividad y creacion de contenido.</p>
        
            <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Ver productos</button>
                <button className="rounded-lg border border-cyan-400/40 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800">Arma tu PC  </button>
            </div>
        </section>

        <section id="categorias" aria-label="Categorias destacadas" className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-100">Compra por categoria</h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <IoIosLaptop className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">Laptops</p>
                    <p className="mt-1 text-sm text-slate-400">Ultrabooks, gaming y estaciones de trabajo.</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <FiCpu className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">Componentes</p>
                    <p className="mt-1 text-sm text-slate-400">GPU, CPU, RAM, placas madre y almacenamiento.</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <CiDesktopMouse2 className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">Perifericos</p>
                    <p className="mt-1 text-sm text-slate-400">Teclados, mouse, headsets y webcams.</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400/40 hover:bg-slate-900">
                    <CiMonitor className="mb-3 text-2xl text-cyan-300" />
                    <p className="font-semibold text-slate-100">Monitores</p>
                    <p className="mt-1 text-sm text-slate-400">Paneles para productividad, diseno y esports.</p>
                </article>

            </div>
        </section>

        <section id="destacados" aria-label="Productos destacados" className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Top ventas de la semana</h2>
            <p className="mt-2 text-slate-400">Lo mas buscado por la comunidad Byte Market.</p>
            <div className="mt-4"><button className="rounded-lg border border-cyan-400/40 bg-slate-950 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800">Ver todo el catalogo</button></div>
        </section>

        <section id="beneficios" aria-label="Motivos de compra" className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-100">Por que comprar en Byte Market</h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <FaHourglassEnd />
                        <p className="font-semibold text-slate-100">Envio rapido</p>
                    </div>
                    <p className="text-sm text-slate-400">Recibe tus productos en 24 - 48 horas.</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <MdOutlineSecurity />
                        <p className="font-semibold text-slate-100">Pago seguro</p>
                    </div>
                    <p className="text-sm text-slate-400">Proteccion en cada transaccion.</p>
                </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <MdSupportAgent />
                        <p className="font-semibold text-slate-100">Soporte tecnico</p>
                    </div>
                    <p className="text-sm text-slate-400">Te ayudamos a elegir lo que realmente necesitas.</p>
                 </article>

                <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                        <FaRegMoneyBillAlt />
                        <p className="font-semibold text-slate-100">Garantia real</p>
                    </div>
                    <p className="text-sm text-slate-400">Cobertura y respaldo en tus compras.</p>
                </article>

            </div>
        </section>

         <section id="ofertas" aria-label="Ofertas"className="rounded-xl border border-cyan-400/20 bg-gradient-to-r from-slate-900 to-slate-950 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Ofertas flash</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Aprovecha descuentos limitados en componentes y perifericos seleccionados.</p>
            <div className="mt-4"><button className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Ver ofertas</button></div>
        </section>

        <section id="newsletter" aria-label="Newsletter" className="rounded-xl border border-slate-800 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Recibe ofertas antes que nadie</h2>
            <p className="mt-2 text-slate-400">Suscribete y obten promociones exclusivas cada semana.</p>

            <form className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center" action="#">
                <label htmlFor="news" className="sr-only">Correo para newsletter</label>
                <input type="email" id="news" placeholder="Tu correo electronico" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none ring-cyan-400 placeholder:text-slate-500 focus:ring-2 sm:max-w-sm"/>
                <button className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Suscribirme</button>
            </form>
        </section>

        <section aria-label="Cierre" className="pb-2 text-center text-slate-400">
            <p>Mas de 5000 clientes han mejorado su setup con Byte Market.</p>
        </section>
        
    </main>
  );
};

export default Home;
