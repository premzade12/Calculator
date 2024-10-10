let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    // Map key presses to calculator input
    if (e.key >= '0' && e.key <= '9') 
    {
        handleInput(e.key); // Numbers
    } 
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') 
    {
        handleInput(e.key); // Operators
    } 
    else if (e.key === 'Enter') 
    {
        handleInput('='); // Equals sign (Enter key)
    } 
    else if (e.key === 'Backspace') 
    {
        handleInput('DEL'); // Backspace for delete
    } 
    else if (e.key === 'Escape') 
    {
        handleInput('AC'); // Escape key for all clear
    }
});

function handleInput(value) {
    if (value === '=') 
    {
        try 
        {
            string = eval(string); // Evaluate the string
            input.value = string;
        } 
        catch (error) 
        {
            input.value = 'Error'; // Handle invalid expressions
        }
    } 
    else if (value === 'AC') 
    {
        string = ""; // Clear the input
        input.value = string;
    } 
    else if (value === 'DEL') 
    {
        string = string.substring(0, string.length - 1); // Remove last character
        input.value = string;
    } 
    else 
    {
        string += value; // Add character to string
        input.value = string;
    }
}