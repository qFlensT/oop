namespace o_principe {
  interface Animal {
    makeSound(): string;
  }

  class Dog implements Animal {
    public makeSound(): string {
      return "Woof-woof";
    }
  }

  class Cat implements Animal {
    public makeSound(): string {
      return "Meow-meow";
    }
  }

  const makeSound = (animals: Animal[]): void =>
    animals.forEach((animal) => console.log(animal.makeSound()));

  const dog = new Dog();
  const cat = new Cat();

  makeSound([dog, cat]);
}
