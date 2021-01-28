class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, email, id) {
        // if (typeof name !== "string" || !name.trim().length) {
        //     throw new Error("Expected parameter 'name' to be a non-empty string");
        // }

        // if (typeof email !== "string" || !email.trim().length) {
        //     throw new Error("Expected parameter 'email' to be a non-empty string");
        // }

        // if (typeof id !== "string" ||typeof id !== "number" || !id.trim().length) {
        //     throw new Error("Expected parameter 'id' to be a non-empty string or number");
        // }
        
        
        this.name = name;
        this.email = email;
        this.id = id;
    }
  
    getName() {
      return this.name;
    }
    getEmail() {
      return this.email
    }
    getID() {
      return this.id;
    }
    getRole() {
        return "Employee"
    }

  }

  module.exports = Employee;