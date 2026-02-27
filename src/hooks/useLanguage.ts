import { useTranslation } from "react-i18next"

//hook que hará la logica para cambiar el idioma
const useLanguage = ()=>{

    const { i18n } = useTranslation();

    const toggleLanguage = ()=>{
        const newLanguage = i18n.language=== "en"? "es" : "en"
        i18n.changeLanguage( newLanguage);
    }

    return toggleLanguage;
}
export default useLanguage;