/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />

export const cpp: Subjects.Cpp = new Subjects.Cpp;
export const java: Subjects.Java = new Subjects.Java;
export const react:Subjects.React = new Subjects.React;

export const teacher1: Subjects.Teacher = {
	firstName: 'Mathieu',
	lastName: 'Morel',
	experienceTeachingC: 5,
};

console.log('C++');
cpp.setTeacher(teacher1);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(teacher1);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(teacher1);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
