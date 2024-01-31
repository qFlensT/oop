namespace composition {
  class Dog {
    public bark() {
      return "Woof-woof";
    }
  }

  class Animal {
    private __dog: Dog;

    constructor() {
      this.__dog = new Dog();
    }

    get dog(): Dog {
      return this.__dog;
    }
  }

  const animal = new Animal();
  console.log(animal.dog.bark());
}
