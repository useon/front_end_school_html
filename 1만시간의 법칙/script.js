const btnStart = document.querySelector(".btn_start");
const result = document.querySelector(".result");
const resultJob = document.querySelector(".result_job");
const resultTime = document.querySelector(".result_time");
const inputJob = document.querySelector(".input_jab");
const inputTime = document.querySelector(".input_time");

result.style.display = "none";

function calculator() {

  if (inputJob.value == "") {
    alert('입력해주세요!');
    inputJob.focus();
    return false;
  } else if (inputTime.value == "") {
    alert('입력해주세요!');
    inputTime.focus();
    return false;
  } else if (inputTime.value > 24) {
    alert('24이하의 값을 입력해 주세요!');
    return false;
  }

  setTimeout(function () {
    result.style.display = "block";
    resultJob.innerText = inputJob.value;
    resultTime.innerText = parseInt((10000 / inputTime.value));
  })
}
btnStart.addEventListener("click", calculator);

