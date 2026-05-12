type Input ={
    labelText: string;
    inputType: string;
    id: string;
    placeholder: string
    icon?: React.ReactNode
}
const AuthInput = ( { labelText, inputType, id, placeholder, icon } : Input )=>{
    return (
        <div className="space-y-2">
            <label htmlFor={ id } className="block text-sm font-medium tracking-wide text-slate-200">{ labelText }</label>
            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 transition hover:border-slate-600 focus-within:border-cyan-400/70 focus-within:ring-4 focus-within:ring-cyan-400/10">
                <input
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                    type={ inputType }
                    name={ id }
                    id={ id }
                    placeholder={ placeholder }/>
                { icon && (
                    <span className="text-lg text-slate-500 transition hover:text-cyan-300">{ icon }</span>
                )}
            </div>
        </div>
    )
} 

export default AuthInput;