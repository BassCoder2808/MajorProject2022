const vscode = require("vscode");
const GenerateCode = require("../src/GenerateCode");

module.exports = function (context) {
  let disposable = vscode.commands.registerCommand("code-cognition.genCode", () => {
    GenerateCode();
  });
  context.subscriptions.push(disposable);
};
