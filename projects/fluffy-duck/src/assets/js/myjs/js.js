window.onload = function () {
  let next = document.getElementById("next");
  let brev = document.getElementById("brev");
  let items = document.getElementsByClassName("item");
  var i = 0;
  console.log(items);
  check();

  console.log(typeof items);
  next.addEventListener("click", function () {
    console.log("next work");
    items[i].style.display = "none";
    i++;
    check();
  });
  brev.addEventListener("click", function () {
    if (i != 0) {
      items[i - 1].style.display = "block";
      i--;
    }
    check();
  });
  function check() {
    if (i == 0) {
      brev.disabled = true;
    } else if (i == items.length - 1) {
      next.disabled = true;
    } else {
      brev.disabled = false;
      next.disabled = false;
    }
  }
};
