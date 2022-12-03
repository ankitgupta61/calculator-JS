let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error";
        }
        break;
      case "+/-":
        if (display.innerText) {
          if (display.innerText.charAt(0) === "-") {
            display.innerText = "+" + display.innerText.slice(1);
          } else {
            display.innerText = "-" + display.innerText.slice(0);
          }
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
