var last_task_completed_time = null;

function expensive_task() {
  var task_duration = 50; // in milliseconds

  var start = new Date();
  var current = null;
  do {
    current = new Date();
  } while (current - start < task_duration);

  if (last_task_completed_time !== null) {
    var list = document.getElementById("list");
    var list_item = document.createElement("li");
    list_item.appendChild(
      document.createTextNode(
        "Interval between tasks is " + (current - last_task_completed_time)));
    list.appendChild(list_item);
  }

  last_task_completed_time = current;
}

window.setInterval(expensive_task, 500)
