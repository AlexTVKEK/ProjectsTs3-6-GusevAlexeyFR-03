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

var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
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
function ToUpperCase(method) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = method.apply(this, args);
        return result.toUpperCase();
    };
}

/**
 * Перечисление типов документов
 */
var DocumentType;
(function (DocumentType) {
    DocumentType["Passport"] = "Паспорт";
    DocumentType["IDCard"] = "ID карты";
})(DocumentType || (DocumentType = {}));

/**
 * Класс владельца ТС
 */
var Owner = /** @class */ (function () {
    function Owner(_surname, _name, _patronymic, _birthDate, _documentType, _documentSeries, _documentNumber) {
        this._surname = _surname;
        this._name = _name;
        this._patronymic = _patronymic;
        this._birthDate = _birthDate;
        this._documentType = _documentType;
        this._documentSeries = _documentSeries;
        this._documentNumber = _documentNumber;
    }
    Object.defineProperty(Owner.prototype, "Surname", {
        get: function () { return this._surname; },
        set: function (value) { this._surname = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "Name", {
        get: function () { return this._name; },
        set: function (value) { this._name = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "Patronymic", {
        get: function () { return this._patronymic; },
        set: function (value) { this._patronymic = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "BirthDate", {
        get: function () { return this._birthDate; },
        set: function (value) { this._birthDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "DocumentType", {
        get: function () { return this._documentType; },
        set: function (value) { this._documentType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "DocumentSeries", {
        get: function () { return this._documentSeries; },
        set: function (value) { this._documentSeries = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Owner.prototype, "DocumentNumber", {
        get: function () { return this._documentNumber; },
        set: function (value) { this._documentNumber = value; },
        enumerable: false,
        configurable: true
    });
    Owner.prototype.printOwnerInfo = function () {
        console.log("\n            Информация о владельце:\n            Фамилия: ".concat(this._surname, "\n            Имя: ").concat(this._name, "\n            Отчество: ").concat(this._patronymic, "\n            Дата рождения: ").concat(this._birthDate.toLocaleDateString(), "\n            Тип документа: ").concat(this._documentType, "\n            Серия: ").concat(this._documentSeries, "\n            Номер: ").concat(this._documentNumber, "\n        "));
    };
    return Owner;
}());

/**
 * Базовый класс ТС
 */
var Vehicle = /** @class */ (function () {
    function Vehicle(_brand, _model, _manufactureYear, _vinNumber, _registrationNumber, _owner) {
        this._brand = _brand;
        this._model = _model;
        this._manufactureYear = _manufactureYear;
        this._vinNumber = _vinNumber;
        this._registrationNumber = _registrationNumber;
        this._owner = _owner;
    }
    Object.defineProperty(Vehicle.prototype, "Brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "ManufactureYear", {
        get: function () { return this._manufactureYear; },
        set: function (value) { this._manufactureYear = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "VinNumber", {
        get: function () { return this._vinNumber; },
        set: function (value) { this._vinNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "RegistrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.printVehicleInfo = function () {
        console.log("\n            Информация о транспортном средстве:\n            Марка: ".concat(this._brand, "\n            Модель: ").concat(this._model, "\n            Год выпуска: ").concat(this._manufactureYear, "\n            VIN: ").concat(this._vinNumber, "\n            Регистрационный номер: ").concat(this._registrationNumber, "\n        "));
    };
    Vehicle.prototype.getVehicleInfo = function () {
        return "Марка: ".concat(this._brand, ", Модель: ").concat(this._model);
    };
    var _a;
    var _instanceExtraInitializers = [];
    var _getVehicleInfo_decorators;
    (function () {
        _getVehicleInfo_decorators = [ToUpperCase];
        __esDecorate(_a, null, _getVehicleInfo_decorators, { kind: "method", name: "getVehicleInfo", static: false, private: false, access: { has: function (obj) { return "getVehicleInfo" in obj; }, get: function (obj) { return obj.getVehicleInfo; } } }, null, _instanceExtraInitializers);
    })();
    return Vehicle;
}());

/**
 * Перечисление типов кузова
 */
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "Седан";
    BodyType["Coupe"] = "Купе";
    BodyType["Hatchback"] = "Хэтчбэк";
    BodyType["SUV"] = "Внедорожник";
    BodyType["Wagon"] = "Универсал";
})(BodyType || (BodyType = {}));

/**
 * Перечисление классов автомобиля
 */
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "Эконом";
    CarClass["Standard"] = "Стандарт";
    CarClass["Luxury"] = "Люкс";
    CarClass["Premium"] = "Премиум";
    CarClass["Sport"] = "Спортивный";
})(CarClass || (CarClass = {}));

/**
 * Класс автомобиля
 */
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, manufactureYear, vinNumber, registrationNumber, owner, _bodyType, _carClass) {
        var _this = _super.call(this, brand, model, manufactureYear, vinNumber, registrationNumber, owner) || this;
        _this._bodyType = _bodyType;
        _this._carClass = _carClass;
        return _this;
    }
    Object.defineProperty(Car.prototype, "BodyType", {
        get: function () {
            return this._bodyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "CarClass", {
        get: function () {
            return this._carClass;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.printVehicleInfo = function () {
        _super.prototype.printVehicleInfo.call(this);
        console.log("\n            Дополнительная информация:\n            Тип кузова: ".concat(this._bodyType, "\n            Класс автомобиля: ").concat(this._carClass, "\n        "));
    };
    var _a;
    var _classDecorators = [SealedClass];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = Vehicle;
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Car = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    return Car;
}(Vehicle));

// Пример использования
var ownerExample = new Owner(
    "Иванов",
    "Петр",
    "Сергеевич",
    new Date(1990, 5, 15),
    DocumentType.Passport,
    "4510",
    "123456"
);

var carExample = new Car(
    "Toyota",
    "Camry",
    2023,
    "JT2BF22K1W0123456",
    "А123БВ777",
    ownerExample,
    BodyType.Sedan,
    CarClass.Premium
);

// Вывод информации
carExample.printVehicleInfo();
ownerExample.printOwnerInfo();
console.log(carExample.getVehicleInfo());