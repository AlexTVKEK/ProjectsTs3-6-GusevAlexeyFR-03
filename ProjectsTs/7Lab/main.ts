// Типы документов, удостоверяющих личность
enum DocumentTypes {
    InternalPassport = "Паспорт",
    IdentityCard = "ID карты",
}

// Интерфейс для информации о персоне
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

// Реализация класса для работы с информацией о персоне
class Person implements IPerson {
    constructor(
        private readonly _lastName: string,
        private readonly _firstName: string,
        private readonly _middleName: string,
        private readonly _dateOfBirth: Date,
        private readonly _identityDocType: DocumentTypes,
        private readonly _identityDocSeries: string,
        private readonly _identityDocNumber: string
    ) {}

    // Геттеры для доступа к приватным полям
    get lastName(): string { return this._lastName; }
    get firstName(): string { return this._firstName; }
    get middleName(): string { return this._middleName; }
    get dateOfBirth(): Date { return this._dateOfBirth; }
    get identityDocType(): DocumentTypes { return this._identityDocType; }
    get identityDocSeries(): string { return this._identityDocSeries; }
    get identityDocNumber(): string { return this._identityDocNumber; }

    // Метод для отображения информации о персоне
    public displayPersonInfo(): void {
        console.log(
            `Информация о владельце:
            ФИО: ${this._lastName} ${this._firstName} ${this._middleName}
            Дата рождения: ${this._dateOfBirth.toLocaleDateString()}
            Документ: ${this._identityDocType}
            Серия: ${this._identityDocSeries}
            Номер: ${this._identityDocNumber}`
        );
    }
}

// Базовый интерфейс для транспортных средств
interface ITransport {
    readonly manufacturer: string;
    readonly modelName: string;
    readonly manufacturingYear: number;
    readonly vinCode: string;
    readonly regNumber: string;
    readonly personInfo: IPerson;
    showDetails(): void;
}

// Типы кузова автомобиля
enum VehicleBodyTypes {
    SedanType = "Седан",
    CoupeType = "Купе",
    HatchbackType = "Хэтчбэк"
}

// Классификация автомобилей
enum VehicleCategories {
    EconomyClass = "Эконом",
    BusinessClass = "Стандарт",
    PremiumClass = "Люкс"
}

// Базовый класс для транспортных средств
abstract class BaseTransport implements ITransport {
    constructor(
        protected readonly _manufacturer: string,
        protected readonly _modelName: string,
        protected readonly _manufacturingYear: number,
        protected readonly _vinCode: string,
        protected readonly _regNumber: string,
        protected readonly _personInfo: IPerson
    ) {}

    // Геттеры для доступа к защищенным полям
    get manufacturer(): string { return this._manufacturer; }
    get modelName(): string { return this._modelName; }
    get manufacturingYear(): number { return this._manufacturingYear; }
    get vinCode(): string { return this._vinCode; }
    get regNumber(): string { return this._regNumber; }
    get personInfo(): IPerson { return this._personInfo; }

    // Абстрактный метод для отображения деталей
    abstract showDetails(): void;

    // Базовый метод для отображения основной информации
    protected displayBaseInfo(): void {
        console.log(
            `Транспортное средство:
            Производитель: ${this._manufacturer}
            Модель: ${this._modelName}
            Год выпуска: ${this._manufacturingYear}
            VIN: ${this._vinCode}
            Рег. номер: ${this._regNumber}`
        );
    }
}

// Интерфейс для автомобилей
interface IAutomobile extends ITransport {
    readonly bodyType: VehicleBodyTypes;
    readonly category: VehicleCategories;
    getSpecifications(): { bodyType: VehicleBodyTypes; category: VehicleCategories };
}

// Класс для работы с автомобилями
class Automobile extends BaseTransport implements IAutomobile {
    constructor(
        manufacturer: string,
        modelName: string,
        manufacturingYear: number,
        vinCode: string,
        regNumber: string,
        personInfo: IPerson,
        private readonly _bodyType: VehicleBodyTypes,
        private readonly _category: VehicleCategories
    ) {
        super(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo);
    }

    get bodyType(): VehicleBodyTypes { return this._bodyType; }
    get category(): VehicleCategories { return this._category; }

    // Реализация метода отображения деталей
    public showDetails(): void {
        this.displayBaseInfo();
        console.log(
            `Дополнительные характеристики:
            Тип кузова: ${this._bodyType}
            Категория: ${this._category}`
        );
    }

    // Метод получения спецификации автомобиля
    public getSpecifications(): { bodyType: VehicleBodyTypes; category: VehicleCategories } {
        return {
            bodyType: this._bodyType,
            category: this._category
        };
    }
}

// Интерфейс для мотоциклов
interface IMotorcycle extends ITransport {
    readonly frameType: string;
    readonly isSportBike: boolean;
}

// Класс для работы с мотоциклами
class Motorcycle extends BaseTransport implements IMotorcycle {
    constructor(
        manufacturer: string,
        modelName: string,
        manufacturingYear: number,
        vinCode: string,
        regNumber: string,
        personInfo: IPerson,
        private readonly _frameType: string,
        private readonly _isSportBike: boolean
    ) {
        super(manufacturer, modelName, manufacturingYear, vinCode, regNumber, personInfo);
    }

    get frameType(): string { return this._frameType; }
    get isSportBike(): boolean { return this._isSportBike; }

    // Реализация метода отображения деталей
    public showDetails(): void {
        this.displayBaseInfo();
        console.log(
            `Характеристики мотоцикла:
            Тип рамы: ${this._frameType}
            Спортивный: ${this._isSportBike ? 'Да' : 'Нет'}`
        );
    }
}

// Интерфейс хранилища транспортных средств
interface ITransportStorage<T extends ITransport> {
    readonly createdAt: Date;
    readonly items: T[];
    getAllItems(): T[];
    getByManufacturer(manufacturer: string): T[];
    getSortedByModel(): T[];
}

// Класс для управления хранилищем транспортных средств
class TransportStorage<T extends ITransport> implements ITransportStorage<T> {
    private readonly _createdAt: Date;
    private readonly _items: T[];

    constructor() {
        this._createdAt = new Date();
        this._items = [];
    }

    get createdAt(): Date { return this._createdAt; }
    get items(): T[] { return this._items; }

    // Метод добавления транспортного средства
    public addItem(item: T): void {
        this._items.push(item);
    }

    // Получение всех транспортных средств
    public getAllItems(): T[] {
        return this._items;
    }

    // Сортировка по модели (по убыванию)
    public getSortedByModel(): T[] {
        return [...this._items].sort((a, b) => b.modelName.localeCompare(a.modelName));
    }

    // Поиск по производителю
    public getByManufacturer(manufacturer: string): T[] {
        return this._items.filter(item => 
            item.manufacturer.toLowerCase() === manufacturer.toLowerCase()
        );
    }
}

// Примеры использования

// Создание владельцев
const personOne = new Person(
    "Смирнов",
    "Александр",
    "Петрович",
    new Date(1988, 5, 15),
    DocumentTypes.InternalPassport,
    "4510",
    "123456"
);

const personTwo = new Person(
    "Петрова",
    "Елена",
    "Сергеевна",
    new Date(1992, 8, 20),
    DocumentTypes.IdentityCard,
    "4511",
    "789012"
);

// Создание транспортных средств
const teslaModel3 = new Automobile(
    "Tesla",
    "Model 3",
    2023,
    "5YJ3E1EA1PF123456",
    "A001AA777",
    personOne,
    VehicleBodyTypes.SedanType,
    VehicleCategories.PremiumClass
);

const ducatiPanigale = new Motorcycle(
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
const transportRegistry = new TransportStorage<ITransport>();

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