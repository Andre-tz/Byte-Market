import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";

type ModalProps = {
    closeModal: ()=>void
}
const AuthRequiredModal = ( { closeModal } : ModalProps ) => {
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
        <section className="relative w-full max-w-md overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 text-center shadow-[0_24px_70px_rgba(2,6,23,0.65)] ring-1 ring-white/5">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl" />
            <span className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/70 text-sm font-bold text-slate-400 shadow-[0_10px_24px_rgba(2,6,23,0.35)] transition hover:border-cyan-300/70 hover:bg-slate-900 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70" onClick={ closeModal }>X</span>
            <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-cyan-400/18 to-cyan-400/8 shadow-[0_12px_32px_rgba(34,211,238,0.14)]">
                <TbShoppingCartPlus className="text-3xl text-cyan-300" />
            </div>

            <div className="relative">
                <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300">Carrito protegido</span>
                <h1 className="text-2xl font-bold leading-tight text-slate-100">
                    Inicia sesión para agregar al carrito
                </h1>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                    Para guardar este producto en tu carrito, necesitas iniciar sesión o crear una cuenta. Así podrás continuar comprando sin perder tus productos.
                </p>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                <Link to="/account/register"className="rounded-xl border border-cyan-400/35 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">
                  Crear cuenta
                </Link>
    
                <Link to="/account/login" className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.2)] transition hover:bg-cyan-300 hover:shadow-[0_18px_34px_rgba(34,211,238,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">
                  Iniciar sesión
                </Link>
            </div>
    
            <div className="relative mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/50 px-4 py-3">
                <p className="text-xs text-slate-500">
                    ¿Nuevo en Byte Market? Crear cuenta toma solo unos segundos.
                </p>
            </div>
        </section>
    </main>
  );
};

export default AuthRequiredModal;
