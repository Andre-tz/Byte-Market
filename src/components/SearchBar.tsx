import { useState, type ChangeEvent} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SearchBar = ( ) =>{
    const { t } = useTranslation()
    const [ search, setSearch ] = useState<string>( "" );
    const navigate = useNavigate();

    const handleChange = ( e:ChangeEvent<HTMLInputElement>)=>{
        setSearch( e.target.value.trim() )
    }

    const handleSearch = ( e:React.FormEvent<HTMLFormElement> )=>{
        e.preventDefault()
        navigate( "/search?q=" + search)
    }

    return (
        <form className="ml-auto flex flex-1 items-center gap-2 md:max-w-md" role="search"  onSubmit={ handleSearch }>
             <label htmlFor="search" className="sr-only">{t("header.search.label")}</label>
             <input
                onChange={ handleChange }
                value={ search }
                name="q"
                id="search"
                type="search"
                placeholder={t("header.search.placeholder")}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-cyan-400 placeholder:text-slate-400 focus:ring-2"
             />
             <button type="submit"  className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">{t("header.search.button")}</button>
        </form>
    )
}
export default SearchBar;