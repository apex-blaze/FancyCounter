//Initial Count
let count = 0;

const value = document.querySelector("#value");
const btnList = document.querySelectorAll(".btn");
btnList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("dec")) {
      count--;
    } else if (styles.contains("inc")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#949cdf";
    } else if (count < 0) {
      value.style.color = "#cd5d7d";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
