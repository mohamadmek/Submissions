const fs = require("fs");
/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}
/* Array of tasks*/
let listOfTasks = ["[✓]clean", "[ ]sleep", "[ ]getmilk"];
fs.readFile("./database.json", function(err, data) {
  if (err) throw err;
  let response = JSON.parse(data);
});
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  // text = text.replace(/\n/gi, "")
  text = text.trim();
  let textArray = text.split(" ");
  let word = textArray[0];
  if (word === "quit\n" || word === "exit\n") {
    quit();
  } else if (word === "hello") {
    hello(textArray);
  } else if (word === "help") {
    help();
  } else if (word === "list") {
    list();
  } else if (word === "add") {
    add(textArray);
  } else if (word === "remove") {
    remove(textArray);
  } else if (word === "edit") {
    edit(textArray);
  } else if (word === "check") {
    check(textArray);
  } else if (word === "uncheck") {
    unCheck(textArray);
  } else {
    unknownCommand(word);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  if (text.length == 1) {
    console.log(text[0] + "!");
  } else {
    const txt = text[1] + "!";
    console.log("hello", txt);
  }
}

// function onDataReceived() {
//   console.log("hello!");
// }

/**
 * Show all available commands
 *
 * @returns {void}
 */
function help() {
  console.log(
    `Available commands are:
    hello or hello yourName (to welcome)
    quit or exit (to exit application)
    help (to see all commands)
    list (to see tasks)
    add anything (to add tasks)
    remove (without anything remove last task with a number remove based on number)
    edit (without anything to edit last task with number to specify wich task)
    check (check with a number to make the taks done)
    uncheck (uncheck with a number to uncheck the task)`
  );
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
/**
 * list all tasks
 *
 * @returns {void}
 */

function list() {
  listOfTasks.forEach((task, index) => console.log(index + 1 + "-" + task));
}

/**
 * @param  {string} task the text received
 * add new task
 *
 * @returns {void}
 */
function add(task) {
  if (task[0] == "add" && task[1] == "") {
    console.log("Error add what to add!");
  } else {
    listOfTasks.push("[ ]" + task[1]);
    console.log("added");
  }
}

/**
 * @param  {Array} task the text received
 * remove a task
 *
 * @returns {void}
 */
function remove(task) {
  if (task[1] == 1 && listOfTasks.length == 1) {
    listOfTasks.pop();
    console.log("removed");
  } else {
    if (task.length == 1) {
      listOfTasks.pop();
      console.log("removed last task");
    } else {
      if (
        task[1] - 1 < listOfTasks.length ||
        task[1] - 1 > listOfTasks.length
      ) {
        listOfTasks.splice(task[1] - 1, 1);
        console.log("removed  " + task[1]);
      } else {
        console.log("number does not exist");
      }
    }
  }
}

/**
 * @param  {Array} task the text received
 * remove a task
 *
 * @returns {void}
 */
function edit(task) {
  if (task.length == 1) {
    console.log("enter something to replace");
  } else {
    console.log(task.length);
    if (task.length == 2) {
      listOfTasks[task.length - 1] = "[ ]" + task[1];
      console.log("edit complete");
    } else if (task.length == 3) {
      if (
        task[1] - 1 > listOfTasks.length ||
        task[1] < listOfTasks.length - 1
      ) {
        console.log("task not found");
      } else {
        listOfTasks[task[1] - 1] = "[ ]" + task[2];
      }
    }
  }
}

/**
 * @param  {Array} task the text received
 * remove a task
 *
 * @returns {void}
 */
function check(task) {
  if (task.length == 1) {
    console.log("enter wich task you want");
  } else {
    if (task[1] - 1 < listOfTasks.length || task[1] - 1 > listOfTasks.length) {
      listOfTasks[task[1] - 1] = listOfTasks[task[1] - 1].replace("[ ]", "[✓]");
    } else {
      console.log("task does not exist");
    }
  }
}

function unCheck(task) {
  if (task.length == 1) {
    console.log("enter wich task you want");
  } else {
    if (task[1] - 1 < listOfTasks.length || task[1] - 1 > listOfTasks.length) {
      listOfTasks[task[1] - 1] = listOfTasks[task[1] - 1].replace("[✓]", "[ ]");
    } else {
      console.log("task does not exist");
    }
  }
}

// The following line starts the application
startApp("Mohamad Meksasi");
