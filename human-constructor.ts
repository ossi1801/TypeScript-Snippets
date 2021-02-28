interface human {
    name: String,
    lastname: String,
    [key: string]: String
}


const dude: human = {
 name: "Oswald",
 lastname: "Great", 
}
dude.fullname = dude.name+" "+dude.lastname

const greetings = "Hello,"
console.log(greetings+" "+dude.fullname)
console.log(dude)
