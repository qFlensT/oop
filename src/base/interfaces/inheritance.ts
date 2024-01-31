namespace interfaces_inheritance {
  class Animal {
    public sayHello(): string | never {
      throw new Error("Not implemented");
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

  const greet = (animal: Animal): string => animal.sayHello();

  const dog = new Dog();
  console.log(greet(dog));

  const cat = new Cat();
  console.log(greet(cat));
}
