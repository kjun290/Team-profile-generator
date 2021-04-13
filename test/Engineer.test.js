const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

    test("set github using const", () => {
        const testgitHub = "kjun290";
        const e = new Engineer ("Kevin", 123, "kevin@email.com", testgitHub);
        expect(e.github).toBe(testgitHub);

    });

    test("getRole() returns Engineer", () => {
        const role = "Engineer";
        const e = new Engineer("Kevin", 123, "kevin@email.com","kjun290");
        expect(e.getRole()).toBe(role);
    })

    test("getGithub() should return gitHub", () => {
        const testgitHub = "kjun290";
        const e = new Engineer("Kevin", 123, "kevin@email.com", testgitHub);
        expect(e.getGithub()).toBe(testgitHub);
    })
        