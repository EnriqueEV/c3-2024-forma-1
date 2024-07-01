import citiesRepository from '../repository/worldCitiesRespository'

exports.getAllCitiesUseCase = (ctx) => {
    ctx.body = citiesRepository.getAllCitiesRepository()
    return ctx
}

exports.getCitiesByCountryUseCase = (ctx) => {
    var [body,status] = citiesRepository.searchCitiesByCountryName(ctx.params.country) 
    ctx.body = body
    ctx.status = status
    
    return ctx
}

exports.getCitiesByCityNameAndCountryUseCase = (ctx) => {
    var [body,status] =citiesRepository.searchCityByCityNameAndCountry(ctx.params.city, ctx.params.country) 
    ctx.body = body
    ctx.status = status
    return ctx
}