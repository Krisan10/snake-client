const stdin = process.stdin;

const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit()
  }

  if (data === '\u0068') {
    console.log("hiss")
  }
};

stdin.on("data", handleUserInput)

module.exports = {
  setupInput,
  handleUserInput
}