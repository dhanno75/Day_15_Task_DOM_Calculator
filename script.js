function clr() {
  document.querySelector("#result").value = "";
}

function myFun(event) {
  if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "0" ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "%"
  ) {
    document.querySelector("#result").value += event.key;
    return;
  } else {
    alert("Only numbers are allowed!");
  }
}

function displayNumb(num) {
  document.querySelector("#result").value += num;
}

function solve() {
  let res = document.querySelector("#result").value;
  let y = eval(res);
  document.querySelector("#result").value = y;
}
