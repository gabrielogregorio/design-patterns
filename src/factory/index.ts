enum employeeEnum {
  'Developer' = 'Developer',
  'Tester' = 'Tester',
  'Product' = 'Product',
}

interface IEmployee {
  name: string;
  type: employeeEnum;
}

class Developer implements IEmployee {
  name: string;

  type: employeeEnum = employeeEnum.Developer;

  constructor(name) {
    this.name = name;
  }
}

class Tester implements IEmployee {
  name: string;

  type: employeeEnum = employeeEnum.Tester;

  constructor(name) {
    this.name = name;
  }
}

class Product implements IEmployee {
  name: string;

  type: employeeEnum = employeeEnum.Product;

  constructor(name) {
    this.name = name;
  }
}

class EmployeeFactory {
  builderEmployee: { [key in employeeEnum]: IEmployee };

  type: employeeEnum;

  constructor(name: string, type: employeeEnum) {
    // use strategy????
    this.type = type;
    this.builderEmployee = {
      [employeeEnum.Developer]: new Developer(name),
      [employeeEnum.Product]: new Product(name),
      [employeeEnum.Tester]: new Tester(name),
    };
  }

  builder(): IEmployee {
    return this.builderEmployee[this.type];
  }
}

console.log(new EmployeeFactory('lucas', employeeEnum.Developer).builder());
console.log(new EmployeeFactory('maria', employeeEnum.Developer).builder());
console.log(new EmployeeFactory('james', employeeEnum.Tester).builder());
console.log(new EmployeeFactory('santos', employeeEnum.Product).builder());
