// Pseudocode
// id currentday exists - just has the date
// div class container already made for the time blocks
// Append rows to the container div
// Left side, has hour
// Depending on time, gray green or red.
// text can be input into the hours
// save button to save the text to local storage in the hour bar
$("<document>");
hoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var date = new Date($.now());
var hour = date.getHours();
var day = date.getDay()
var month = date.getMonth()
var year=date.getFullYear()
var toDoArr;
console.log(date);
console.log(hour);
// dateArr = today.split(" ")
// console.log(dateArr)
$("#currentDay").append(month + "/" + day + "/" + year)
if (JSON.parse(localStorage.getItem("toDo")) == null) {
  toDoArr = Array(9);
  localStorage.setItem("toDo", JSON.stringify(toDoArr));
} else {
  toDoArr = JSON.parse(localStorage.getItem("toDo"));
}
console.log(toDoArr);
function popRows() {
    $("#timeBlockContainer").html("")
  for (i = 0; i < 9; i++) {
    var newRow = $("<div>").attr("class", "row").attr("data-timeInd", (i+9));
    var timeCol = $("<div>")
      .attr("class", "hour col-sm-2")
      .text(hoursArr[i]);
    var mainCol = $("<input>")
      .attr("class", "col-sm-8")
      .attr("id", "mainColumn" + i);
    if (newRow.attr("data-timeInd") < hour) {
      mainCol.attr("class", "past col-sm-8");
    } else if (newRow.attr("data-timeInd") == hour) {
      mainCol.attr("class", "present col-sm-8");
    } else {
      mainCol.attr("class", "future col-sm-8");
    }
    var textFill = JSON.parse(localStorage.getItem("toDo"));
    mainCol.val(textFill[i]);
    var lastCol = $("<div>").attr("class", "saveBtn col-sm-2");
    var saveBtn = $("<button>")
      .attr("class", "btn btn-default")
      .attr("id", "save")
      .attr("data-index", i)
      .append(
        "<img src = 'http://icons.iconarchive.com/icons/icons8/windows-8/24/Programming-Save-icon.png'>"
      );
    lastCol.append(saveBtn);
    newRow.append(timeCol).append(mainCol).append(lastCol);
    $("#timeBlockContainer").append(newRow);
  }
}

$(document).on("click", "#save", function () {
  var index = $(this).attr("data-index");
  console.log(index)
  var text = $("#mainColumn"+index).val();
  console.log($("#mainColumn"+index).val())
  toDoArr[index] = text;
  console.log(toDoArr[index])

  localStorage.setItem("toDo", JSON.stringify(toDoArr));
//   popRows()
});

popRows();
