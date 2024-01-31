namespace inheritance {
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
    public bark(): string {
      return "Woof-woof";
    }
  }

  class Cat extends Animal {
    public meow(): string {
      return "Meow-meow";
    }
  }

  const dog = new Dog("Jack");
  console.log(dog.sayHello());
  console.log(dog.bark());

  const cat = new Cat("Tom");
  console.log(cat.sayHello());
  console.log(cat.meow());
}
