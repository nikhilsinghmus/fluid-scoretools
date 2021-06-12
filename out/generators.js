"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dsbsdGenerate = void 0;
/**
 * @param  {number} density                 Initial density (typically 1.0)
 * @param  {Array<number>} states           Array of zeros of desired length
 * @param  {number=0} low                   Minimum index to start
 * @param  {number=states.length-1} high    Maximum index to start
 * @param  {number=2} min                   Minimum subdivision
 * @param  {number=0.9} df                  Discount factor (between 0 and 1)
 * @returns {Array<number>}                 Output state array(zeros and ones)
 */
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