export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);


export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Mathieu',
  lastName: 'Morel',
  location: 'Lille',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("Elon", "Musk"));


export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
const student = new StudentClass("Bill", "Gates");
console.log(student.displayName());
console.log(student.workOnHomework());
