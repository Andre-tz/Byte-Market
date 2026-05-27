import React, { useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";

type Input = {
    labelText: string;
    type: string;
    id: string;
    placeholder: string;
    value: string;
    showPasswordToggle?: boolean;
    handleValue: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
    isPasswordMatching?: boolean;
    validation?: { minLength: boolean, hasNumber: boolean, hasUpperCase: boolean };
}

const AuthInput = ( { labelText, type, id, placeholder, value, showPasswordToggle, handleValue, isPasswordMatching, validation }: Input ) => {
    const [ currentType, setCurrentType ] = useState<string>( type );
    const hasPasswordMismatch = isPasswordMatching === false;
    const messagesValidationPassword = validation
        ? [
            !validation.minLength && "Debe tener al menos 8 caracteres",
            !validation.hasUpperCase && "Debe tener al menos una mayúscula",
            !validation.hasNumber && "Debe tener al menos un número"
        ].filter( Boolean ) as string[]
        : [];

    const showMessages = value.length > 0 && messagesValidationPassword.length > 0;
    const showMismatchMessage = value.length > 0 && hasPasswordMismatch;
    const hasError = hasPasswordMismatch || showMessages;

    const handleType = () => {
        if ( type != "password" ) return;
        setCurrentType( currentType === "password" ? "text" : "password" );
    };

    return (
        <div className="space-y-2">
            <label
                htmlFor={ id }
                className={ `block text-sm font-medium tracking-wide transition ${
                    hasError ? "text-red-300" : "text-slate-200"
                }` }
            >
                { labelText }
            </label>
            <div
                className={ `flex items-center gap-3 rounded-xl border px-4 py-3 text-slate-100 transition ${
                    hasError
                        ? "border-red-500 bg-red-950/20 ring-4 ring-red-500/10 hover:border-red-400 focus-within:border-red-400 focus-within:ring-red-500/20"
                        : "border-slate-700 bg-slate-950/80 hover:border-slate-600 focus-within:border-cyan-400/70 focus-within:ring-4 focus-within:ring-cyan-400/10"
                }` }
            >
                <input
                    className={ `w-full bg-transparent text-sm outline-none ${
                        hasError
                            ? "text-red-100 placeholder:text-red-300/60"
                            : "placeholder:text-slate-500"
                    }` }
                    type={ type === "password" ? currentType : type }
                    name={ id }
                    id={ id }
                    value={ value }
                    onChange={ handleValue }
                    placeholder={ placeholder }
                />

                { showPasswordToggle && (
                    <span
                        className={ `cursor-pointer text-lg transition ${
                            hasError
                                ? "text-red-300/70 hover:text-red-200"
                                : "text-slate-500 hover:text-cyan-300"
                        }` }
                        onClick={ handleType }
                    >
                        { currentType === "text" ? <LiaEyeSlash /> : <LiaEyeSolid /> }
                    </span>
                )}
            </div>

            { showMessages && (
                <div className="space-y-1 rounded-xl border border-red-500/20 bg-red-950/10 px-3 py-2">
                    { messagesValidationPassword.map( ( message ) => (
                        <p key={ message } className="text-sm leading-5 text-red-200">
                            { message }
                        </p>
                    )) }
                </div>
            )}

            { showMismatchMessage && (
                <p className="text-sm leading-5 text-red-300">
                    Las contraseñas no coinciden
                </p>
            )}
        </div>
    );
};

export default AuthInput;
