/**
 * Декоратор для запечатывания класса
 */
function SealedClass(constructor: Function): void {
    Object.seal(constructor.prototype);
}

/**
 * Декоратор для преобразования в верхний регистр
 */
function ToUpperCase(_: any, __: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
    return descriptor;
}

namespace Documents {
    export enum DocumentType {
        Passport = "Паспорт",
        IDCard = "ID карты"
    }
}

/**
 * Интерфейс для работы с данными владельца ТС
 */
interface IOwner {
    get Surname(): string;
    get Name(): string;
    get Patronymic(): string; 
    get BirthDate(): Date;
    get DocumentType(): Documents.DocumentType; 
    get DocumentSeries(): string;
    get DocumentNumber(): string;
    printOwnerInfo(): void;
}

/**
 * Класс для хранения и управления данными владельца ТС
 */
class Owner implements IOwner {
    constructor(
        private _surname: string,
        private _name: string,
        private _patronymic: string,
        private _birthDate: Date,
        private _documentType: Documents.DocumentType,
        private _documentSeries: string,
        private _documentNumber: string
    ) {}

    get Surname(): string { return this._surname; }
    set Surname(value: string) { this._surname = value; }
    
    get Name(): string { return this._name; }
    set Name(value: string) { this._name = value; }
    
    get Patronymic(): string { return this._patronymic; }
    set Patronymic(value: string) { this._patronymic = value; }

    get BirthDate(): Date { return this._birthDate; }
    set BirthDate(value: Date) { this._birthDate = value; }

    get DocumentType(): Documents.DocumentType { return this._documentType; }
    set DocumentType(value: Documents.DocumentType) { this._documentType = value; }

    get DocumentSeries(): string { return this._documentSeries; }
    set DocumentSeries(value: string) { this._documentSeries = value; }

    get DocumentNumber(): string { return this._documentNumber; }
    set DocumentNumber(value: string) { this._documentNumber = value; }

    public printOwnerInfo(): void {
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
 * Интерфейс для базового транспортного средства
 */
interface IVehicle {
    get Brand(): string;
    get Model(): string;
    get ManufactureYear(): number;
    get VinNumber(): string;
    get RegistrationNumber(): string;
    get Owner(): IOwner;
    printVehicleInfo(): void;
    getVehicleInfo(): string;
}

/**
 * Базовый класс для транспортного средства
 */
class Vehicle implements IVehicle {
    constructor(
        private _brand: string,
        private _model: string,
        private _manufactureYear: number,
        private _vinNumber: string,
        private _registrationNumber: string,
        private _owner: IOwner
    ) {}
    
    get Brand(): string { return this._brand; }
    set Brand(value: string) { this._brand = value; }
    
    get Model(): string { return this._model; }
    set Model(value: string) { this._model = value; }
    
    get ManufactureYear(): number { return this._manufactureYear; }
    set ManufactureYear(value: number) { this._manufactureYear = value; }
    
    get VinNumber(): string { return this._vinNumber; }
    set VinNumber(value: string) { this._vinNumber = value; }
    
    get RegistrationNumber(): string { return this._registrationNumber; }
    set RegistrationNumber(value: string) { this._registrationNumber = value; }
    
    get Owner(): IOwner { return this._owner; }
    set Owner(value: IOwner) { this._owner = value; }
    
    public printVehicleInfo(): void {
        console.log(`
            Информация о транспортном средстве:
            Марка: ${this._brand}
            Модель: ${this._model}
            Год выпуска: ${this._manufactureYear}
            VIN: ${this._vinNumber}
            Регистрационный номер: ${this._registrationNumber}
        `);
    }

    @ToUpperCase
    public getVehicleInfo(): string {
        return `Марка: ${this._brand}, Модель: ${this._model}`;
    }
}

namespace VehicleTypes {
    export enum BodyType {
        Sedan = "Седан",
        Coupe = "Купе",
        Hatchback = "Хэтчбэк",
        SUV = "Внедорожник",
        Wagon = "Универсал"
    }

    export enum CarClass {
        Economy = "Эконом",
        Standard = "Стандарт",
        Luxury = "Люкс",
        Premium = "Премиум",
        Sport = "Спортивный"
    }
}

/**
 * Интерфейс для автомобиля
 */
interface ICar extends IVehicle {
    readonly BodyType: VehicleTypes.BodyType;
    readonly CarClass: VehicleTypes.CarClass;
}

/**
 * Класс автомобиля
 */
@SealedClass
class Car extends Vehicle implements ICar {
    constructor(
        brand: string,
        model: string,
        manufactureYear: number,
        vinNumber: string,
        registrationNumber: string,
        owner: IOwner,
        private readonly _bodyType: VehicleTypes.BodyType,
        private readonly _carClass: VehicleTypes.CarClass
    ) {
        super(brand, model, manufactureYear, vinNumber, registrationNumber, owner);
    }

    get BodyType(): VehicleTypes.BodyType {
        return this._bodyType;
    }

    get CarClass(): VehicleTypes.CarClass {
        return this._carClass;
    }

    public printVehicleInfo(): void {
        super.printVehicleInfo();
        console.log(`
            Дополнительная информация:
            Тип кузова: ${this._bodyType}
            Класс автомобиля: ${this._carClass}
        `);
    }
}

// Пример использования
const ownerExample = new Owner(
    "Иванов",
    "Петр",
    "Сергеевич",
    new Date(1990, 5, 15),
    Documents.DocumentType.Passport,
    "4510",
    "123456"
);

const carExample = new Car(
    "Toyota",
    "Camry",
    2023,
    "JT2BF22K1W0123456",
    "А123БВ777",
    ownerExample,
    VehicleTypes.BodyType.Sedan,
    VehicleTypes.CarClass.Premium
);

// Вывод информации
carExample.printVehicleInfo();
ownerExample.printOwnerInfo();
console.log(carExample.getVehicleInfo());