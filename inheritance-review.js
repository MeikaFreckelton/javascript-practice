class Person {
    constructor(name, city){
        this.name = name
        this.city = city
        Person.counter++
    }

    static count(){
        this.counter = 0
    }
}

class Teacher extends Person {
    constructor(name, city, classesTeaching){
        super(name, city)
        this.classesTeaching = classesTeaching
        Teacher.counter++
    }
    super
    
}

class Student extends Person {
    constructor(name, city, classesStudying){
        super(name, city)
        this.classesStudying = classesStudying
        Student.counter++
    }
    super
    
}
Person.count()
Teacher.count()
Student.count()


let teacher1 = new Teacher("nands", "sydney",["ruby", "js"])
let teacher2 = new Teacher("alex", "sydney",["ruby", "js"])
let student1 = new Student("meiks", "sydney",["ruby", "js"])
let student2 = new Student("ca", "sydney",["ruby", "js"])
let student3 = new Student("bootcamp", "sydney",["ruby", "js"])

console.log(Person.counter)
console.log(Teacher.counter)
console.log(Student.counter)