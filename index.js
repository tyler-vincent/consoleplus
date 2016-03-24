module.exports = consoleplus;

function consoleplus(msg) {
  window.console && console.log(msg);
};

function consoleminus(msg) {
  window.console && console.log("¯\\_(ツ)_/¯ ");
};