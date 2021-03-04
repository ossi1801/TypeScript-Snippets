//FizzBuzz

//JS style
for (var i = 1; i < 101; i++) {
    console.log(i)
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    };

//TS style
for (let i = 1; i < 101; i++) {
  const F = i % 3 == 0, B = i % 5 == 0;
  console.log(
    F && B ? "FizzBuzz"
    : F ? "Fizz"
    : B ? "Buzz"
    : i
  );
}
