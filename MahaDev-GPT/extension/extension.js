// @ts-nocheck
const vscode = require("vscode");
const RegisterGenerateCode = require("./Commands/Generate.register");
const RegisterExplainCode = require("./Commands/Explain.register.js");
const RegisterDocString = require("./Commands/DocString.register.js");
const OptimiseDocString = require("./Commands/Optimise.register.js");
const RefactorDocString = require("./Commands/Refactor.register.js");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  vscode.window.showInformationMessage("Mahadev GPT activated now.");
  RegisterGenerateCode(context);
  RegisterExplainCode(context);
  RegisterDocString(context);
  OptimiseDocString(context);
  RefactorDocString(context);
}

function deactivate() {
  console.log("Mahadev GPT de-activated.");
}

module.exports = {
  activate,
  deactivate,
};
