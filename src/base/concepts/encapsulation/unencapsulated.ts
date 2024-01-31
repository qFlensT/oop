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
  socketType: PowerSocketType;

  constructor(socketType: PowerSocketType) {
    this.socketType = socketType;
  }
  //? Включение питания
  powerOn(plugType: PowerPlugType): string | never {
    switch (plugType) {
      case PowerPlugType.EU:
        if (this.socketType === PowerSocketType.EU) return "Power is ON";
        else throw new Error("Invalid plug type");
      case PowerPlugType.US:
        if (this.socketType === PowerSocketType.US) return "Power is ON";
        else throw new Error("Invalid plug type");
    }
  }
}

const powerSocket = new PowerSocket(PowerSocketType.EU);
console.log(powerSocket.socketType);
console.log(powerSocket.powerOn(PowerPlugType.EU));
