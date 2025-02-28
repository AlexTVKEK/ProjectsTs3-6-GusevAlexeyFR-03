// Вспомогательная функция для реализации наследования
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

// Вспомогательная функция для работы с массивами
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

// Типы документов
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["InternalPassport"] = "Паспорт";
    DocumentTypes["IdentityCard"] = "ID карты";
})(DocumentTypes || (DocumentTypes = {}));

// Класс для работы с информацией о персоне
var Person = /** @class */ (function () {
    function Person(_lastName, _firstName, _middleName, _dateOfBirth, _identityDocType, _identityDocSeries, _identityDocNumber) {
        this._lastName = _lastName;
        this._firstName = _firstName;
        this._middleName = _middleName;
        this._dateOfBirth = _dateOfBirth;
        this._identityDocType = _identityDocType;
        this._identityDocSeries = _identityDocSeries;
        this._identityDocNumber = _identityDocNumber;
    }
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () { return this._lastName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () { return this._firstName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "middleName", {
        get: function () { return this._middleName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "dateOfBirth", {
        get: function () { return this._dateOfBirth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "identityDocType", {
        get: function () { return this._identityDocType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "identityDocSeries", {
        get: function () { return this._identityDocSeries; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "identityDocNumber", {
        get: function () { return this._identityDocNumber; },
        enumerable: false,
        configurable: true
    });
    Person.prototype.displayPersonInfo = function () {
        console.log("Информация о владельце:\n            ФИО: ".concat(this._lastName, " ").concat(this._firstName, " ").concat(this._middleName, "\n            Дата рождения: ").concat(this._dateOfBirth.toLocaleDateString(), "\n            Документ: ").concat(this._identityDocType, "\n            Серия: ").concat(this._identityDocSeries, "\n            Номер: ").concat(this._identityDocNumber));
    };
    return Person;
}());

// Типы кузова автомобиля
var VehicleBodyTypes;
(function (VehicleBodyTypes) {
    VehicleBodyTypes["SedanType"] = "Седан";
    VehicleBodyTypes["CoupeType"] = "Купе";
    VehicleBodyTypes["HatchbackType"] = "Хэтчбэк";
})(VehicleBodyTypes || (VehicleBodyTypes = {}));

// Классификация автомобилей
var VehicleCategories;
(function (VehicleCategories) {
    VehicleCategories["EconomyClass"] = "Эконом";
    VehicleCategories["BusinessClass"] = "Стандарт";
    VehicleCategories["PremiumClass"] = "Люкс";
})(VehicleCategories || (VehicleCategories = {}));

// Базовый класс для транспортных средств
var BaseTransport = /** @class */ (function () {
    function BaseTransport(_manufacturer, _modelName, _manufacturingYear, _vinCode, _regNumber, _personInfo) {
        this._manufacturer = _manufacturer;
        this._modelName = _modelName;
        this._manufacturingYear = _manufacturingYear;
        this._vinCode = _vinCode;
        this._regNumber = _regNumber;
        this._personInfo = _personInfo;
    }
    Object.defineProperty(BaseTransport.prototype, "manufacturer", {
        get: function () { return this._manufacturer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTransport.prototype, "modelName", {
        get: function () { return this._modelName; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTransport.prototype, "manufacturingYear", {
        get: function () { return this._manufacturingYear; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTransport.prototype, "vinCode", {
        get: function () { return this._vinCode; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTransport.prototype, "regNumber", {
        get: function () { return this._regNumber; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTransport.prototype, "personInfo", {
        get: function () { return this._personInfo; },
        enumerable: false,
        configurable: true
    });
    BaseTransport.prototype.displayBaseInfo = function () {
        console.log("Транспортное средство:\n            Производитель: ".concat(this._manufacturer, "\n            Модель: ").concat(this._modelName, "\n            Год выпуска: ").concat(this._manufacturingYear, "\n            VIN: ").concat(this._vinCode, "\n            Рег. номер: ").concat(this._regNumber));
    };
    return BaseTransport;
}());

// Класс для работы с автомобилями
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo, _bodyType, _category) {
        var _this = _super.call(this, manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo) || this;
        _this._bodyType = _bodyType;
        _this._category = _category;
        return _this;
    }
    Object.defineProperty(Automobile.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Automobile.prototype, "category", {
        get: function () { return this._category; },
        enumerable: false,
        configurable: true
    });
    Automobile.prototype.showDetails = function () {
        this.displayBaseInfo();
        console.log("Дополнительные характеристики:\n            Тип кузова: ".concat(this._bodyType, "\n            Категория: ").concat(this._category));
    };
    Automobile.prototype.getSpecifications = function () {
        return {
            bodyType: this._bodyType,
            category: this._category
        };
    };
    return Automobile;
}(BaseTransport));

// Класс для работы с мотоциклами
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo, _frameType, _isSportBike) {
        var _this = _super.call(this, manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo) || this;
        _this._frameType = _frameType;
        _this._isSportBike = _isSportBike;
        return _this;
    }
    Object.defineProperty(Motorcycle.prototype, "frameType", {
        get: function () { return this._frameType; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Motorcycle.prototype, "isSportBike", {
        get: function () { return this._isSportBike; },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.showDetails = function () {
        this.displayBaseInfo();
        console.log("Характеристики мотоцикла:\n            Тип рамы: ".concat(this._frameType, "\n            Спортивный: ").concat(this._isSportBike ? 'Да' : 'Нет'));
    };
    return Motorcycle;
}(BaseTransport));

// Класс для управления хранилищем транспортных средств
var TransportStorage = /** @class */ (function () {
    function TransportStorage() {
        this._createdAt = new Date();
        this._items = [];
    }
    Object.defineProperty(TransportStorage.prototype, "createdAt", {
        get: function () { return this._createdAt; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransportStorage.prototype, "items", {
        get: function () { return this._items; },
        enumerable: false,
        configurable: true
    });
    TransportStorage.prototype.addItem = function (item) {
        this._items.push(item);
    };
    TransportStorage.prototype.getAllItems = function () {
        return this._items;
    };
    TransportStorage.prototype.getSortedByModel = function () {
        return __spreadArray([], this._items, true).sort(function (a, b) { return b.modelName.localeCompare(a.modelName); });
    };
    TransportStorage.prototype.getByManufacturer = function (manufacturer) {
        return this._items.filter(function (item) {
            return item.manufacturer.toLowerCase() === manufacturer.toLowerCase();
        });
    };
    return TransportStorage;
}());

// Примеры использования
// Создание владельцев
var personOne = new Person(
    "Смирнов",
    "Александр",
    "Петрович",
    new Date(1988, 5, 15),
    DocumentTypes.InternalPassport,
    "4510",
    "123456"
);

var personTwo = new Person(
    "Петрова",
    "Елена",
    "Сергеевна",
    new Date(1992, 8, 20),
    DocumentTypes.IdentityCard,
    "4511",
    "789012"
);

// Создание транспортных средств
var teslaModel3 = new Automobile(
    "Tesla",
    "Model 3",
    2023,
    "5YJ3E1EA1PF123456",
    "A001AA777",
    personOne,
    VehicleBodyTypes.SedanType,
    VehicleCategories.PremiumClass
);

var ducatiPanigale = new Motorcycle(
    "Ducati",
    "Panigale V4",
    2023,
    "ZDMH405W9NB123456",
    "B002BB777",
    personTwo,
    "Алюминиевая монокок",
    true
);

// Создание хранилища
var transportRegistry = new TransportStorage();

// Добавление транспортных средств в хранилище
transportRegistry.addItem(teslaModel3);
transportRegistry.addItem(ducatiPanigale);

// Демонстрация работы методов
console.log("=== Все транспортные средства ===");
transportRegistry.getAllItems().forEach(function(item) { return item.showDetails(); });

console.log("\n=== Отсортированные по модели ===");
transportRegistry.getSortedByModel().forEach(function(item) { return item.showDetails(); });

console.log("\n=== Поиск по производителю (Tesla) ===");
transportRegistry.getByManufacturer("Tesla").forEach(function(item) { return item.showDetails(); });

console.log("\n=== Спецификации Tesla Model 3 ===");
console.log(teslaModel3.getSpecifications());