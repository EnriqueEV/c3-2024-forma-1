import worldCitiesDataset from '../../../../dataset/world-cities_json.json'

exports.getAllCitiesRepository = () => {
    return worldCitiesDataset
}

exports.searchCitiesByCountryName = (inputCountryName) => {
    if (inputCountryName.length < 3){
        return [{"message": "El país/ciudad ingresado debe tener al menos 3 caracteres"},400]
    }
    const regex = /^[0-9]$/;
    var new_countryName = "";
    for (var i = 0; i < inputCountryName.length; i++){
        if (regex.test(inputCountryName[i])){
            return [{
                "message": "Solo se aceptan caracteres no numéricos"
            },400]
        }
        else if (i == 0) {
            new_countryName = new_countryName + inputCountryName[i].toUpperCase()
        }
        else {
            new_countryName = new_countryName +inputCountryName[i].toLowerCase()
        }
        
    }
    const result = []
    worldCitiesDataset.forEach((cityObject) => {
        if(new_countryName === cityObject.country) result.push(cityObject)
    })
    if (result.length == 0){
        return [{ "message": "No se encontraron ciudades para el país ingresado"},200]
    }
    return [result,200]
}

exports.searchCityByCityNameAndCountry = (inputCityName, inputCountryName) => {
    if (inputCountryName.length < 3){
        return [{"message": "El país/ciudad ingresado debe tener al menos 3 caracteres"},400]
    }
    else if (inputCityName.length < 3){
        
        return [{"message": "El país/ciudad ingresado debe tener al menos 3 caracteres"},400]
        
    }
    const result = []
    worldCitiesDataset.forEach((cityObject) => {
        if(inputCityName === cityObject.name && inputCountryName === cityObject.country) result.push(cityObject)
    })
    return [result,200]
}