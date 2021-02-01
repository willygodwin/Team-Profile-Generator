
const Engineer = require('../lib/engineer');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email, id and github if provided valid arguments", () => {
            
            
            const engineer = new Engineer("Sarah", "sarah@gmail.com", 1, "SarahsGithub");
  
            expect(engineer.name).toEqual("Sarah");
            expect(engineer.email).toEqual("sarah@gmail.com");
            expect(engineer.id).toEqual(1);
            expect(engineer.github).toEqual('SarahsGithub');

        });

        it("should test the getters of Engineer", () => {
            const engineer = new Engineer("Sarah", "sarah@gmail.com", 1, "SarahsGithub");
    
            expect(engineer.getName()).toEqual("Sarah");
            expect(engineer.getEmail()).toEqual("sarah@gmail.com");
            expect(engineer.getID()).toEqual(1);
            expect(engineer.getGithub()).toEqual("SarahsGithub");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
