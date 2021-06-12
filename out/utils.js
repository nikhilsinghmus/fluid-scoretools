"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
/**
 * @param  {Array<FluidParam>|undefined} params		Array of parameters for the editor
 * @param  {string} str								Entered string containing the parameter values
 * @returns {Map<string, any>}						Map with parameter values
 */
function getParams(params, str) {
    var _a, _b, _c;
    const s = (_c = (_b = (_a = str.match(":(.*):")) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split(" ")) === null || _c === void 0 ? void 0 : _c.slice(1);
    const paramMap = new Map();
    if ((!s) || (!params)) {
        return paramMap;
    }
    return params.reduce((obj, param, i) => {
        switch (param.type) {
            case "number": obj.set(param.name, +s[i]);
            case "string": obj.set(param.name, s[i]);
        }
        return obj;
    }, paramMap);
}
exports.getParams = getParams;
//# sourceMappingURL=utils.js.map