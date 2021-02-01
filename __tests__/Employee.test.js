const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email and id if provided valid arguments", () => {
        const employee = new Employee("Sarah", "sarah@gmail.com", 1);

        expect(employee.name).toEqual("Sarah");
        expect(employee.email).toEqual("sarah@gmail.com");
        expect(employee.id).toEqual(1);
        });

        // it("should throw an error if provided no arguments", () => {
        //     const cb = () => new Employee();
        //     const err = new Error("Expected parameter 'name' to be a non-empty string");
      
        //     expect(cb).toThrow(err);
        //   });
      
        // it("should throw an error if not provided an email", () => {
        // const cb = () => new Employee("Sarah");
        // const err = new Error("Expected parameter 'email' to be a non-empty string");
    
        // expect(cb).toThrowError(err);
        // });

        // it("should throw an error if not provided an id", () => {
        // const cb = () => new Employee("Sarah", "sarah@gmail.com");
        // const err = new Error("Expected parameter 'id' to be a non-empty string or number");
    
        // expect(cb).toThrowError(err);
        // });
    
        // it("should throw an error if 'name' is not a string", () => {
        // const cb = () => new Employee(3, 2, 1);
        // const err = new Error("Expected parameter 'name' to be a non-empty string");
    
        // expect(cb).toThrowError(err);
        // });

        // it("should throw an error if 'email' is not a string", () => {
        // const cb = () => new Employee("Sarah", true, 1);
        // const err = new Error("Expected parameter 'email' to be a non-empty string");;
    
        // expect(cb).toThrowError(err);
        // });

        it("should test the getters of employee", () => {
            const employee = new Employee("Sarah", "sarah@gmail.com", 1);
    
            expect(employee.getName()).toEqual("Sarah");
            expect(employee.getEmail()).toEqual("sarah@gmail.com");
            expect(employee.getID()).toEqual(1);
            });
     
    });
});