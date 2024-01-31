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
  socketType: PowerSocketType;

  constructor(socketType: PowerSocketType) {
    this.socketType = socketType;
  }

  //? Включение питания
  powerOn(plugType: PowerPlugType): void | never {
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
}

const powerSocket = new PowerSocket(PowerSocketType.EU);
powerSocket.powerOn(PowerPlugType.EU);
