const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello World', ()=> {
    it('Should, say Hello World', ()=> {
        const response = sayHelloWorld.sayHello();
    
        expect(response).toBe('Hello World');
    })

    it('Should say Hello Ramon', ()=> {
        const response = sayHelloWorld.sayHello('Ramon');

        expect(response).toBe('Hello Ramon');
    })
})