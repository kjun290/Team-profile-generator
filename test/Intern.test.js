const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");


    test ("set school using const", () => {
        
        const testschool = "NU";
        const e = new Intern("Kevin", 123, "kevin@email.com", testschool);
        expect(e.school).toBe(testschool);
    }); 

    test ("getRole() returns Intern", () => {
        const role = "Intern";
        const e = new Intern("Kevin", 123, "kevin@email.com", "NU");
        expect(e.getRole()).toBe(role);
    });

    test ("getSchool() returns school", () => {
        const testschool = "NU";
        const e = new Intern ("kevin", 123, "kevin@email.com", testschool);
        expect(e.getSchool()).toBe(testschool);
    })