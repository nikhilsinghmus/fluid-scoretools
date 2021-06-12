"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halfTime = exports.dsbsd = void 0;
const vscode = require("vscode");
const generators_1 = require("./generators");
const modifiers_1 = require("./modifiers");
exports.dsbsd = {
    match: "dsbsd",
    name: "Fluid-dSBSD",
    description: "Discounted stochastic binary subdivision.",
    params: [
        {
            name: "duration",
            type: "number"
        },
        {
            name: "character",
            type: "string"
        }
    ],
    editFn: function (match, linePrefix, position, cmdStart, params) {
        let dsbsdParams = params;
        const r = (new Array(+dsbsdParams.duration)).fill(0);
        return {
            additionalTextEdits: [vscode.TextEdit.replace(new vscode.Range(new vscode.Position(position.line, cmdStart), position), "")],
            insertText: "\"" + generators_1.dsbsdGenerate(1, r).map((x) => (x == 1) ? dsbsdParams.character : " ").join("") + "\""
        };
    }
};
exports.halfTime = {
    match: "halfTime",
    name: "Fluid-HalfTime",
    description: "Slow a score string down by a factor of 2.",
    params: undefined,
    editFn: function (match, linePrefix, position, cmdStart, params) {
        const strMatch = linePrefix.match(/".*?"/);
        const str = (strMatch || [""])[0].replace(/"/g, "");
        return {
            additionalTextEdits: [vscode.TextEdit.replace(new vscode.Range(new vscode.Position(position.line, 0), position), "")],
            insertText: linePrefix.substr(0, linePrefix.indexOf(match)).replace(str, modifiers_1.halfTimeApply(str))
        };
    }
};
//# sourceMappingURL=tools.js.map