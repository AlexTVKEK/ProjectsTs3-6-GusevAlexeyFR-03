export declare namespace Transport {
    enum TypeOfDocument {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        IDCard = "ID \u043A\u0430\u0440\u0442\u044B"
    }
    interface Owner {
        get Surname(): string;
        get Name(): string;
        get Patronymic(): string;
        get BirthDate(): Date;
        get DocumentType(): TypeOfDocument;
        get DocumentSeries(): string;
        get DocumentNumber(): string;
        printInfoOwner(): void;
    }
    class OwnerClass implements Owner {
        private surname;
        private name;
        private patronymic;
        private birthDate;
        private documentType;
        private documentSeries;
        private documentNumber;
        get Surname(): string;
        set Surname(value: string);
        get Name(): string;
        set Name(value: string);
        get Patronymic(): string;
        set Patronymic(value: string);
        get BirthDate(): Date;
        set BirthDate(value: Date);
        get DocumentType(): TypeOfDocument;
        set DocumentType(value: TypeOfDocument);
        get DocumentSeries(): string;
        set DocumentSeries(value: string);
        get DocumentNumber(): string;
        set DocumentNumber(value: string);
        constructor(surname: string, name: string, patronymic: string, birthDate: Date, documentType: TypeOfDocument, documentSeries: string, documentNumber: string);
        printInfoOwner(): void;
    }
    interface Vehicle {
        get Mark(): string;
        get Model(): string;
        get Year(): number;
        get Vin(): string;
        get RegistrationNumber(): string;
        get Owner(): Owner;
        printInfo(): void;
    }
    class VehicleImpl implements Vehicle {
        private mark;
        private model;
        private year;
        private vin;
        private registrationNumber;
        private owner;
        get Mark(): string;
        set Mark(value: string);
        get Model(): string;
        set Model(value: string);
        get Year(): number;
        set Year(value: number);
        get Vin(): string;
        set Vin(value: string);
        get RegistrationNumber(): string;
        set RegistrationNumber(value: string);
        get Owner(): Owner;
        set Owner(value: Owner);
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
        printInfo(): void;
    }
    enum BodyType {
        Sedan = "\u0421\u0435\u0434\u0430\u043D",
        Coupe = "\u041A\u0443\u043F\u0435",
        Hatchback = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A"
    }
    enum CarClass {
        Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
        Standard = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
        Luxury = "\u041B\u044E\u043A\u0441"
    }
    interface Car extends Vehicle {
        TypeOfBody: BodyType;
        ClassOfCar: CarClass;
    }
    class CarImpl extends VehicleImpl implements Car {
        private typeOfBody;
        private classOfCar;
        get TypeOfBody(): BodyType;
        get ClassOfCar(): CarClass;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass);
        printInfo(): void;
    }
    interface Motorbike extends Vehicle {
        FrameType: string;
        IsForSport: boolean;
    }
    class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private frameType;
        private isForSport;
        get FrameType(): string;
        get IsForSport(): boolean;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isForSport: boolean);
        printInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        CreationDate: Date;
        Vehicles: T[];
        getAllVehicles(): T[];
    }
    class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private creationDate;
        private vehicles;
        get CreationDate(): Date;
        get Vehicles(): T[];
        constructor();
        getAllVehicles(): T[];
        addVehicle(vehicle: T): void;
        getCreationDate(): Date;
    }
}
