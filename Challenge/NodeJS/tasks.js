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
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "hello\n") {
    hello();
  } else if (text === "help\n") {
    help();
  } else if (text === "list") {
    list();
  } else if (text === "add") {
    add(text);
  } else {
    unknownCommand(text);
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
function hello() {
  console.log("hello!");
}
/**
 * Show all available commands
 *
 * @returns {void}
 */
function help() {
  console.log(
    `Available commands are:
    hello (to welcome)
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
/* Array of tasks*/
const listOfTasks = [];
function list() {
  for (let i = 0; i < listOfTasks.length(); i++) {
    console.log(`${i + 1}-${listOfTasks[i]}`);
  }
}

/**
 * @param  {string} task the text received
 * add new task
 *
 * @returns {void}
 */
function add(task) {
  if (task == "") {
    console.log(Error);
  } else {
    listOfTasks.push(task);
  }
}

// The following line starts the application
startApp("Mohamad Meksasi");
