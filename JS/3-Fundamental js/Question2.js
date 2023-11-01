const student = {
    name: "Aman",
    age: 22,
    grade: "A"
};
function updateGrade(newGrade) {
    student.grade = newGrade;
}
updateGrade("B");
console.log(student);
