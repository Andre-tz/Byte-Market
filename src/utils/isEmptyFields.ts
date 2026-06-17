const isEmptyFields = <T extends object> ( obj : T )=>{
    return Object.values( obj ).some( value => value.trim() === "")
}
export default isEmptyFields;