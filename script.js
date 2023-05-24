

window.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('.calculator input[type="button"]');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.value;
        handleButtonClick(value);
      });
    });
  
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
  
    function clearDisplay() {
      display.value = '';
    }
  
    function deleteLastEntry() {
      display.value = display.value.toString().slice(0, -1);
    }
  
    function appendToDisplay(value) {
      display.value += value;
    }
  
    function evaluateExpression() {
      display.value = eval(display.value);
    }
  });
  