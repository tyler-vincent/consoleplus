module.exports = consoleplus;

function consoleplus (msg) {
  window.console && console.log(msg);
};

function consolamas (msg) {
  consoleplus(msg);
};
