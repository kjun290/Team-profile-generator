const { expect } = require("@jest/globals");
const Employee = require ("../lib/Employee");


    test ("is employee an object", () => {
        
            const e = new Employee();
            expect(typeof(e)).toBe("object")
        })

    test ("set name using const",() => {
        const testname = "Kevin";
        const e = new Employee(testname);
        expect(e.name).toBe(testname);
    })

    test ("set ID using const",() => {
        const testid = 123;
        const e = new Employee("kevin", testid);
        expect(e.id).toBe(testid);
    })


    test ("set email using const",() => {
        const testemail = "kevin@email.com";
        const e = new Employee("Kevin", 123, testemail);
        expect(e.email).toBe(testemail);
    })


    test ("get name using getName()", () => {
        const testname = "Kevin";
        const e = new Employee(testname);
        expect(e.getName()).toBe(testname);
    })

    test ("get ID using getId()", () => {
        const testid = 123;
        const e = new Employee("Kevin", testid);
        expect(e.getId()).toBe(testid);
    })

    test ("get Email using getEmail()", () => {
        const testemail = "kevin@email.com";
        const e = new Employee("Kevin", 123, testemail);
        expect(e.getEmail()).toBe(testemail);
    })

    test ("get role using getRole()", () => {
        const role = "Employee";
        const e = new Employee("Kevin", 123, "kevin@email.com");
        expect(e.getRole()).toBe(role);
    })