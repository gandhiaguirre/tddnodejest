const handlers= require('./index')

describe('Prueba',()=>{
    describe('suma',()=>{
        it('suma 2 numeros',()=>{// test = it
            const suma=(x,y)=>x+y;

            //toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:
            expect(suma(1,2)).toEqual(3)
        })
    })
   
})