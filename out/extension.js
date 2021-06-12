"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const tools = require("./tools");
const utils_1 = require("./utils");
function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems(document, position) {
            let k;
            let f;
            for (const [k, tool] of Object.entries(tools)) {
                const match = ":" + k;
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (linePrefix.includes(match)) {
                    const cmdStart = linePrefix.indexOf(match);
                    const params = utils_1.getParams(tool.params, linePrefix.substr(linePrefix.indexOf(match)));
                    const item = Object.assign(Object.assign({}, new vscode.CompletionItem(tool.name)), tool.editFn(match, linePrefix, position, cmdStart, params));
                    return [item];
                }
            }
            return undefined;
        }
    }, ":");
    context.subscriptions.push(provider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map