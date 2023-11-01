class Student {
    constructor(name, studentID) {
        this.name = name;
        this.studentID = studentID;
        this.enrolledCourses = [];
    }

    enrollInCourse(course) {
        this.enrolledCourses.push(course);
    }

    displayEnrolledCourses() {
        if (this.enrolledCourses.length === 0) {
            console.log(`${this.name} is not enrolled in any courses.`);
        } else {
            console.log(`${this.name}'s enrolled courses:`);
            this.enrolledCourses.forEach((course, index) => {
                console.log(`${index + 1}. ${course}`);
            });
        }
    }
}

class Admission {
    constructor() {
        this.enrolledStudents = [];
    }

    enrollStudent(student) {
        this.enrolledStudents.push(student);
    }

    displayEnrolledStudents() {
        if (this.enrolledStudents.length === 0) {
            console.log('No students have been enrolled.');
        } else {
            console.log('Enrolled Students:');
            this.enrolledStudents.forEach((student, index) => {
                console.log(`${index + 1}. ${student.name} (ID: ${student.studentID})`);
                student.displayEnrolledCourses();
                console.log('---');
            });
        }
    }
}


const admissionSystem = new Admission();

const student1 = new Student('Alice', 'S12345');
student1.enrollInCourse('Math');
student1.enrollInCourse('History');

const student2 = new Student('Bob', 'S67890');
student2.enrollInCourse('Science');

admissionSystem.enrollStudent(student1);
admissionSystem.enrollStudent(student2);

admissionSystem.displayEnrolledStudents();
