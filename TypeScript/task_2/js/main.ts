interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === "string") {
    const numericValue = parseFloat(salary.replace(/[^0-9,]/g, '').replace(',', '.'));
    salary = numericValue;
  }
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Testing
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
console.log(createEmployee('$100'));
console.log(createEmployee('$800'));
console.log(createEmployee('$80,50'));
console.log(createEmployee('$800,50'));
