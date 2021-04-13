const { expect } = require("@jest/globals");
const Employee = require ("../lib/Employee");


    test ("is employee an object", () => {
        
            const e = new Employee();
            expect(typeof(e)).toBe("object")
        })

    test ("set name using const",() => {
        const name = "Kevin";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    })

    test ("set ID using const",() => {
        const id = 123;
        const e = new Employee("kevin", id);
        expect(e.id).toBe(id);
    })


    test ("set email using const",() => {
        const email = "kevin@email.com";
        const e = new Employee("Kevin", 123, email);
        expect(e.email).toBe(email);
    })


    test ("get name using getName()", () => {
        const name = "Kevin";
        const e = new Employee(name);
        expect(e.getName()).toBe(name);
    })

    test ("get ID using getId()", () => {
        const id = 123;
        const e = new Employee("Kevin", id);
        expect(e.getId()).toBe(id);
    })

    test ("get Email using getEmail()", () => {
        const email = "kevin@email.com";
        const e = new Employee("Kevin", 123, email);
        expect(e.getEmail()).toBe(email);
    })

    test ("get role using getRole()", () => {
        const role = "Employee";
        const e = new Employee("Kevin", 123, "kevin@email.com");
        expect(e.getRole()).toBe(role);
    })