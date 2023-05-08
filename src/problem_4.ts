class Person {
    private name: string;
    private age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    public getDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    private grade: string;
    constructor(name:string, age:number, grade:string) {
        super(name, age);
        this.grade = grade;
    }
    public getGrade() {
        return this.grade;
    }
}
