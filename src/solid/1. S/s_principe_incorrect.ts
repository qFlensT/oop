namespace s_principe_incorrect {
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

    public saveAnimal(animal: Animal): string {
      return "saved animal";
    }

    public getAnimalByName(name: string): string {
      return "animal";
    }
  }
}
