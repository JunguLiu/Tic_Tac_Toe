let lis = document.querySelectorAll("li");
let img = ['<img src="js/0.png" />', '<img src="js/x.png" />'];
let i = 0;
let board = {
  li1: "",
  li2: "",
  li3: "",
  li4: "",
  li5: "",
  li6: "",
  li7: "",
  li8: "",
  li9: "",
};

lis.forEach(lisHandler);

function lisHandler(li) {
  li.addEventListener("click", function (event) {
    if (event.target.src || event.target.getElementsByTagName("img")[0]) {
      return;
    } else {
      event.target.innerHTML = img[i];
      board[event.target.id] = img[i];
      let result = checkResult();
      console.log(result);
      if (result != false) {
        if (result == img[0]) {
          alert("O Win !!!");
          init();
        } else {
          alert("X Win !!!");
          init();
        }
      } else {
        if (checkTie()) {
          init();
        } else {
          switchOX();
        }
      }
    }
  });
}

document.getElementById("btn").addEventListener("click", function () {
  init();
});

function switchOX() {
  if (i) {
    i = 0;
    document.getElementById("turn").innerText = "O Turn";
  } else {
    i = 1;
    document.getElementById("turn").innerText = "X Turn";
  }
}
function checkResult() {
  if (board["li1"] == board["li2"] && board["li2"] == board["li3"]) {
    return board["li1"];
  } else if (board["li4"] == board["li5"] && board["li5"] == board["li6"]) {
    return board["li4"];
  } else if (board["li7"] == board["li8"] && board["li8"] == board["li9"]) {
    return board["li7"];
  } else if (board["li1"] == board["li4"] && board["li4"] == board["li7"]) {
    return board["li1"];
  } else if (board["li2"] == board["li5"] && board["li5"] == board["li8"]) {
    return board["li2"];
  } else if (board["li3"] == board["li6"] && board["li6"] == board["li9"]) {
    return board["li3"];
  } else if (board["li1"] == board["li5"] && board["li5"] == board["li9"]) {
    return board["li1"];
  } else if (board["li3"] == board["li5"] && board["li5"] == board["li7"]) {
    return board["li3"];
  } else {
    return false;
  }
}
function checkTie() {
  if (Object.values(board).includes("")) {
    return false;
  } else {
    alert("tie");
    return true;
  }
}

function init() {
  document.querySelectorAll("li").forEach((li) => (li.innerHTML = ""));
  document.getElementById("turn").innerText = "O Turn";
  board = {
    li1: "",
    li2: "",
    li3: "",
    li4: "",
    li5: "",
    li6: "",
    li7: "",
    li8: "",
    li9: "",
  };
  i = 0;
}
