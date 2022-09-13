const dis = document.getElementById("display2");

let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = " ";
        dis.innerText = "";
        break;
      case "←":
        dis.innerText = dis.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(dis.innerText);
        } catch {
          display.innerText = "Error";
        }

        break;

        break;
      default:
        dis.innerText += e.target.innerText;
    }
  });
});
