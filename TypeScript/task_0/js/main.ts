interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mathieu",
  lastName: "Morel",
  age: 39,
  location: "Saint-Venant",
}

const student2: Student = {
  firstName: "Elon",
  lastName: "Musk",
  age: 52,
  location: "Los Angeles",
}

const studentsList: Student[] = [student1, student2];

// Function to display students
function displayStudents(students: Student[]): void {
  // Create table
  const table = document.createElement('table');
  // Create header
  students.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
  });
  // Append table to body
  document.body.appendChild(table);
}
// Display students
displayStudents(studentsList);
