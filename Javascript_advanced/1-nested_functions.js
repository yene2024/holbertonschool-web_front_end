// Global variable
let globalVariable = "Welcome";

// Outer function
function outer() {
    // Alert the content of globalVariable
    alert(globalVariable);

    // Create a variable course
    let course = "Holberton";

    // Inner function
    function inner() {
        // Alert the content of globalVariable and course concatenated
        alert(globalVariable + " " + course);

        // Create a variable exclamation
        let exclamation = "!";

        // Inception function inside inner
        function inception() {
            // Alert the concatenation of globalVariable, course, and exclamation
            alert(globalVariable + " " + course + exclamation);
        }

        // Call the inception function inside inner
        inception();
    }

    // Call the inner function inside outer
    inner();
}

// Call the outer function in the main code
outer();
