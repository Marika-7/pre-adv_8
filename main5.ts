//+ get form
let form = document.forms[0] as HTMLFormElement;
//+ click functions
//+ check input field, call addToList() or setRed()
form.add.onclick = (): void => {
    if(form.set.value === '') {
        setRed(form.set);
        changePlaceholder(form.set, 1);
    }
    else {
        addToList();
    }
}
//+ clear list of bad words
form.resetL.onclick = (): void => {
    document.querySelector('.censor__list').textContent = '';
}
//+ check textarea, call editText() or setRed()
form.check.onclick = (): void => {
    if(form.text.value === '') {
        setRed(form.text);
        deleteGreen(form.text);
        changePlaceholder(form.text, 3);
    }
    else {
        changePlaceholder(form.text, 2);
        editText();
    }
}
//+ add word to list of bad words
function addToList(): void {
    let list = document.querySelector('.censor__list') as HTMLElement;
    list.textContent ? list.textContent += ', ' : 0;
    list.textContent += form.set.value;
    form.set.value = '';
    if(form.set.classList.contains('red')) {
        deleteRed(form.set);
        changePlaceholder(form.set, 0);
    }
}
//+ set red border; get input field
function setRed(field: HTMLElement): void {
    field.classList.add('red');
}
//+ delete red border; get input field
function deleteRed(field: HTMLElement): void {
    field.classList.remove('red');
}
//+ change value of placeholder; get input field and index of string
function changePlaceholder(field: HTMLElement, index: number): void {
    let str: string[] = ['word here..', 'Please write a word!', 'text here..', 'Please write a text!'];
    field.setAttribute('placeholder', str[index]);
}
//+ set green border; get input field
function setGreen(field: HTMLElement) {
    field.classList.add('green');
}
//+ delete green border; get input field
function deleteGreen(field: HTMLElement) {
    field.classList.remove('green');
}
//+ replace  bad words ***
function editText(): void {
    let list: string[] = document.querySelector('.censor__list').textContent.split(', ');
    let text: string = form.text.value;
    for(let i: number = 0; i < list.length; i++) {
        let str1: string = list[i];
        while(text.includes(str1)){
            let str2: string = '';
            for(let j: number = 0; j < str1.length; j++) {
                str2 += '*';
            }
            text = text.replace(str1, str2)
        }
    }
    form.text.value = text;
    deleteRed(form.text);
    setGreen(form.text);
}
