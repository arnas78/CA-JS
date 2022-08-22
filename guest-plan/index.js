const answer = document.querySelector(".answer");
const btn_add_end = document.querySelector(".btn-add-end");
const btn_add_start = document.querySelector(".btn-add-start");
const btn_rm_start = document.querySelector(".btn-rm-start");
const btn_rm_end = document.querySelector(".btn-rm-end");
const btn_move_first = document.querySelector(".btn-move-first");
const btn_move_last = document.querySelector(".btn-move-last");
const btn_reverse = document.querySelector(".btn-reverse");
const btn_rm_from_to = document.querySelector(".btn-rm-from-to");
const btn_add_at = document.querySelector(".btn-add-at");
const btn_clear = document.querySelector(".btn-clear");
const input_a = document.querySelector("#input-a");
const input_rm_from = document.querySelector("#input-rm-from");
const input_rm_to = document.querySelector("#input-rm-to");
const input_add_at = document.querySelector("#input-add-at");

let guests = ["First", "Second", "Third"];
outputGuests();

btn_add_end.addEventListener("click", () => {
  arrayAction("push");
});
btn_add_start.addEventListener("click", () => {
  arrayAction("unshift");
});
btn_rm_start.addEventListener("click", () => {
  arrayAction("shift");
});
btn_rm_end.addEventListener("click", () => {
  arrayAction("pop");
});
btn_reverse.addEventListener("click", () => {
  arrayAction("reverse");
});
btn_move_first.addEventListener("click", () => {
  arrayAction("moveFirst");
});
btn_move_last.addEventListener("click", () => {
  arrayAction("moveLast");
});
btn_rm_from_to.addEventListener("click", () => {
  arrayAction("removeFromTo");
});
btn_add_at.addEventListener("click", () => {
  arrayAction("addAt");
});
btn_clear.addEventListener("click", () => {
  input_a.value = null;
  guests = [];
  outputGuests();
});

function arrayAction(action) {
  let newGuest = input_a.value;
  let rmFrom = input_rm_from.value;
  let rmTo = input_rm_to.value;
  let guestsIndexLength = guests.length - 1;
  let addAt = input_add_at.value;

  if (newGuest !== "") {
    if (action === "push") {
      guests.push(newGuest);
    } else if (action === "unshift") {
      guests.unshift(newGuest);
    } else if (action === "shift") {
      guests.shift(newGuest);
    } else if (action === "pop") {
      guests.pop(newGuest);
    } else if (action === "reverse") {
      guests.reverse();
    } else if (action === "addAt") {
      if (addAt !== "" && addAt >= 0 && addAt <= guestsIndexLength) {
        guests.splice(addAt, 0, newGuest);
      } else if (
        addAt > guestsIndexLength ||
        addAt < 0 ||
        addAt === "" ||
        addAt === ""
      ) {
        alert("Wrong index!");
      }
    }
  } else {
    alert("Enter a guest's name!");
  }

  if (action === "moveFirst") {
    guests.push(guests.shift());
  } else if (action === "moveLast") {
    guests.unshift(guests.pop());
  } else if (action === "removeFromTo") {
    if (rmFrom !== "" && rmFrom >= 0 && rmFrom <= guests.length) {
      if (rmTo !== "" && rmTo >= 0 && rmTo <= guests.length) {
        guests.splice(rmFrom, rmTo);
      } else if (
        rmTo > guestsIndexLength ||
        rmTo < 0 ||
        rmTo === "" ||
        rmFrom === ""
      ) {
        alert("Wrong range!");
      } else {
        guests.splice(rmFrom, 1);
      }
    } else {
      alert("Enter a range!");
    }
  }

  outputGuests();
}

function outputGuests() {
  let guestOutput = "";
  for (let i = 0; i < guests.length; i++) {
    guestOutput += guests[i] + " ";
  }
  if (guests.length === 0) {
    answer.textContent = "Array is empty!";
  } else {
    answer.textContent = guestOutput;
  }
}
