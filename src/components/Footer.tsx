const Footer = () => {
  return (
    <footer className="mt-10 border-t border-cyan-400/20 bg-slate-950 text-slate-300">
        <div className="mx-auto grid w-[min(1200px,94%)] gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">

            <section>
                <p className="text-lg font-semibold text-slate-100">Byte Market</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">Tecnologia para creadores, gamers y profesionales.</p>
            </section>

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Enlaces rapidos</p>
                <nav className="mt-3" aria-label="Enlaces rapidos">
                    <ul className="space-y-2 text-sm">
                        <li><a className="transition hover:text-cyan-300" href="#">Inicio</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">Laptops</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">Componentes</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">Perifericos</a></li>
                        <li><a className="transition hover:text-cyan-300" href="#">Ofertas</a></li>
                    </ul>
                </nav>
            </section>

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Soporte</p>
                <ul className="mt-3 space-y-2 text-sm">
                    <li><a className="transition hover:text-cyan-300" href="#">Preguntas frecuentes</a></li>
                    <li><a className="transition hover:text-cyan-300" href="#">Envios</a></li>
                    <li><a className="transition hover:text-cyan-300" href="#">Devoluciones</a></li>
                    <li><a className="transition hover:text-cyan-300" href="#">Soporte tecnico</a></li>
                </ul>
            </section>

            <section>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">Comunidad</p>
                <p className="mt-3 text-sm">GitHub:{" "}<a href="https://github.com/Andre-tz"target="_blank"rel="noreferrer" className="text-cyan-300 underline decoration-cyan-400/50 underline-offset-4 transition hover:text-cyan-200">itsAndreDev</a></p>
            </section>

        </div>

        <div className="border-t border-slate-800">
            <div className="mx-auto flex w-[min(1200px,94%)] flex-col gap-2 py-4 text-xs text-slate-500 sm:flex-row sm:justify-between">
                <p>Copyright 2026 Byte Market. Todos los derechos reservados.</p>
                <p>Hecho por itsAndreDev con cafe y enfoque.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
