//Imports
const LeapYear = require("../LeapYear");

/*
Feature para saber cuándo un año es bisiesto
    1. Cuando el usuario digite un número no divisible por 4, devuelve false.
    2. Cuando el usuario digite un número divisible por 400, devuelve true.
    3. Cuando el usuario digite un número divisible por 100, devuelve false.
    4. Devuelve true.
*/

describe('Tests that check if a year is leap', () => {
    const leap_year = new LeapYear(); //Me estoy creando un objeto de la clase LeapYear y se lo asigno a una constante que se llama leap_year
    test('Test returns false when the year is not divisible by 4', () => {
        /*
         * GHERKIN TEST
            * GIVEN / ARRANGE: un año
            * WHEN / ACT: cuando éste no sea divisible por 4
            * THEN / ASSERT: devuelve false como resultado
         */
        
        //ARRANGE: preparar el escenario
        const input_year = 26;
        const expected_answer = false;
        
        //ACT: ejecutar el escenario
        const answer_received = leap_year.test_leap_year(input_year);

        //ASSERT: comprobar el escenario
        expect(answer_received).toBe(expected_answer);
    });
    test('Test returns true when the year is divisible by 400', () => {
        /*
         * GHERKIN TEST
            * GIVEN / ARRANGE: un año
            * WHEN / ACT: cuando éste sea divisible por 400
            * THEN / ASSERT: devuelve true como resultado
         */
        
        //ARRANGE: preparar el escenario
        const input_year = 800;
        const expected_answer = true;
        
        //ACT: ejecutar el escenario
        const answer_received = leap_year.test_leap_year(input_year);

        //ASSERT: comprobar el escenario
        expect(answer_received).toBe(expected_answer);
    });
});