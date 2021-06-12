/**
 * @param  {number} density                 Initial density (typically 1.0)
 * @param  {Array<number>} states           Array of zeros of desired length
 * @param  {number=0} low                   Minimum index to start
 * @param  {number=states.length-1} high    Maximum index to start
 * @param  {number=2} min                   Minimum subdivision
 * @param  {number=0.9} df                  Discount factor (between 0 and 1)
 * @returns {Array<number>}                 Output state array(zeros and ones)
 */
export function dsbsdGenerate(density: number, states: Array<number>, low: number = 0, high: number = states.length - 1, min: number = 2, df: number= 0.9) : Array<number> {
    let mid = (((high - low) + 1) >> 1) + low;
    
    states[low] = 1;
    states[mid] = 1;
    
    if ((Math.random() < density) && ((high - low) >= min)) {
        dsbsdGenerate(density * df, states, low, mid, min);
        dsbsdGenerate(density * df, states, mid, high, min);
    }

	return states;
}