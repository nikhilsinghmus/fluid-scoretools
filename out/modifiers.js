"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halfTimeApply = void 0;
function halfTimeApply(str) {
    const s = str.match(/.{1}/g);
    var out = "";
    s === null || s === void 0 ? void 0 : s.forEach((c) => {
        out += c;
        if (c == " ") {
            out += " ";
        }
        else {
            out += "-";
        }
    });
    return out;
}
exports.halfTimeApply = halfTimeApply;
//# sourceMappingURL=modifiers.js.map