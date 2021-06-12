import * as vscode from "vscode";
import { FluidScoreEditor } from "./types";
import { dsbsdGenerate } from "./generators";
import { halfTimeApply } from "./modifiers";

/**
 * Discounted stochastic binary subdivision.
 * Automatically generates random beat placements, useful for trap hats, etc. A simple variant of Langston's stochastic binary subdivision.
 * 
 * For more info see:
 * Langston, Peter. "Six techniques for algorithmic music composition." Proceedings of the International Computer Music Conference. Vol. 60. 1989
 */
export const dsbsd: FluidScoreEditor = {
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
	editFn: function(match: string, linePrefix: string, position: vscode.Position, cmdStart: number, params: Map<string, any>) {
		const duration = params.get("duration")
		const character = params.get("character")
		const r = (new Array(+duration)).fill(0);
		return {
			additionalTextEdits: [vscode.TextEdit.replace(new vscode.Range(new vscode.Position(position.line, cmdStart), position), "")],
			insertText: "\"" + dsbsdGenerate(1, r).map((x) => (x == 1) ? character : " ").join("") + "\""
		}
	}
}

/**
 * Half time.
 * Processes a score string by adding spaces and hyphens to double the overall duration.
 */
export const halfTime: FluidScoreEditor = {
	match: "halfTime",
	name: "Fluid-HalfTime",
	description: "Slow a score string down by a factor of 2.",
	params: [],
	editFn: function(match: string, linePrefix: string, position: vscode.Position, cmdStart: number, params: Object | undefined) {
		const strMatch = linePrefix.match(/".*?"/);
		const str = (strMatch || [""])[0].replace(/"/g, "");
		return {
			additionalTextEdits: [vscode.TextEdit.replace(new vscode.Range(new vscode.Position(position.line, 0), position), "")],
			insertText: linePrefix.substr(0, linePrefix.indexOf(match)).replace(str, halfTimeApply(str))
		}
	}
}

export default { dsbsd, halfTime }