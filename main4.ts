function getSqrt(num:number):void {
    switch(true){
        case(num === undefined):
            console.log('Будь ласка, введіть число!');
            break;
        case(+num < 0):
            console.log('Введіть додатнє число');
            break;
        case(+num >= 0):
            console.log(`Квадратний корінь з ${num} дорівнює ${Math.sqrt(num)}`);
            break;
        default:
            console.log('Повинно бути числове значення');
            break;
    }
}

getSqrt(3);
getSqrt(0);
getSqrt();
getSqrt('gfhgh');
getSqrt(-3);
