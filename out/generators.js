"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dsbsdGenerate = void 0;
function dsbsdGenerate(density, states, low = 0, high = states.length - 1, min = 2, df = 0.9) {
    let mid = (((high - low) + 1) >> 1) + low;
    states[low] = 1;
    states[mid] = 1;
    if ((Math.random() < density) && ((high - low) >= min)) {
        dsbsdGenerate(density * df, states, low, mid, min);
        dsbsdGenerate(density * df, states, mid, high, min);
    }
    return states;
}
exports.dsbsdGenerate = dsbsdGenerate;
//# sourceMappingURL=generators.js.map