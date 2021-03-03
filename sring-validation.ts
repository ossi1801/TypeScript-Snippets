type Greeting = "Hello," | "Bye,";
type Name = "John" | "Joe"
  
type sentence = `${Greeting} ${Name}`;

const validSentence: sentence = "Hello, John";
const notValidSentence: sentence = "Hello, Oswald"; //<--- Name is not valid

console.log(validSentence)
