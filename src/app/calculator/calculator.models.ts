export class Button implements CaclulatorButton {
    caption: string;
    operationType: ButtonOperationType;
    handler: (value: string) => string;
    classModifier: string;

    constructor(
        caption: string, 
        operationType: ButtonOperationType,
        handler: (value: string) => string,
         modifier: string = ''
    ) {
        this.caption = caption;
        this.operationType = operationType;
        this.handler = handler.bind(this);
        this.classModifier = modifier;
    }
}
