"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let TypeOfDocument;
    (function (TypeOfDocument) {
        TypeOfDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        TypeOfDocument["IDCard"] = "ID \u043A\u0430\u0440\u0442\u044B";
    })(TypeOfDocument = Transport.TypeOfDocument || (Transport.TypeOfDocument = {}));
    class OwnerClass {
        get Surname() {
            return this.surname;
        }
        set Surname(value) {
            this.surname = value;
        }
        get Name() {
            return this.name;
        }
        set Name(value) {
            this.name = value;
        }
        get Patronymic() {
            return this.patronymic;
        }
        set Patronymic(value) {
            this.patronymic = value;
        }
        get BirthDate() {
            return this.birthDate;
        }
        set BirthDate(value) {
            this.birthDate = value;
        }
        get DocumentType() {
            return this.documentType;
        }
        set DocumentType(value) {
            this.documentType = value;
        }
        get DocumentSeries() {
            return this.documentSeries;
        }
        set DocumentSeries(value) {
            this.documentSeries = value;
        }
        get DocumentNumber() {
            return this.documentNumber;
        }
        set DocumentNumber(value) {
            this.documentNumber = value;
        }
        constructor(surname, name, patronymic, birthDate, documentType, documentSeries, documentNumber) {
            this.surname = surname;
            this.name = name;
            this.patronymic = patronymic;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        printInfoOwner() {
            console.log("Информация про владельца: " +
                "\nФамилия: " + this.surname +
                "\nИмя: " + this.name +
                "\nОтчество: " + this.patronymic +
                "\nДень рождения: " + this.birthDate.toDateString() +
                "\nТип документа: " + this.documentType +
                "\nСерия: " + this.documentSeries +
                "\nНомер: " + this.documentNumber);
        }
    }
    Transport.OwnerClass = OwnerClass;
    // Класс, реализующий интерфейс Транспортное средство
    class VehicleImpl {
        get Mark() {
            return this.mark;
        }
        set Mark(value) {
            this.mark = value;
        }
        get Model() {
            return this.model;
        }
        set Model(value) {
            this.model = value;
        }
        get Year() {
            return this.year;
        }
        set Year(value) {
            this.year = value;
        }
        get Vin() {
            return this.vin;
        }
        set Vin(value) {
            this.vin = value;
        }
        get RegistrationNumber() {
            return this.registrationNumber;
        }
        set RegistrationNumber(value) {
            this.registrationNumber = value;
        }
        get Owner() {
            return this.owner;
        }
        set Owner(value) {
            this.owner = value;
        }
        constructor(brand, model, year, vin, registrationNumber, owner) {
            this.mark = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        printInfo() {
            console.log("Информация про Траснпортное средство: " +
                " Марка: " + this.mark +
                " Модель:  " + this.model +
                " Год: " + this.year +
                " VIN: " + this.vin +
                " Регистрационный номер:" + this.registrationNumber);
        }
    }
    Transport.VehicleImpl = VehicleImpl;
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Standard"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // Класс, реализующий интерфейс Автомобиль
    class CarImpl extends VehicleImpl {
        get TypeOfBody() {
            return this.typeOfBody;
        }
        get ClassOfCar() {
            return this.classOfCar;
        }
        constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            super(brand, model, year, vin, registrationNumber, owner);
            this.typeOfBody = bodyType;
            this.classOfCar = carClass;
        }
        printInfo() {
            super.printInfo();
            console.log("Тип кузова: " + this.TypeOfBody +
                "\nКласс Машины: " + this.ClassOfCar);
        }
    }
    Transport.CarImpl = CarImpl;
    // Класс, реализующий интерфейс Мотоцикл
    class MotorbikeImpl extends VehicleImpl {
        get FrameType() {
            return this.frameType;
        }
        get IsForSport() {
            return this.isForSport;
        }
        constructor(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
            super(brand, model, year, vin, registrationNumber, owner);
            this.frameType = frameType;
            this.isForSport = isForSport;
        }
        printInfo() {
            super.printInfo();
            console.log("Тип рамы: " + this.frameType +
                "\nСпортивная?: " + this.isForSport);
        }
    }
    Transport.MotorbikeImpl = MotorbikeImpl;
    class VehicleStorageImpl {
        get CreationDate() {
            return this.creationDate;
        }
        get Vehicles() {
            return this.vehicles;
        }
        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        getAllVehicles() {
            return this.vehicles;
        }
        addVehicle(vehicle) {
            this.vehicles.push(vehicle);
        }
        getCreationDate() {
            return this.creationDate;
        }
    }
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
