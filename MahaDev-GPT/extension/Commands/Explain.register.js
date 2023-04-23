const vscode = require("vscode");
const ExplainCode = require("../src/ExplainCode");

module.exports = function (context) {
  let disposable = vscode.commands.registerCommand("code-cognition.analyseCode", () => {
    ExplainCode();
  });
  context.subscriptions.push(disposable);
};
