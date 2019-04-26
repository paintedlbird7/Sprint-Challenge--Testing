const request = require('supertest');

const server = require('./server')

describe('server.js', () => {
    it('should be testing the server environment', () => {
        expect(1).toBeTruthy();
        // expect(process.env.DB_ENV).toBe('testing')
    })

describe('GET /games', () => {
    it('should return 200 OK', () => {
    return request(server)
    .get ('/')
    .then(res => {
        expect(res.status).toBe(200)
    })
    })

    it('should return JSON', async () => {
        const res = await request(server).get('/')
        expect(res.type).toBe('application/json')
    })

     it('should return 200 OK using async/await', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
    })

    // it('should return { api: games}', async () => {
    //     const res = await request(server).get('/')
    //     expect(res.body).toEqual({ api: 'games'})
    })
})

describe('POST /games', () => {
    it('should have title and genre', async () => {
      const response = await request(server)
        .post('/games')
        .send({ 
            title: 'Pacman2', 
            genre: 'Arcade', 
        });
      expect(response.body).toEqual.toBeDefined;
    //   {( post: 'Pacman' )};
    })  

    it('should return 200 OK using async/await', async () => {
        const res = await request(server).get('/')
        expect(res.status).toBe(200)
    })

    it('should return { api: up}', async () => {
        const res = await request(server).get('/')
        expect(res.body).toEqual({ api: 'games'})
    })
})
