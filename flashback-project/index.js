const answer = document.querySelector(".answer");
const btn_triangle = document.querySelector(".btn-triangle");
const btn_pyramid = document.querySelector(".btn-pyramid");
const btn_r_pyramid = document.querySelector(".btn-r-pyramid");
const btn_rhombus = document.querySelector(".btn-rhombus");
const btn_e_rhombus = document.querySelector(".btn-e-rhombus");
const btn_clear = document.querySelector(".btn-clear");

function generateTriangle(rowNumber) {
  var output = "";
  for (var i = 1; i <= rowNumber; i++) {
    // Generates stars
    for (var j = 1; j <= i; j++) {
      output += "*&nbsp";
    }
    // Creates a new line, since \n does not work
    output += " <br />";
  }
  return output;
}

function generatePyramid(rowNumber) {
  var output = "";
  for (var i = 1; i <= rowNumber; i++) {
    // Generates a number of empty spaces depending on row number
    for (var k = 1; k <= rowNumber - i; k++) {
      output += "&nbsp";
    }
    // Generates stars
    for (var j = 1; j <= i; j++) {
      output += "*&nbsp";
    }
    // Creates a new line, since \n does not work
    output += " <br />";
  }
  return output;
}

function generateReversePyramid(rowNumber) {
  var output = "";
  for (var i = rowNumber; i >= 0; i--) {
    // Generates a number of empty spaces depending on row number
    for (var k = 1; k <= rowNumber - i; k++) {
      output += "&nbsp";
    }
    // Generates stars
    for (var j = 1; j <= i; j++) {
      output += "*&nbsp";
    }
    // Creates a new line, since \n does not work
    output += " <br />";
  }
  return output;
}

function generateRhombus(rowNumber) {
  var output = "";
  for (var i = 1; i <= rowNumber; i++) {
    // Checks for the middle of a rhombus
    if (i <= (rowNumber + 1) / 2) {
      for (var k = 1; k <= rowNumber - i; k++) {
        output += "&nbsp";
      }
      // Generates stars
      for (var j = 1; j <= i; j++) {
        output += "*&nbsp";
      }
      // Creates a new line, since \n does not work
      output += " <br />";
    } else {
      for (var k = 1; k < i; k++) {
        output += "&nbsp";
      }
      // Generates stars
      for (var j = i; j <= rowNumber; j++) {
        output += "*&nbsp";
      }
      // Creates a new line, since \n does not work
      output += " <br />";
    }
  }
  return output;
}

function generateEmptyRhombus(rowNumber) {
  var output = "";
  for (var i = 1; i <= rowNumber; i++) {
    // Generates a number of empty spaces depending on row number
    if (i <= rowNumber / 2) {
      for (var k = 1; k <= rowNumber - i; k++) {
        output += "&nbsp";
      }
      // Generates stars
      for (var j = 1; j <= i; j++) {
        if (j == 1 || j == i) {
          output += "*&nbsp";
        } else {
          output += "&nbsp&nbsp";
        }
      }
      output += " <br />";
    } else {
      for (var k = 1; k < i; k++) {
        output += "&nbsp";
      }
      // Generates stars
      for (var j = i; j <= rowNumber; j++) {
        // Checks whether index is the first or last
        if (j == i || j == rowNumber) {
          output += "*&nbsp";
        } else {
          output += "&nbsp&nbsp";
        }
      }
      // Creates a new line, since \n does not work
      output += " <br />";
    }
  }
  return output;
}

btn_triangle.addEventListener("click", () => {
  answer.innerHTML = generateTriangle(6);
});

btn_pyramid.addEventListener("click", () => {
  answer.innerHTML = generatePyramid(6);
});

btn_r_pyramid.addEventListener("click", () => {
  answer.innerHTML = generateReversePyramid(6);
});

btn_rhombus.addEventListener("click", () => {
  answer.innerHTML = generateRhombus(7);
});

btn_e_rhombus.addEventListener("click", () => {
  answer.innerHTML = generateEmptyRhombus(7);
});

btn_clear.addEventListener("click", () => {
  answer.innerHTML = "";
});
