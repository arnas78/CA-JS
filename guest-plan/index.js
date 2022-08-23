const answer = document.querySelector(".answer");
const input_a = document.querySelector("#input-a");
const input_rm_from = document.querySelector("#input-rm-from");
const input_rm_to = document.querySelector("#input-rm-to");
const input_add_at = document.querySelector("#input-add-at");
const button_container = document.querySelector(".button-container");

let guests = ["First", "Second", "Third"];
outputGuests();

button_container.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    arrayAction(event.target.id);
  }
});

function arrayAction(action) {
  let newGuest = input_a.value;
  let rmFrom = input_rm_from.value;
  let rmTo = input_rm_to.value;
  let addAt = input_add_at.value;

  if (action === "add-end" || action === "add-start" || action === "add-at") {
    if (newGuest === "") {
      alert("Enter a guest's name!");
    } else {
      if (action === "add-end") {
        guests.push(newGuest);
      } else if (action === "add-start") {
        guests.unshift(newGuest);
      } else if (action === "add-at") {
        if (addAt !== "" && addAt >= 0) {
          guests.splice(addAt, 0, newGuest);
        } else if (
          addAt < 0 ||
          addAt === "" ||
          addAt === "" ||
          !Number.isInteger(addAt)
        ) {
          alert("Wrong index!");
        }
      }
    }
  }

  if (guests.length > 0) {
    if (action === "rm-start") {
      guests.shift(newGuest);
    } else if (action === "rm-end") {
      guests.pop(newGuest);
    } else if (action === "mv-start") {
      guests.push(guests.shift());
    } else if (action === "mv-end") {
      guests.unshift(guests.pop());
    } else if (action === "reverse") {
      guests.reverse();
    } else if (action === "rm-range") {
      if (rmFrom !== "" && rmFrom >= 0 && rmFrom <= guests.length) {
        if (rmTo !== "" && rmTo >= 0 && rmTo <= guests.length) {
          guests.splice(rmFrom, rmTo - rmFrom);
        } else if (rmFrom > guests.length - 1 || rmFrom < 0 || rmFrom === "") {
          alert("Wrong range!");
        } else {
          guests.splice(rmFrom, 1);
        }
      } else {
        alert("Enter a range!");
      }
    }
    outputGuests();
  } else if (
    guests.length === 0 &&
    answer.childElementCount === 0 &&
    action !== "add-end" &&
    action !== "add-start" &&
    action !== "add-at" &&
    action !== "clear"
  ) {
    alert("Guest list is empty!");
  }

  if (action === "clear") {
    guests = [];
    answer.innerHTML = "";
    input_rm_from.value = null;
    input_rm_to.value = null;
    input_add_at.value = null;
    input_a.value = null;
    outputGuests();
  }
}

function outputGuests() {
  answer.innerHTML = "";
  for (let i = 0; i < guests.length; i++) {
    const p = document.createElement("p");
    p.innerText = guests[i] + " ";
    p.className = "inline";
    answer.appendChild(p);
  }
  if (answer.childElementCount === 0) {
    answer.textContent = "Guest list is empty!";
  }
}
