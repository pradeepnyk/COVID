let age = prompt('What is your age?',18);

let welcome = (age<18)?
    () => alert('under 18'):
    () => alert('Adult')

welcome();

let sum = (a, b) => a + b;
console.log(`Summation of a and b is: `+sum(3, 4));

let group = {
    title: "our group",
    students: ["John", "Peter", "Alice"],
    showList(){
        this.students.forEach(
            student => console.log(this.title + ':' + student)
        );
    }
};

group.showList();