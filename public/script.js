let buttons = document.querySelectorAll('.btn');
let Clear = document.getElementById('bt');

let string = '';

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('#input').value = string;
        }

        else {
            string = string + e.target.innerHTML;
            document.querySelector('#input').value = string;
        }
    })
})

const clearFunc = () => {
    string = '';
    document.querySelector('#input').value = string;

}