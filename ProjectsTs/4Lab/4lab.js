"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    var TypeOfDocument;
    (function (TypeOfDocument) {
        TypeOfDocument["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        TypeOfDocument["IDCard"] = "ID \u043A\u0430\u0440\u0442\u044B";
    })(TypeOfDocument = Transport.TypeOfDocument || (Transport.TypeOfDocument = {}));
    var OwnerClass = /** @class */ (function () {
        function OwnerClass(surname, name, patronymic, birthDate, documentType, documentSeries, documentNumber) {
            this.surname = surname;
            this.name = name;
            this.patronymic = patronymic;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }
        Object.defineProperty(OwnerClass.prototype, "Surname", {
            get: function () {
                return this.surname;
            },
            set: function (value) {
                this.surname = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "Name", {
            get: function () {
                return this.name;
            },
            set: function (value) {
                this.name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "Patronymic", {
            get: function () {
                return this.patronymic;
            },
            set: function (value) {
                this.patronymic = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "BirthDate", {
            get: function () {
                return this.birthDate;
            },
            set: function (value) {
                this.birthDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "DocumentType", {
            get: function () {
                return this.documentType;
            },
            set: function (value) {
                this.documentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "DocumentSeries", {
            get: function () {
                return this.documentSeries;
            },
            set: function (value) {
                this.documentSeries = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerClass.prototype, "DocumentNumber", {
            get: function () {
                return this.documentNumber;
            },
            set: function (value) {
                this.documentNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        OwnerClass.prototype.printInfoOwner = function () {
            console.log("Информация про владельца: " +
                "\nФамилия: " + this.surname +
                "\nИмя: " + this.name +
                "\nОтчество: " + this.patronymic +
                "\nДень рождения: " + this.birthDate.toDateString() +
                "\nТип документа: " + this.documentType +
                "\nСерия: " + this.documentSeries +
                "\nНомер: " + this.documentNumber);
        };
        return OwnerClass;
    }());
    Transport.OwnerClass = OwnerClass;
    // Класс, реализующий интерфейс Транспортное средство
    var VehicleImpl = /** @class */ (function () {
        function VehicleImpl(brand, model, year, vin, registrationNumber, owner) {
            this.mark = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }
        Object.defineProperty(VehicleImpl.prototype, "Mark", {
            get: function () {
                return this.mark;
            },
            set: function (value) {
                this.mark = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "Model", {
            get: function () {
                return this.model;
            },
            set: function (value) {
                this.model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "Year", {
            get: function () {
                return this.year;
            },
            set: function (value) {
                this.year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "Vin", {
            get: function () {
                return this.vin;
            },
            set: function (value) {
                this.vin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "RegistrationNumber", {
            get: function () {
                return this.registrationNumber;
            },
            set: function (value) {
                this.registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "Owner", {
            get: function () {
                return this.owner;
            },
            set: function (value) {
                this.owner = value;
            },
            enumerable: false,
            configurable: true
        });
        VehicleImpl.prototype.printInfo = function () {
            console.log("Информация про Траснпортное средство: " +
                " Марка: " + this.mark +
                " Модель:  " + this.model +
                " Год: " + this.year +
                " VIN: " + this.vin +
                " Регистрационный номер:" + this.registrationNumber);
        };
        return VehicleImpl;
    }());
    Transport.VehicleImpl = VehicleImpl;
    var BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    var CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Standard"] = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // Класс, реализующий интерфейс Автомобиль
    var CarImpl = /** @class */ (function (_super) {
        __extends(CarImpl, _super);
        function CarImpl(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
            _this.typeOfBody = bodyType;
            _this.classOfCar = carClass;
            return _this;
        }
        Object.defineProperty(CarImpl.prototype, "TypeOfBody", {
            get: function () {
                return this.typeOfBody;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "ClassOfCar", {
            get: function () {
                return this.classOfCar;
            },
            enumerable: false,
            configurable: true
        });
        CarImpl.prototype.printInfo = function () {
            _super.prototype.printInfo.call(this);
            console.log("Тип кузова: " + this.TypeOfBody +
                "\nКласс Машины: " + this.ClassOfCar);
        };
        return CarImpl;
    }(VehicleImpl));
    Transport.CarImpl = CarImpl;
    // Класс, реализующий интерфейс Мотоцикл
    var MotorbikeImpl = /** @class */ (function (_super) {
        __extends(MotorbikeImpl, _super);
        function MotorbikeImpl(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
            var _this = _super.call(this, brand, model, year, vin, registrationNumber, owner) || this;
            _this.frameType = frameType;
            _this.isForSport = isForSport;
            return _this;
        }
        Object.defineProperty(MotorbikeImpl.prototype, "FrameType", {
            get: function () {
                return this.frameType;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "IsForSport", {
            get: function () {
                return this.isForSport;
            },
            enumerable: false,
            configurable: true
        });
        MotorbikeImpl.prototype.printInfo = function () {
            _super.prototype.printInfo.call(this);
            console.log("Тип рамы: " + this.frameType +
                "\nСпортивная?: " + this.isForSport);
        };
        return MotorbikeImpl;
    }(VehicleImpl));
    Transport.MotorbikeImpl = MotorbikeImpl;
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl() {
            this.creationDate = new Date();
            this.vehicles = [];
        }
        Object.defineProperty(VehicleStorageImpl.prototype, "CreationDate", {
            get: function () {
                return this.creationDate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorageImpl.prototype, "Vehicles", {
            get: function () {
                return this.vehicles;
            },
            enumerable: false,
            configurable: true
        });
        VehicleStorageImpl.prototype.getAllVehicles = function () {
            return this.vehicles;
        };
        VehicleStorageImpl.prototype.addVehicle = function (vehicle) {
            this.vehicles.push(vehicle);
        };
        VehicleStorageImpl.prototype.getCreationDate = function () {
            return this.creationDate;
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));