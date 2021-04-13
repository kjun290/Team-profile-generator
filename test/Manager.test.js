const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


    test ("set officeNumber using const", () => {
        
        const testofficenumber = 100;
        const e = new Manager ("Kevin", 123, "kevin@email.com", testofficenumber);
        expect(e.officeNumber).toBe(testofficenumber);
    }); 

    test ("getRole() returns Manager", () => {
        const role = "Manager";
        const e = new Manager("Kevin", 123, "kevin@email.com", 100);
        expect(e.getRole()).toBe(role);
    });

    test ("getOfficeNumber() returns officenumber", () => {
        const testofficenumber = 100;
        const e = new Manager ("kevin", 123, "kevin@email.com", testofficenumber);
        expect(e.getofficeNumber()).toBe(testofficenumber);
    })