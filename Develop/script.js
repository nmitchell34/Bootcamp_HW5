// Pseudocode
// id currentday exists - just has the date
// div class container already made for the time blocks
// Append rows to the container div
// Left side, has hour
// Depending on time, gray green or red.
// text can be input into the hours
// save button to save the text to local storage in the hour bar
hoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var date = new Date($.now());
var hour = date.getHours();
var toDoArr;
console.log(date);
console.log(hour);
// dateArr = today.split(" ")
// console.log(dateArr)
if (JSON.parse(localStorage.getItem("toDo")) == null) {
  toDoArr = Array(9);
  localStorage.setItem("toDo", JSON.stringify(toDoArr));
} else {
  toDoArr = JSON.parse(localStorage.getItem("toDo"));
}
console.log(toDoArr);
function popRows() {
  for (i = 9; i < 18; i++) {
    var newRow = $("<div>").attr("class", "row").attr("data-timeInd", i);
    var timeCol = $("<div>")
      .attr("class", "hour col-sm-2")
      .text(hoursArr[i - 9]);
    var mainCol = $("<input>").attr("class", "col-sm-8");
    if (newRow.attr("data-timeInd") < hour) {
      mainCol.attr("class", "past col-sm-8");
    } else if (newRow.attr("data-timeInd") == hour) {
      mainCol.attr("class", "present col-sm-8");
    } else {
      mainCol.attr("class", "future col-sm-8");
    }
    var lastCol = $("<div>").attr("class", "saveBtn col-sm-2");
    var saveBtn = $("<button>")
      .attr("class", "btn btn-default")
      .append("<span class = 'glyphicon glyphicon-floppy-save'></span>");
      lastCol.append(saveBtn)
    newRow.append(timeCol).append(mainCol).append(lastCol);
    $("#timeBlockContainer").append(newRow);
  }
}

$(".btn").on("click", function(){
  $(this).parents("div")
  console.log($(this).parents("div"))
})

popRows();
