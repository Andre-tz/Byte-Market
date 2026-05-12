import { Link } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";
import AuthInput from "../components/ui/AuthInput";
//import { LiaEyeSlashSolid } from "react-icons/lia";

const LogInPage = () => {
    return (
        <main className="relative overflow-hidden py-12 md:py-16">
            <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="mx-auto w-[min(560px,92%)]">
                <section className="mb-6 text-center">
                    <span className="mb-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">Byte Market Access</span>
                    <h1 className="text-3xl font-bold leading-tight text-slate-100 md:text-5xl">Inicia Sesión en tu cuenta</h1>
                    <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">Accede para revisar tus pedidos, guardar tus productos favoritos y disfrutar una compra más rápida en Byte Market.</p>
                </section>

                <div className="relative overflow-hidden rounded-4xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.5)] ring-1 ring-white/5 md:p-8">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
                    <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-36 bg-linear-to-r from-cyan-400/10 to-transparent" />

                    <form action="" className="space-y-5">
                        <AuthInput 
                            labelText="Correo electrónico"
                            inputType="text"
                            id="email"
                            placeholder="tucorreo@ejemplo.com"
                        />

                        <AuthInput 
                            labelText="Contraseña"
                            inputType="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            icon= { <LiaEyeSolid/> }
                        />
                        
                        <div className="flex justify-end">
                            <Link className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200 hover:underline" to="/">¿Olvidaste tu contraseña?</Link>
                        </div>

                        <button className="w-full cursor-pointer rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_34px_rgba(34,211,238,0.2)] transition hover:bg-cyan-300 hover:shadow-[0_20px_40px_rgba(34,211,238,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70" type="submit">Iniciar Sesion</button>
                    </form>

                    <div className="mt-6 rounded-2xl border border-slate-800/90 bg-slate-950/50 p-5 text-center">
                        <p className="text-sm text-slate-400">¿Aún no tienes cuenta?</p>
                        <Link className="mt-3 inline-flex rounded-xl border border-cyan-400/35 bg-slate-950 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200"to="/register">Crear Cuenta</Link>
                    </div>

                    <div className="mt-5 text-center">
                        <h3 className="text-sm leading-6 text-slate-500">Tu información se gestiona de forma segura dentro de Byte Market.</h3>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LogInPage;
