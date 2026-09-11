type FormInputProps = {
    labelText: string;
    type: string;
    id: string;
    name: string;
    placeholder?: string;
    value: string;
    isEditing : boolean
    onChange:  ( e:React.ChangeEvent<HTMLInputElement>, name: string  ) => void
}
const FormInput = ( { labelText, type, id, name, placeholder, value, isEditing, onChange } : FormInputProps) =>{
    return (
        <div className="space-y-2">
            <label htmlFor={ id } className="block text-sm font-medium tracking-wide text-slate-200">
                { labelText}
            </label>
            <input
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10"
                type={ type }
                id={ id }
                name= { name }
                placeholder={ placeholder }
                value={ value }
                readOnly = { !isEditing }
                onChange={  ( event ) => { onChange( event, name) }}
            />
        </div>
    )
}

export default FormInput;
