class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, email, id) {
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