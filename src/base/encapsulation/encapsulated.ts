//* Розетка

//? Тип розетки
export enum PowerSocketType {
  US,
  EU,
}

//? Тип вилки
export enum PowerPlugType {
  US,
  EU,
}

class PowerSocket {
  constructor(socketType: PowerSocketType) {
    this.socketType = socketType;
  }

  //? Геттер типа розетки
  get socketType(): PowerSocketType {
    return this.socketType;
  }

  //? Сеттер типа розетки
  set socketType(type: PowerSocketType) {
    this.socketType = type;
  }

  //? Включение питания
  private __suplyPower(plugType: PowerPlugType): void | never {
    switch (plugType) {
      case PowerPlugType.EU:
        if (this.socketType === PowerSocketType.EU) console.log("Power is ON");
        else throw new Error("Invalid plug type");
        break;
      case PowerPlugType.US:
        if (this.socketType === PowerSocketType.US) console.log("Power is ON");
        else throw new Error("Invalid plug type");
        break;
    }
  }

  public powerOn(plugType: PowerPlugType): void | never {
    this.__suplyPower(plugType);
  }
}

const powerSocket = new PowerSocket(PowerSocketType.EU);
powerSocket.powerOn(PowerPlugType.EU);
