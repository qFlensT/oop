namespace s_principe {
  class Animal {
    private __name: string;

    constructor(name: string) {
      this.__name = name;
    }

    get name(): string {
      return this.__name;
    }

    set name(name: string) {
      this.__name = name;
    }
  }

  class AnimalDB {
    public saveAnimal(animal: Animal): string {
      return "saved animal";
    }

    public getAnimalByName(name: string): string {
      return "animal";
    }
  }
}
