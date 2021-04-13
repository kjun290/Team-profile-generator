const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


    test ("set officeNumber using const", () => {
        
        const officenumber = 100;
        const e = new Manager ("Kevin", 123, "kevin@email.com", officenumber);
        expect(e.officeNumber).toBe(officenumber);
    }); 

    test ("getRole() returns Manager", () => {
        const role = "Manager";
        const e = new Manager("Kevin", 123, "kevin@email.com", 100);
        expect(e.getRole()).toBe(role);
    });

    test ("getOfficeNumber() returns officenumber", () => {
        const officenumber = 100;
        const e = new Manager ("kevin", 123, "kevin@email.com", officenumber);
        expect(e.getofficeNumber()).toBe(officenumber);
    })