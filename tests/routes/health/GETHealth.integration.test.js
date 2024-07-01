import request from 'supertest'
import { server, app } from '../../../src/index'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */
describe('GET /health', () => {
    afterAll(() => {
        server.close()
    })

    test('should respond ok message', async () => {
        const response = await request(app.callback()).get('/health')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'ok' })
    })
})

describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Pais que esta en la lista, deberia responder con status 200 y una lista con las ciudades de esa pais ', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/Andorra')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([ {
            "country": "Andorra",
            "geonameid": 3040051,
            "name": "les Escaldes",
            "subcountry": "Escaldes-Engordany"
        },
        {
            "country": "Andorra",
            "geonameid": 3041563,
            "name": "Andorra la Vella",
            "subcountry": "Andorra la Vella"
        }])
    })
})
describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Pais que esta en la lista escrito solamente con minusculas, deberia responder con status 200 y una lista con las ciudades de esa pais ', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/andorra')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([ {
            "country": "Andorra",
            "geonameid": 3040051,
            "name": "les Escaldes",
            "subcountry": "Escaldes-Engordany"
        },
        {
            "country": "Andorra",
            "geonameid": 3041563,
            "name": "Andorra la Vella",
            "subcountry": "Andorra la Vella"
        }])
    })
})
describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Pais que esta en la lista escrito solamente con mayusculas, deberia responder con status 200 y una lista con las ciudades de esa pais ', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/ANDORRA')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([ {
            "country": "Andorra",
            "geonameid": 3040051,
            "name": "les Escaldes",
            "subcountry": "Escaldes-Engordany"
        },
        {
            "country": "Andorra",
            "geonameid": 3041563,
            "name": "Andorra la Vella",
            "subcountry": "Andorra la Vella"
        }])
    })
})
describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Pais que no esta en la lista, deberia responder con status 200 y "message": "No se encontraron ciudades para el país ingresado" ', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/SuperPeru')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({
            "message": "No se encontraron ciudades para el país ingresado"
        })
    })
})

describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Input de Pais de largo menor a 3, deberia responder con status 400 y  "message": "El país/ciudad ingresado debe tener al menos 3 caracteres"', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/Si')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({
            "message": "El país/ciudad ingresado debe tener al menos 3 caracteres"
        })
    })
})

describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Input de Ciudad de largo menor a 3, deberia responder con status 400 y "message": "El país/ciudad ingresado debe tener al menos 3 caracteres"  ', async () => {
        const response = await request(app.callback()).get('/api/city/as/country/Peru')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({
            "message": "El país/ciudad ingresado debe tener al menos 3 caracteres"
        })
    })
})
describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Input de Pais de largo menor a 3, deberia responder con status 400 y "message": "El país/ciudad ingresado debe tener al menos 3 caracteres" ', async () => {
        const response = await request(app.callback()).get('/api/city/Santiago/country/Ch')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({
            "message": "El país/ciudad ingresado debe tener al menos 3 caracteres"
        })
    })
})

describe('GET /api/cities/by_country/:country', () => {
    afterAll(() => {
        server.close()
    })

    test('Input de Pais con caracter numerico, deberia responder status 400 y  "message": "Solo se aceptan caracteres no numéricos" ', async () => {
        const response = await request(app.callback()).get('/api/cities/by_country/Hola1')
        expect(response.status).toBe(400)
        expect(response.body).toEqual({
            "message": "Solo se aceptan caracteres no numéricos"
        })
    })
})
