const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

    test("set github using const", () => {
        const gitHub = "kjun290";
        const e = new Engineer ("Kevin", 123, "kevin@email.com", gitHub);
        expect(e.github).toBe(gitHub);

    });

    test("getRole() returns Engineer", () => {
        const role = "Engineer";
        const e = new Engineer("Kevin", 123, "kevin@email.com","kjun290");
        expect(e.getRole()).toBe(role);
    })

    test("getGithub() should return gitHub", () => {
        const gitHub = "kjun290";
        const e = new Engineer("Kevin", 123, "kevin@email.com", gitHub);
        expect(e.getGithub()).toBe(gitHub);
    })
        