class Person {
    constructor(fullName, age, gender, address, phone, email) {
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
    this.email = email;
    }
    
    // Method to display person's details
    displayDetails() {
    console.log(`Name: ${this.fullName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Address: ${this.address}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Email: ${this.email}`);
    }
    }
    
    // Example usage:
    const person1 = new Person(
    "Sanduri Madhava Reddy",
    25,
    "Male",
    "123 Main St, Hyderabad, Telangana",
    "+91 9963695759",
    "madhavreddy9963@gmail.com"
    );
    
    person1.displayDetails();