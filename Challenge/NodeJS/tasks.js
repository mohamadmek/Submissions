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
let listOfTasks = ["clean", "sleep"];
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
    help (to see all commands)`
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
  if (task[0] == "add" || task == "") {
    console.log("Error add what to add!");
  } else {
    listOfTasks.push(task[1]);
    console.log("added");
  }
}

// The following line starts the application
startApp("Mohamad Meksasi");
