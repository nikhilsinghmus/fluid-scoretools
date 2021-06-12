"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const editors_1 = require("./editors");
const utils_1 = require("./utils");
function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems(document, position) {
            for (const [k, editor] of Object.entries(editors_1.default)) {
                const match = ":" + k;
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (linePrefix.includes(match)) {
                    const cmdStart = linePrefix.indexOf(match);
                    const params = utils_1.getParams(editor.params, linePrefix.substr(linePrefix.indexOf(match)));
                    const item = Object.assign(Object.assign(Object.assign({}, new vscode.CompletionItem(editor.name)), editor.editFn(match, linePrefix, position, cmdStart, params)), { detail: editor.description });
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