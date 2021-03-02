
function identity<T>(arg: T): T {
    return arg;
} //Declaring type "any" with T "safely"

type test = "test" | "ImNotTest"; // declaring options for type with pipe

let x1: test; // Assining x1 to be type of test


// These will succeed
x1 = "test";            
x1 = identity("test")
let x2 = identity("5");
x2 = identity("8")


// These will fail

x2 = identity(5); // After assigning value to a string it cannot be converted to An int
x1 = identity(5); // Fails cause the type is not valid
x1 = identity("5"); // Same as the above
