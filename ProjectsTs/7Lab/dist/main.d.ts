declare enum DocumentTypes {
    InternalPassport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    IdentityCard = "ID \u043A\u0430\u0440\u0442\u044B"
}
interface IPerson {
    readonly lastName: string;
    readonly firstName: string;
    readonly middleName: string;
    readonly dateOfBirth: Date;
    readonly identityDocType: DocumentTypes;
    readonly identityDocSeries: string;
    readonly identityDocNumber: string;
    displayPersonInfo(): void;
}
declare class Person implements IPerson {
    private readonly _lastName;
    private readonly _firstName;
    private readonly _middleName;
    private readonly _dateOfBirth;
    private readonly _identityDocType;
    private readonly _identityDocSeries;
    private readonly _identityDocNumber;
    constructor(_lastName: string, _firstName: string, _middleName: string, _dateOfBirth: Date, _identityDocType: DocumentTypes, _identityDocSeries: string, _identityDocNumber: string);
    get lastName(): string;
    get firstName(): string;
    get middleName(): string;
    get dateOfBirth(): Date;
    get identityDocType(): DocumentTypes;
    get identityDocSeries(): string;
    get identityDocNumber(): string;
    displayPersonInfo(): void;
}
interface ITransport {
    readonly manufacturer: string;
    readonly modelName: string;
    readonly manufacturingYear: number;
    readonly vinCode: string;
    readonly regNumber: string;
    readonly personInfo: IPerson;
    showDetails(): void;
}
declare enum VehicleBodyTypes {
    SedanType = "\u0421\u0435\u0434\u0430\u043D",
    CoupeType = "\u041A\u0443\u043F\u0435",
    HatchbackType = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A"
}
declare enum VehicleCategories {
    EconomyClass = "\u042D\u043A\u043E\u043D\u043E\u043C",
    BusinessClass = "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
    PremiumClass = "\u041B\u044E\u043A\u0441"
}
declare abstract class BaseTransport implements ITransport {
    protected readonly _manufacturer: string;
    protected readonly _modelName: string;
    protected readonly _manufacturingYear: number;
    protected readonly _vinCode: string;
    protected readonly _regNumber: string;
    protected readonly _personInfo: IPerson;
    constructor(_manufacturer: string, _modelName: string, _manufacturingYear: number, _vinCode: string, _regNumber: string, _personInfo: IPerson);
    get manufacturer(): string;
    get modelName(): string;
    get manufacturingYear(): number;
    get vinCode(): string;
    get regNumber(): string;
    get personInfo(): IPerson;
    abstract showDetails(): void;
    protected displayBaseInfo(): void;
}
interface IAutomobile extends ITransport {
    readonly bodyType: VehicleBodyTypes;
    readonly category: VehicleCategories;
    getSpecifications(): {
        bodyType: VehicleBodyTypes;
        category: VehicleCategories;
    };
}
declare class Automobile extends BaseTransport implements IAutomobile {
    private readonly _bodyType;
    private readonly _category;
    constructor(manufacturer: string, modelName: string, manufacturingYear: number, vinCode: string, regNumber: string, personInfo: IPerson, _bodyType: VehicleBodyTypes, _category: VehicleCategories);
    get bodyType(): VehicleBodyTypes;
    get category(): VehicleCategories;
    showDetails(): void;
    getSpecifications(): {
        bodyType: VehicleBodyTypes;
        category: VehicleCategories;
    };
}
interface IMotorcycle extends ITransport {
    readonly frameType: string;
    readonly isSportBike: boolean;
}
declare class Motorcycle extends BaseTransport implements IMotorcycle {
    private readonly _frameType;
    private readonly _isSportBike;
    constructor(manufacturer: string, modelName: string, manufacturingYear: number, vinCode: string, regNumber: string, personInfo: IPerson, _frameType: string, _isSportBike: boolean);
    get frameType(): string;
    get isSportBike(): boolean;
    showDetails(): void;
}
interface ITransportStorage<T extends ITransport> {
    readonly createdAt: Date;
    readonly items: T[];
    getAllItems(): T[];
    getByManufacturer(manufacturer: string): T[];
    getSortedByModel(): T[];
}
declare class TransportStorage<T extends ITransport> implements ITransportStorage<T> {
    private readonly _createdAt;
    private readonly _items;
    constructor();
    get createdAt(): Date;
    get items(): T[];
    addItem(item: T): void;
    getAllItems(): T[];
    getSortedByModel(): T[];
    getByManufacturer(manufacturer: string): T[];
}
declare const personOne: Person;
declare const personTwo: Person;
declare const teslaModel3: Automobile;
declare const ducatiPanigale: Motorcycle;
declare const transportRegistry: TransportStorage<ITransport>;
