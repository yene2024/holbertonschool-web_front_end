function welcome(firstName, lastName) {
    // Create fullName by combining firstName and lastName
    let fullName = firstName + " " + lastName;

    // Define the inner function displayFullName
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }

    // Call the displayFullName function
    displayFullName();
}

// Test the function
welcome('Holberton', 'School');
