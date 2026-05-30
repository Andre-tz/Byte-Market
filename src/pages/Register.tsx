import { Link } from "react-router-dom";
import AuthInput from "../components/ui/AuthInput";
import React, { useState } from "react";
import type { RegisterFormData } from "../types/user.types";
import useAuth from "../hooks/useAuth";
import validatePassword from "../utils/validatePassword";
import isEmptyFields  from "../utils/isEmptyFields";

const Register = () => {
    const { userRegister } = useAuth();
    const [ registerData, setRegisterData ] = useState<RegisterFormData>( { name: "", lastName: "", email: "", password: "", confirmPassword: "" } );
    const [ isSubmitted, setIsSubmitted ] = useState<boolean>( false )

    const handleDataRegister = ( event: React.ChangeEvent<HTMLInputElement> )=>{
        const { id, value } = event.target;

        setRegisterData( prev=>({
            ...prev,
            [ id ] : value
        }))
    }

    const passwordValidation = validatePassword( registerData.password );
    const perfectPasword = 
        passwordValidation.hasNumber && 
        passwordValidation.hasUpperCase && 
        passwordValidation.minLength && registerData.password === registerData.confirmPassword 

    const handleUserDataRegister = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        const isEmptyCells = isEmptyFields( registerData)
        setIsSubmitted( true )

        if( !isEmptyCells && perfectPasword ){
            userRegister( registerData )
            console.log("formulario enviado")
        }else{
            console.log("algo anda mal")
        }
    };

    return (
        <main className="relative overflow-hidden py-12 md:py-16">
            <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="mx-auto w-[min(560px,92%)]">
                <section className="mb-6 text-center">
                    <span className="mb-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">Byte Market Join</span>
                    <h1 className="text-3xl font-bold leading-tight text-slate-100 md:text-5xl">Crea tu cuenta</h1>
                    <p className="mt-4 text-sm leading-7 text-slate-400 md:text-base">Regístrate para guardar tus productos favoritos, gestionar tus pedidos y disfrutar una experiencia de compra más rápida en Byte Market.</p>
                </section>

                <div className="relative overflow-hidden rounded-4xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.5)] ring-1 ring-white/5 md:p-8">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
                    <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-36 bg-linear-to-r from-cyan-400/10 to-transparent" />

                    <form onSubmit={ handleUserDataRegister } action="" className="space-y-5">
                        <AuthInput
                            labelText="Nombres"
                            type="text"
                            id="name"
                            placeholder="Ingresa tu nombre"
                            value={ registerData.name }
                            handleValue={ handleDataRegister }
                            isEmpty= { isSubmitted && !registerData.name.trim() }
                            message= { "Falta colocar tu nombre"}
                        />

                        <AuthInput
                            labelText="Apellidos"
                            type="text"
                            id="lastName"
                            placeholder="Ingresa tus apellidos"
                            value={ registerData.lastName }
                            handleValue={ handleDataRegister }
                            isEmpty= { isSubmitted && !registerData.lastName.trim() }
                            message= { "Falta colocar tus apellidos"}
                        />

                        <AuthInput
                            labelText="Correo electrónico"
                            type="email"
                            id="email"
                            placeholder="tucorreo@ejemplo.com"
                            value={ registerData.email }
                            handleValue={ handleDataRegister }
                            isEmpty= { isSubmitted && !registerData.email.trim() }
                            message= { "Falta colocar tu email"}
                        />

                        <div className="space-y-2">
                            <AuthInput
                                labelText="Contraseña"
                                type="password"
                                id="password"
                                placeholder="Crea una contraseña"
                                showPasswordToggle={ true }
                                value={ registerData.password }
                                handleValue={ handleDataRegister }
                                validation={ passwordValidation }
                                isEmpty= { isSubmitted && !registerData.password.trim() }
                                message= { "Falta colocar tu contraseña"}
                            />
                        </div>

                        <div className="space-y-2">
                            <AuthInput
                                labelText="Confirmar contraseña"
                                type="password"
                                id="confirmPassword"
                                placeholder="Vuelve a escribir tu contraseña"
                                showPasswordToggle={ true }
                                value={ registerData.confirmPassword }
                                handleValue={ handleDataRegister }
                                isPasswordMatching={ registerData.confirmPassword === registerData.password }
                                isEmpty= { isSubmitted && !registerData.confirmPassword.trim() }
                                message= { "Falta confirmar tu constraseña"}
                            />
                        </div>

                        <div className="flex justify-end">
                            <Link className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200 hover:underline" to="/login">¿Ya tienes cuenta? Inicia sesión</Link>
                        </div>

                        <button className="cursor-pointer w-full  rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_34px_rgba(34,211,238,0.2)] transition hover:bg-cyan-300 hover:shadow-[0_20px_40px_rgba(34,211,238,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70" type="submit">Crear cuenta</button>

                        <div className="text-center">
                            <h3 className="text-sm leading-6 text-slate-500">Tus datos se gestionan de forma segura.</h3>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
