const display = document.getElementById("display")
const buttons = document.querySelectorAll(".buttons button")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent
        console.log(value);
        if(value === '=') {
            try {
                display.value = eval(display.value)
            }
            catch(err) {
                display.value = 'Error'
            }
        }
        else if(value === "CLEAR") {
            display.value = ''
        }
        else {
            display.value +=value
        }
    })
})

