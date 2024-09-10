// Function that returns a closure for displaying the welcome message
function welcomeMessage(fullName) {
    return function() {
        alert("Welcome " + fullName);
    }
}

// Create variables that store the closures
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

// Call the functions to display the alerts
guillaume();
alex();
fred();
