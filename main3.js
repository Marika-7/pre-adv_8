function max(...arg) {
    let num = arg[0];
    for (let i = 1; i < arg.length; i++) {
        num = num < arg[i] ? arg[i] : num;
    }
    return num;
}
console.log(max(1, 2, 3, 4));
console.log(max(5, -2));
console.log(max(5, -2, 30, 6));
