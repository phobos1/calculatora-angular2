type ButtonOperationType = 'setNumber' | 'operator' | 'setValue' | 'cleanAll' | 'evaluate';

interface CaclulatorButton {
    caption: string,
    operationType: ButtonOperationType,
    handler: (value: string) => string,
    classModifier: string
}

interface Calculation {
    calculation: string,
    date: string
}

type CalculationsType = Array<Calculation>;

