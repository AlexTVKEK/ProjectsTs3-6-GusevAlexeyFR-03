var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Декоратор для запечатывания класса
 */
function SealedClass(constructor) {
    Object.seal(constructor.prototype);
}
/**
 * Декоратор для преобразования в верхний регистр
 */
function ToUpperCase(_, __, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
    return descriptor;
}
var Documents;
(function (Documents) {
    let DocumentType;
    (function (DocumentType) {
        DocumentType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocumentType["IDCard"] = "ID \u043A\u0430\u0440\u0442\u044B";
    })(DocumentType = Documents.DocumentType || (Documents.DocumentType = {}));
})(Documents || (Documents = {}));
/**
 * Класс для хранения и управления данными владельца ТС
 */
class Owner {
    constructor(_surname, _name, _patronymic, _birthDate, _documentType, _documentSeries, _documentNumber) {
        this._surname = _surname;
        this._name = _name;
        this._patronymic = _patronymic;
        this._birthDate = _birthDate;
        this._documentType = _documentType;
        this._documentSeries = _documentSeries;
        this._documentNumber = _documentNumber;
    }
    get Surname() { return this._surname; }
    set Surname(value) { this._surname = value; }
    get Name() { return this._name; }
    set Name(value) { this._name = value; }
    get Patronymic() { return this._patronymic; }
    set Patronymic(value) { this._patronymic = value; }
    get BirthDate() { return this._birthDate; }
    set BirthDate(value) { this._birthDate = value; }
    get DocumentType() { return this._documentType; }
    set DocumentType(value) { this._documentType = value; }
    get DocumentSeries() { return this._documentSeries; }
    set DocumentSeries(value) { this._documentSeries = value; }
    get DocumentNumber() { return this._documentNumber; }
    set DocumentNumber(value) { this._documentNumber = value; }
    printOwnerInfo() {
        console.log(`
            Информация о владельце:
            Фамилия: ${this._surname}
            Имя: ${this._name}
            Отчество: ${this._patronymic}
            Дата рождения: ${this._birthDate.toLocaleDateString()}
            Тип документа: ${this._documentType}
            Серия: ${this._documentSeries}
            Номер: ${this._documentNumber}
        `);
    }
}
/**
 * Базовый класс для транспортного средства
 */
class Vehicle {
    constructor(_brand, _model, _manufactureYear, _vinNumber, _registrationNumber, _owner) {
        this._brand = _brand;
        this._model = _model;
        this._manufactureYear = _manufactureYear;
        this._vinNumber = _vinNumber;
        this._registrationNumber = _registrationNumber;
        this._owner = _owner;
    }
    get Brand() { return this._brand; }
    set Brand(value) { this._brand = value; }
    get Model() { return this._model; }
    set Model(value) { this._model = value; }
    get ManufactureYear() { return this._manufactureYear; }
    set ManufactureYear(value) { this._manufactureYear = value; }
    get VinNumber() { return this._vinNumber; }
    set VinNumber(value) { this._vinNumber = value; }
    get RegistrationNumber() { return this._registrationNumber; }
    set RegistrationNumber(value) { this._registrationNumber = value; }
    get Owner() { return this._owner; }
    set Owner(value) { this._owner = value; }
    printVehicleInfo() {
        console.log(`
            Информация о транспортном средстве:
            Марка: ${this._brand}
            Модель: ${this._model}
            Год выпуска: ${this._manufactureYear}
            VIN: ${this._vinNumber}
            Регистрационный номер: ${this._registrationNumber}
        `);
    }
    getVehicleInfo() {
        return `Марка: ${this._brand}, Модель: ${this._model}`;
    }
}
__decorate([
    ToUpperCase,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Vehicle.prototype, "getVehicleInfo", null);
var VehicleTypes;
(function (VehicleTypes) {
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        BodyType["Wagon"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
    })(BodyType = VehicleTypes.BodyType || (VehicleTypes.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Standard"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
        CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
        CarClass["Sport"] = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439";
    })(CarClass = VehicleTypes.CarClass || (VehicleTypes.CarClass = {}));
})(VehicleTypes || (VehicleTypes = {}));
/**
 * Класс автомобиля
 */
let Car = class Car extends Vehicle {
    constructor(brand, model, manufactureYear, vinNumber, registrationNumber, owner, _bodyType, _carClass) {
        super(brand, model, manufactureYear, vinNumber, registrationNumber, owner);
        this._bodyType = _bodyType;
        this._carClass = _carClass;
    }
    get BodyType() {
        return this._bodyType;
    }
    get CarClass() {
        return this._carClass;
    }
    printVehicleInfo() {
        super.printVehicleInfo();
        console.log(`
            Дополнительная информация:
            Тип кузова: ${this._bodyType}
            Класс автомобиля: ${this._carClass}
        `);
    }
};
Car = __decorate([
    SealedClass,
    __metadata("design:paramtypes", [String, String, Number, String, String, Object, String, String])
], Car);
// Пример использования
const ownerExample = new Owner("Иванов", "Петр", "Сергеевич", new Date(1990, 5, 15), Documents.DocumentType.Passport, "4510", "123456");
const carExample = new Car("Toyota", "Camry", 2023, "JT2BF22K1W0123456", "А123БВ777", ownerExample, VehicleTypes.BodyType.Sedan, VehicleTypes.CarClass.Premium);
// Вывод информации
carExample.printVehicleInfo();
ownerExample.printOwnerInfo();
console.log(carExample.getVehicleInfo());
