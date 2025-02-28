// Типы документов, удостоверяющих личность
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["InternalPassport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentTypes["IdentityCard"] = "ID \u043A\u0430\u0440\u0442\u044B";
})(DocumentTypes || (DocumentTypes = {}));
// Реализация класса для работы с информацией о персоне
class Person {
    constructor(_lastName, _firstName, _middleName, _dateOfBirth, _identityDocType, _identityDocSeries, _identityDocNumber) {
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._middleName = _middleName;
        this._dateOfBirth = _dateOfBirth;
        this._identityDocType = _identityDocType;
        this._identityDocSeries = _identityDocSeries;
        this._identityDocNumber = _identityDocNumber;
    }
    // Геттеры для доступа к приватным полям
    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
    get middleName() { return this._middleName; }
    get dateOfBirth() { return this._dateOfBirth; }
    get identityDocType() { return this._identityDocType; }
    get identityDocSeries() { return this._identityDocSeries; }
    get identityDocNumber() { return this._identityDocNumber; }
    // Метод для отображения информации о персоне
    displayPersonInfo() {
        console.log(`Информация о владельце:
            ФИО: ${this._lastName} ${this._firstName} ${this._middleName}
            Дата рождения: ${this._dateOfBirth.toLocaleDateString()}
            Документ: ${this._identityDocType}
            Серия: ${this._identityDocSeries}
            Номер: ${this._identityDocNumber}`);
    }
}
// Типы кузова автомобиля
var VehicleBodyTypes;
(function (VehicleBodyTypes) {
    VehicleBodyTypes["SedanType"] = "\u0421\u0435\u0434\u0430\u043D";
    VehicleBodyTypes["CoupeType"] = "\u041A\u0443\u043F\u0435";
    VehicleBodyTypes["HatchbackType"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
})(VehicleBodyTypes || (VehicleBodyTypes = {}));
// Классификация автомобилей
var VehicleCategories;
(function (VehicleCategories) {
    VehicleCategories["EconomyClass"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    VehicleCategories["BusinessClass"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
    VehicleCategories["PremiumClass"] = "\u041B\u044E\u043A\u0441";
})(VehicleCategories || (VehicleCategories = {}));
// Базовый класс для транспортных средств
class BaseTransport {
    constructor(_manufacturer, _modelName, _manufacturingYear, _vinCode, _regNumber, _personInfo) {
        this._manufacturer = _manufacturer;
        this._modelName = _modelName;
        this._manufacturingYear = _manufacturingYear;
        this._vinCode = _vinCode;
        this._regNumber = _regNumber;
        this._personInfo = _personInfo;
    }
    // Геттеры для доступа к защищенным полям
    get manufacturer() { return this._manufacturer; }
    get modelName() { return this._modelName; }
    get manufacturingYear() { return this._manufacturingYear; }
    get vinCode() { return this._vinCode; }
    get regNumber() { return this._regNumber; }
    get personInfo() { return this._personInfo; }
    // Базовый метод для отображения основной информации
    displayBaseInfo() {
        console.log(`Транспортное средство:
            Производитель: ${this._manufacturer}
            Модель: ${this._modelName}
            Год выпуска: ${this._manufacturingYear}
            VIN: ${this._vinCode}
            Рег. номер: ${this._regNumber}`);
    }
}
// Класс для работы с автомобилями
class Automobile extends BaseTransport {
    constructor(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo, _bodyType, _category) {
        super(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo);
        this._bodyType = _bodyType;
        this._category = _category;
    }
    get bodyType() { return this._bodyType; }
    get category() { return this._category; }
    // Реализация метода отображения деталей
    showDetails() {
        this.displayBaseInfo();
        console.log(`Дополнительные характеристики:
            Тип кузова: ${this._bodyType}
            Категория: ${this._category}`);
    }
    // Метод получения спецификации автомобиля
    getSpecifications() {
        return {
            bodyType: this._bodyType,
            category: this._category
        };
    }
}
// Класс для работы с мотоциклами
class Motorcycle extends BaseTransport {
    constructor(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo, _frameType, _isSportBike) {
        super(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo);
        this._frameType = _frameType;
        this._isSportBike = _isSportBike;
    }
    get frameType() { return this._frameType; }
    get isSportBike() { return this._isSportBike; }
    // Реализация метода отображения деталей
    showDetails() {
        this.displayBaseInfo();
        console.log(`Характеристики мотоцикла:
            Тип рамы: ${this._frameType}
            Спортивный: ${this._isSportBike ? 'Да' : 'Нет'}`);
    }
}
// Класс для управления хранилищем транспортных средств
class TransportStorage {
    constructor() {
        this._createdAt = new Date();
        this._items = [];
    }
    get createdAt() { return this._createdAt; }
    get items() { return this._items; }
    // Метод добавления транспортного средства
    addItem(item) {
        this._items.push(item);
    }
    // Получение всех транспортных средств
    getAllItems() {
        return this._items;
    }
    // Сортировка по модели (по убыванию)
    getSortedByModel() {
        return [...this._items].sort((a, b) => b.modelName.localeCompare(a.modelName));
    }
    // Поиск по производителю
    getByManufacturer(manufacturer) {
        return this._items.filter(item => item.manufacturer.toLowerCase() === manufacturer.toLowerCase());
    }
}
// Примеры использования
// Создание владельцев
const personOne = new Person("Смирнов", "Александр", "Петрович", new Date(1988, 5, 15), DocumentTypes.InternalPassport, "4510", "123456");
const personTwo = new Person("Петрова", "Елена", "Сергеевна", new Date(1992, 8, 20), DocumentTypes.IdentityCard, "4511", "789012");
// Создание транспортных средств
const teslaModel3 = new Automobile("Tesla", "Model 3", 2023, "5YJ3E1EA1PF123456", "A001AA777", personOne, VehicleBodyTypes.SedanType, VehicleCategories.PremiumClass);
const ducatiPanigale = new Motorcycle("Ducati", "Panigale V4", 2023, "ZDMH405W9NB123456", "B002BB777", personTwo, "Алюминиевая монокок", true);
// Создание хранилища
const transportRegistry = new TransportStorage();
// Добавление транспортных средств в хранилище
transportRegistry.addItem(teslaModel3);
transportRegistry.addItem(ducatiPanigale);
// Демонстрация работы методов
console.log("=== Все транспортные средства ===");
transportRegistry.getAllItems().forEach(item => item.showDetails());
console.log("\n=== Отсортированные по модели ===");
transportRegistry.getSortedByModel().forEach(item => item.showDetails());
console.log("\n=== Поиск по производителю (Tesla) ===");
transportRegistry.getByManufacturer("Tesla").forEach(item => item.showDetails());
console.log("\n=== Спецификации Tesla Model 3 ===");
console.log(teslaModel3.getSpecifications());
