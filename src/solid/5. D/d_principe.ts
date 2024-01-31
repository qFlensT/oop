interface DataStorage {
  save(data: string): void;
}

//? Конкретная реализация интерфейса для работы с файловой системой
class FileStorage implements DataStorage {
  save(data: string): void {
    console.log(`Сохранение данных в файл: ${data}`);
  }
}

//? Конкретная реализация интерфейса для работы с облачным хранилищем
class CloudStorage implements DataStorage {
  save(data: string): void {
    console.log(`Сохранение данных в облако: ${data}`);
  }
}

//! Высокоуровневый модуль
class DataManager {
  private __storage: DataStorage;

  constructor(storage: DataStorage) {
    this.__storage = storage;
  }

  saveData(data: string): void {
    this.__storage.save(data);
  }
}

// Использование с разными реализациями
const fileStorage = new FileStorage();
const cloudStorage = new CloudStorage();

const fileDataManager = new DataManager(fileStorage);
fileDataManager.saveData("Некоторые данные");

const cloudDataManager = new DataManager(cloudStorage);
cloudDataManager.saveData("Некоторые другие данные");
