/** Classe convencional */
class Student {

    constructor(name, course, registration) {
        this.name = name;
        this.course = course;
        this.registration = registration
    }

    getData() {
        const data = {
            name: this.name,
            course: this.course,
            registration: this.registration
        }
        return data
    }
}

const student = new Student('Laura', 'GEC', 1657)
console.log(student.getData())

/** Factory */
const StudentFactory = (name, course, registration) => ({
    name,
    course,
    registration,
    getData: () => ({name, course, registration})
})

const studentFactory = StudentFactory('Samuel', 'GES', 1234)
console.log(studentFactory.getData())