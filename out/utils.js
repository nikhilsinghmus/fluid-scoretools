"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
function getParams(params, str) {
    var _a, _b, _c;
    let s = (_c = (_b = (_a = str.match(":(.*):")) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split(" ")) === null || _c === void 0 ? void 0 : _c.slice(1);
    if ((!s) || (!params)) {
        return undefined;
    }
    return params.reduce((obj, param, i) => {
        switch (param.type) {
            case "number": obj[param.name] = +s[i];
            case "string": obj[param.name] = s[i];
        }
        return obj;
    }, {});
}
exports.getParams = getParams;
//# sourceMappingURL=utils.js.map