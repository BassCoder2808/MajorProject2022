const vscode = require("vscode");
const CustomExecute = require("../src/DocString");

module.exports = function (context) {
  let disposable = vscode.commands.registerCommand("code-cognition.optimise", () => {
    CustomExecute('Optimise');
  });
  context.subscriptions.push(disposable);
};
