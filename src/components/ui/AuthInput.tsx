import React, { useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";

type Input ={
    labelText: string;
    type: string;
    id: string;
    placeholder: string
    showPasswordToggle?: boolean
}
const AuthInput = ( { labelText, type, id, placeholder, showPasswordToggle } : Input )=>{
    const [ inputValue, setInputValue ] = useState<string>( "" );
    const [ currentType, setCurrentType ] = useState<string>( type );

    const handleValue = ( event : React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue( event.target.value )
    }
    
    const handleType = () =>{
        if( type!= "password" ) return
        setCurrentType( currentType==="password"? "text" : "password")
    }

    return (
        <div className="space-y-2">
            <label htmlFor={ id } className="block text-sm font-medium tracking-wide text-slate-200">{ labelText }</label>
            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 transition hover:border-slate-600 focus-within:border-cyan-400/70 focus-within:ring-4 focus-within:ring-cyan-400/10">
                <input
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                    type={ type === "password"? currentType : type  }
                    name={ id }
                    id={ id }
                    value={ inputValue }
                    onChange={ handleValue }
                    placeholder={ placeholder }/>
                { showPasswordToggle && (
                    <span className="cursor-pointer text-lg text-slate-500 transition hover:text-cyan-300" onClick={ handleType }>{ currentType==="text"? <LiaEyeSlash/> : <LiaEyeSolid /> }</span>
                )}
            </div>
        </div>
    )
} 

export default AuthInput;