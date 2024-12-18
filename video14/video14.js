let sum = (a, b) => {
    return a + b;
}

console.log(sum(9, 6));

let obj = {
    name: "John",
    age: 30,
     getName: function() {
        return this.name;
    }
}

console.log(obj.getName())