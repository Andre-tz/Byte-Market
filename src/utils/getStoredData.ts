const getStoredData =  <T>( keyStore: string, valueDefault: T ) : T =>{
    const storedData = localStorage.getItem( keyStore )
    if( !storedData) return valueDefault
    try{
        return JSON.parse( storedData )
    }catch{
            return valueDefault
        }
}

export default getStoredData;
