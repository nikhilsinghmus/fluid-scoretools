/**
 * @param  {string} str The string to convert to half-time.
 * @returns {string} Output string.
 */
export function halfTimeApply(str: string): string {
    const s = str.match(/.{1}/g);
    var out = "";
    s?.forEach((c) => {
        out += c;
        if (c == " ") {
            out += " ";
        } else {
            out += "-";
        }
    })
    return out;
}