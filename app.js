var cur_result = document.querySelector(".result2");
var pre_result = document.querySelector(".result1");
var btns = document.querySelectorAll(".btn");

for (btn of btns) {
  btn.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    if (btntext == "×") {
      btntext = "*";
    }

    if (btntext == "÷") {
      btntext = "/";
    }

    cur_result.value += btntext;
  });
}

function sin() {
  pre_result.value = "sin(" + cur_result.value + ")=";
  cur_result.value = Math.sin(cur_result.value);
}

function cos() {
  pre_result.value = "cos(" + cur_result.value + ")=";
  cur_result.value = Math.cos(cur_result.value);
}

function tan() {
  pre_result.value = "tan(" + cur_result.value + ")=";
  cur_result.value = Math.tan(cur_result.value);
}

function sqrt() {
  pre_result.value = "√" + cur_result.value + "=";

  cur_result.value = Math.sqrt(cur_result.value, 2);
}

function log() {
  pre_result.value = "log(" + cur_result.value + ")=";
  cur_result.value = Math.log10(cur_result.value);
}

function In() {
  pre_result.value = "In(" + cur_result.value + ")=";
  cur_result.value = Math.log(cur_result.value);
}

function exp() {
  cur_result.value += 2.71828182846;
}

function pow() {
  cur_result.value += "**";
}

function fact() {
  var i, num;
  var res = 1;
  num = cur_result.value;
  for (i = 1; i <= num; i++) {
    res = res * i;
  }
  pre_result.value = cur_result.value + "!=";
  cur_result.value = res;
}

function check() {
  try {
    pre_result.value = cur_result.value + "=";
    cur_result.value = eval(cur_result.value);
  } catch (error) {
    pre_result.value = cur_result.value + "=";
    cur_result.value = "ERROR";
  }
}
