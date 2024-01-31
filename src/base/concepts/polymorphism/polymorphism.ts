class Animal {
  private __name: string;
  constructor(name: string) {
    this.__name = name;
  }

  public sayHello(): string {
    return `Hello, my name is ${this.__name}`;
  }
}

class Dog extends Animal {
  public sayHello(): string {
    return "Woof-woof";
  }
}

class Cat extends Animal {
  public sayHello(): string {
    return "Meow-meow";
  }
}

const dog = new Dog("Jack");
console.log(dog.sayHello());

const cat = new Cat("Tom");
console.log(cat.sayHello());
