//Imports
const LeapYear = require("../LeapYear");

/*
Feature to check when a year is leap
    1. When the user introduces a number that is not divisible by 4, it returns false.
    2. When the user introduces a number that is divisible by 400, it returns true.
    3. When the user introduces a number that is divisible by 100, it returns false.
    4. It returns true.
*/

describe('Tests that check if a year is leap', () => {
    const leap_year = new LeapYear(); //I'm creating an object of the class LeapYear and I assign it to the leap_year constant
    test('Test returns false when the year is not divisible by 4', () => {
        /*GHERKIN TEST
            * GIVEN / ARRANGE: a year
            * WHEN / ACT: when it's not divisible by 4
            * THEN / ASSERT: it returns false as a result
         */
        
        //ARRANGE: prepare the scene
        const input_year = 26;
        const expected_answer = false;
        
        //ACT: run the scene
        const answer_received = leap_year.test_leap_year(input_year);

        //ASSERT: check the scene
        expect(answer_received).toBe(expected_answer);
    });
    test('Test returns true when the year is divisible by 400', () => {
        /*GHERKIN TEST
            * GIVEN / ARRANGE: a year
            * WHEN / ACT: when it's divisible by 400
            * THEN / ASSERT: it returns true as a result
         */
        
        //ARRANGE: prepare the scene
        const input_year = 800;
        const expected_answer = true;
        
        //ACT: run the scene
        const answer_received = leap_year.test_leap_year(input_year);

        //ASSERT: check the scene
        expect(answer_received).toBe(expected_answer);
    });
    test('Test returns false when the year is divisible by 100', () => {
        /*GHERKIN TEST
            * GIVEN / ARRANGE: a year
            * WHEN / ACT: when it's divisible by 100
            * THEN / ASSERT: it returns false as a result
         */
        
        //ARRANGE: prepare the scene
        const input_year = 200;
        const expected_answer = false;
        
        //ACT: run the scene
        const answer_received = leap_year.test_leap_year(input_year);

        //ASSERT: check the scene
        expect(answer_received).toBe(expected_answer);
    });
});