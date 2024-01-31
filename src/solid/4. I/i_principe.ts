namespace i_principe {
  interface IFlying {
    fly(): void;
  }

  interface ISwimming {
    swim(): void;
  }

  interface IRunning {
    run(): void;
  }

  class Dog implements ISwimming, IRunning {
    public swim(): void {
      console.log("I'm swimming");
    }

    public run(): void {
      console.log("I'm running");
    }
  }

  class FlyingDog implements IFlying, IRunning, ISwimming {
    public fly(): void {
      console.log("I'm flying");
    }

    public run(): void {
      console.log("I'm running");
    }

    public swim(): void {
      console.log("I'm swimming");
    }
  }

  const dog = new Dog();
  const flyingDog = new FlyingDog();

  const action = (animal: ISwimming & IRunning): void => {
    animal.swim();
    animal.run();
  };

  const superAction = (animal: IFlying & IRunning & ISwimming): void => {
    animal.fly();
    animal.run();
    animal.swim();
  };

  action(dog);
  action(flyingDog);
  superAction(flyingDog);
}
