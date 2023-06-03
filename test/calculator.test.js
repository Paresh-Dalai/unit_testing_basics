

const mathOperations = require("./../src/calculator")

describe('calculator test case' , () => {

    let a,b;
    beforeEach (() => {
        a = 10 , b = 2
    })
     
    test ("addition of two numbers" , () => {

        let result = mathOperations.sum(a,b)
        expect(result).not.toBeNull()
        expect(result).toBe(12)
    })

    test ("subtraction of two numbers" , () => {
        let result = mathOperations.diff(a,b)
        expect(result).not.toBeNull()
        expect(result).toBe(8)
    })

    test ("multiplication of two numbers" , () => {
        let result = mathOperations.mul(a,b)
        expect(result).not.toBeNull()
        expect(result).toBe(20)
    })

    test ("division of two numbers" , () => {
        let result = mathOperations.div(a,b)
        expect(result).not.toBeNull()
        expect(result).toBe(5)
    })
})