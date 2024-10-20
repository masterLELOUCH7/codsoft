document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = '';
    let isResultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonValue = this.textContent;

            if (buttonValue === 'C') {
                currentInput = '';
                display.textContent = '0';
                return;
            }

            if (buttonValue === '⌫') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput || '0';
                return;
            }

            if (buttonValue === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (e) {
                    currentInput = 'Error';
                }
                display.textContent = currentInput;
                isResultDisplayed = true;
                return;
            }

            if (isResultDisplayed && !isNaN(buttonValue)) {
                currentInput = buttonValue;
                isResultDisplayed = false;
            } else {
                currentInput += buttonValue;
            }

            display.textContent = currentInput;
        });
    });
});
