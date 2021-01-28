const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email, id and office no. if provided valid arguments", () => {
            
            
            const manager = new Manager("Sarah", "sarah@gmail.com", 1, 15);
  
            expect(manager.name).toEqual("Sarah");
            expect(manager.email).toEqual("sarah@gmail.com");
            expect(manager.id).toEqual(1);
            expect(manager.officeNo).toEqual(15);

        });

        it("should test the getters of manager", () => {
            const manager = new Manager("Sarah", "sarah@gmail.com", 1, 15);
    
            expect(manager.getName).toEqual("Sarah");
            expect(manager.getEmail).toEqual("sarah@gmail.com");
            expect(manager.getID).toEqual(1);
            expect(manager.getOffice).toEqual(15);
            expect(manager.getRole).toEqual("Manager");
        });
    });
});
