namespace interfaces_interface {
  interface Animal {
    sayHello(): string;
  }

  class Dog implements Animal {
    public sayHello(): string {
      return "Woof-woof";
    }
  }

  class FlyingDog implements Animal {
    public sayHello(): string {
      return "Woof-woof, I can fly";
    }

    public fly(): string {
      return "I'm flying";
    }
  }

  const greet = (animal: Animal): string => animal.sayHello();

  const dog = new Dog();
  console.log(greet(dog));

  const flyingDog = new FlyingDog();
  console.log(greet(flyingDog));
}
