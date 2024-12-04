document.addEventListener("DOMContentLoaded", () => {
    const valueDisplay = document.querySelector(".value");
    const buttons = document.querySelectorAll(".num");
  
    let currentValue = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonValue = button.getAttribute("data-button");
  
        if (buttonValue === "C") {
          // Clear the display
          currentValue = "";
        } else if (buttonValue === "CE") {
          // Clear the last character
          currentValue = currentValue.slice(0, -1);
        } else if (buttonValue === "=") {
          // Evaluate the expression
          try {
            currentValue = eval(currentValue).toString();
          } catch {
            currentValue = "Error";
          }
        } else {
          // Add the button value to the current input
          currentValue += buttonValue;
        }
  
        // Update the display
        valueDisplay.value = currentValue;
      });
    });
  });