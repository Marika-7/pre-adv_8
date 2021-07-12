let form = document.forms[0];
form.add.onclick = () => {
    if (form.set.value === '') {
        setRed(form.set);
        changePlaceholder(form.set, 1);
    }
    else {
        addToList();
    }
};
form.resetL.onclick = () => {
    document.querySelector('.censor__list').textContent = '';
};
form.check.onclick = () => {
    if (form.text.value === '') {
        setRed(form.text);
        deleteGreen(form.text);
        changePlaceholder(form.text, 3);
    }
    else {
        changePlaceholder(form.text, 2);
        editText();
    }
};
function addToList() {
    let list = document.querySelector('.censor__list');
    list.textContent ? list.textContent += ', ' : 0;
    list.textContent += form.set.value;
    form.set.value = '';
    if (form.set.classList.contains('red')) {
        deleteRed(form.set);
        changePlaceholder(form.set, 0);
    }
}
function setRed(field) {
    field.classList.add('red');
}
function deleteRed(field) {
    field.classList.remove('red');
}
function changePlaceholder(field, index) {
    let str = ['word here..', 'Please write a word!', 'text here..', 'Please write a text!'];
    field.setAttribute('placeholder', str[index]);
}
function setGreen(field) {
    field.classList.add('green');
}
function deleteGreen(field) {
    field.classList.remove('green');
}
function editText() {
    let list = document.querySelector('.censor__list').textContent.split(', ');
    let text = form.text.value;
    for (let i = 0; i < list.length; i++) {
        let str1 = list[i];
        while (text.includes(str1)) {
            let str2 = '';
            for (let j = 0; j < str1.length; j++) {
                str2 += '*';
            }
            text = text.replace(str1, str2);
        }
    }
    form.text.value = text;
    deleteRed(form.text);
    setGreen(form.text);
}
