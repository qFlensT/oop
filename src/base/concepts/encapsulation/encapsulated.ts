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
  //? Тип розетки
  private __socketType: PowerSocketType;

  constructor(socketType: PowerSocketType) {
    this.__socketType = socketType;
  }

  //? Геттер типа розетки
  get socketType(): string {
    return `Socket type is ${PowerSocketType[this.__socketType]}`;
  }

  //? Сеттер типа розетки
  set socketType(type: PowerSocketType) {
    this.__socketType = type;
  }

  //? Включение питания
  private __suplyPower(plugType: PowerPlugType): string | never {
    switch (plugType) {
      case PowerPlugType.EU:
        if (this.__socketType === PowerSocketType.EU) return "Power is ON";
        else throw new Error("Invalid plug type");
      case PowerPlugType.US:
        if (this.__socketType === PowerSocketType.US) return "Power is ON";
        else throw new Error("Invalid plug type");
    }
  }

  //? Публичный интерфейс включения питания
  public powerOn(plugType: PowerPlugType): string | never {
    return this.__suplyPower(plugType);
  }
}

const powerSocket = new PowerSocket(PowerSocketType.EU);
console.log(powerSocket.socketType);
console.log(powerSocket.powerOn(PowerPlugType.EU));
