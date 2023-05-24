
window.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.calculator input[type="button"]');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.value;
        handleButtonClick(value);
      });
    });
  
    /**
     * Handles button clicks and performs the corresponding action based on the value of the button.
     * @param {string} value - The value of the button that was clicked.
     * 
     */
    function handleButtonClick(value) {
      switch (value) {
        case 'AC':
          clearDisplay();
          break;
        case 'DE':
          deleteLastEntry();
          break;
        case '=':
          evaluateExpression();
          break;
        default:
          appendToDisplay(value);
      }
    }

    /**
     * Clears the display
     * @returns {void} 
     */
    function clearDisplay() {
      display.value = '';
    }

    /**
     * Deletes the last entry
     * @returns {void}
     */
    function deleteLastEntry() {
      display.value = display.value.toString().slice(0, -1);
    }
    

    /** 
     * @param {string} value The value of the button that was clicked is appended to the display
     */
    function appendToDisplay(value) {
      display.value += value;
    }
   
    // Evaluates the expression
    function evaluateExpression() {
      display.value = eval(display.value);
    }
  });
  