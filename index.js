let screen = document.getElementById("screen");
let currentValue = "";

function isPresent(item) {
    return screen.value.includes(item);
}

function validateInput(item) {
    // Check if there are consecutive operators
    if (/([+*/-])\1+/.test(screen.value + item)) {
        return "";
    } else {
        return item;
    }
}


let buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let item = e.target.innerText;

        switch (item) {
            case 'AC':
                currentValue = "";
                break;
            case 'DEL':
                currentValue = currentValue.slice(0, -1);
                break;
            case '%':
                currentValue = (eval(currentValue) / 100).toString();
                break;
            case '7':
                currentValue += 7;
                break;
            case '8':
                currentValue += 8;
                break;
            case '9':
                currentValue += 9;
                break;
            case 'x':
                item = '*';
                currentValue += validateInput(item)
                //console.log( currentValue);
                break;
            case '4':
                currentValue += 4;
                break;
            case '5':
                currentValue += 5;
                break;
            case '6':
                currentValue += 6;
                break;
            case '-':
                item = '-';
                currentValue += validateInput(item);
                break;
            case '1':
                currentValue += 1;
                break;
            case '2':
                currentValue += 2;
                break;
            case '3':
                currentValue += 3;
                break;
            case '+':
                item = '+';
                currentValue += validateInput(item)
                break;
            case '$':
                //currentValue += 7;
                break;
            case '0':
                currentValue += 0;
                break;
            case '.':
                item = '.';
                currentValue += isPresent(item) ? "" : item;
                break;
            case '=':
                try {
                    currentValue = eval(currentValue);
                    screen.value = currentValue;
                } catch (error) {
                    screen.value = "sorry";
                }

                break;
            default:

                break;
        }

        screen.value = currentValue;
    });
}