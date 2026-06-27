const getInitial = ( name: string, lastName: string) =>{
    
    const charName = name.trim().charAt( 0 ).toUpperCase();
    const charLastName = lastName.trim().charAt( 0 ).toUpperCase();

    return charName+charLastName
}
export default getInitial;