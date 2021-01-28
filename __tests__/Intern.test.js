const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email, id and office no. if provided valid arguments", () => {
            
            
            const intern = new Intern("Sarah", "sarah@gmail.com", 1, "UWA");
  
            expect(intern.name).toEqual("Sarah");
            expect(intern.email).toEqual("sarah@gmail.com");
            expect(intern.id).toEqual(1);
            expect(intern.school).toEqual('UWA');

        });

        it("should test the getters of manager", () => {
            const intern = new Intern("Sarah", "sarah@gmail.com", 1, "UWA");
    
            expect(intern.getName).toEqual("Sarah");
            expect(intern.getEmail).toEqual("sarah@gmail.com");
            expect(intern.getID).toEqual(1);
            expect(intern.getSchool).toEqual('UWA');
            expect(intern.getRole).toEqual("Intern");
        });
    });
});