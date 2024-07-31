export default function updateStudentGradeByCity(students, city, grades) {
  const studentsByCity = students.filter((student) => student.location === city);
  return (studentsByCity.map((student) => {
    const gradeFound = grades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: gradeFound ? gradeFound.grade : 'N/A' };
  }));
}
