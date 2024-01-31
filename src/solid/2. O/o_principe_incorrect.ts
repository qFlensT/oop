namespace o_principe_incorrect {
  interface Animal {
    readonly name: string;
  }

  class Dog implements Animal {
    get name(): string {
      return "Dog";
    }
  }

  class Cat implements Animal {
    get name(): string {
      return "Cat";
    }
  }

  const makeSound = (animals: Animal[]): void =>
    animals.forEach((animal) => {
      if (animal.name === "Dog") {
        console.log("Woof-woof");
      } else if (animal.name === "Cat") {
        console.log("Meow-meow");
      }
    });

  const dog = new Dog();
  const cat = new Cat();

  makeSound([dog, cat]);
}
