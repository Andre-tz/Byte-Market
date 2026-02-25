const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/90 text-slate-100 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1200px,94%)] flex-wrap items-center gap-4 py-3">
            <a href="#" className="flex items-center gap-2" aria-label="Byte Market inicio">
                <span className="grid h-10 w-10 place-content-center rounded-lg bg-cyan-400 font-black text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.45)]">
                    BM
                </span>

                <div>
                    <p className="text-lg font-bold leading-none">Byte Market</p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">Tech Store</p>
                </div>
            </a>

            <nav className="order-3 w-full md:order-0 md:w-auto" aria-label="Menu principal">
                <ul className="flex flex-wrap gap-2 text-sm md:gap-3">
                    <li><a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">Inicio</a></li>
                    <li><a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">Laptops</a></li>
                    <li><a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">Componentes</a></li>
                    <li><a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">Perifericos</a></li>
                    <li><a href="#" className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">Ofertas</a></li>
                </ul>
            </nav>

            <form className="ml-auto flex flex-1 items-center gap-2 md:max-w-md" role="search">
                <label htmlFor="search" className="sr-only">Buscar productos</label>
                <input
                    id="search"
                    type="search"
                    placeholder="Buscar laptops, GPU, SSD..."
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-cyan-400 placeholder:text-slate-400 focus:ring-2"
                />
                <button type="submit" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Buscar</button>
            </form>

            <div className="flex items-center gap-2 text-sm">
                <button type="button"  className="rounded-md border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-cyan-400/50">Cuenta</button>
                <button type="button" className="rounded-md bg-slate-800 px-3 py-2 transition hover:bg-slate-700">Carrito (0)</button>
            </div>
            
        </div>
    </header>
  );
};

export default Header;
