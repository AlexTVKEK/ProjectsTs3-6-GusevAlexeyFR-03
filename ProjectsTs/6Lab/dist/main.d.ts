/**
 * Декоратор для запечатывания класса
 */
declare function SealedClass(constructor: Function): void;
/**
 * Декоратор для преобразования в верхний регистр
 */
declare function ToUpperCase(_: any, __: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare namespace Documents {
    enum DocumentType {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        IDCard = "ID \u043A\u0430\u0440\u0442\u044B"
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
declare class Owner implements IOwner {
    private _surname;
    private _name;
    private _patronymic;
    private _birthDate;
    private _documentType;
    private _documentSeries;
    private _documentNumber;
    constructor(_surname: string, _name: string, _patronymic: string, _birthDate: Date, _documentType: Documents.DocumentType, _documentSeries: string, _documentNumber: string);
    get Surname(): string;
    set Surname(value: string);
    get Name(): string;
    set Name(value: string);
    get Patronymic(): string;
    set Patronymic(value: string);
    get BirthDate(): Date;
    set BirthDate(value: Date);
    get DocumentType(): Documents.DocumentType;
    set DocumentType(value: Documents.DocumentType);
    get DocumentSeries(): string;
    set DocumentSeries(value: string);
    get DocumentNumber(): string;
    set DocumentNumber(value: string);
    printOwnerInfo(): void;
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
declare class Vehicle implements IVehicle {
    private _brand;
    private _model;
    private _manufactureYear;
    private _vinNumber;
    private _registrationNumber;
    private _owner;
    constructor(_brand: string, _model: string, _manufactureYear: number, _vinNumber: string, _registrationNumber: string, _owner: IOwner);
    get Brand(): string;
    set Brand(value: string);
    get Model(): string;
    set Model(value: string);
    get ManufactureYear(): number;
    set ManufactureYear(value: number);
    get VinNumber(): string;
    set VinNumber(value: string);
    get RegistrationNumber(): string;
    set RegistrationNumber(value: string);
    get Owner(): IOwner;
    set Owner(value: IOwner);
    printVehicleInfo(): void;
    getVehicleInfo(): string;
}
declare namespace VehicleTypes {
    enum BodyType {
        Sedan = "\u0421\u0435\u0434\u0430\u043D",
        Coupe = "\u041A\u0443\u043F\u0435",
        Hatchback = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A",
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        Wagon = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B"
    }
    enum CarClass {
        Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
        Standard = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
        Luxury = "\u041B\u044E\u043A\u0441",
        Premium = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C",
        Sport = "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439"
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
declare class Car extends Vehicle implements ICar {
    private readonly _bodyType;
    private readonly _carClass;
    constructor(brand: string, model: string, manufactureYear: number, vinNumber: string, registrationNumber: string, owner: IOwner, _bodyType: VehicleTypes.BodyType, _carClass: VehicleTypes.CarClass);
    get BodyType(): VehicleTypes.BodyType;
    get CarClass(): VehicleTypes.CarClass;
    printVehicleInfo(): void;
}
declare const ownerExample: Owner;
declare const carExample: Car;
