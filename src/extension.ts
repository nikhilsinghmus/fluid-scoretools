import * as vscode from "vscode";
import editors from "./editors";
import { getParams } from "./utils";
import { FluidScoreEditor } from "./types";


export function activate(context: vscode.ExtensionContext) {

	const provider = vscode.languages.registerCompletionItemProvider(
		"javascript",
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				for (const [k, editor] of Object.entries(editors as { [key: string]: FluidScoreEditor })) {
					const match = ":" + k;
					const linePrefix = document.lineAt(position).text.substr(0, position.character);
					if (linePrefix.includes(match)) {
						const cmdStart = linePrefix.indexOf(match);
						const params = getParams(editor.params, linePrefix.substr(linePrefix.indexOf(match)))
						const item = {...new vscode.CompletionItem(editor.name), ...editor.editFn(match, linePrefix, position, cmdStart, params), detail: editor.description}
						return [item];
					}
				}

				return undefined;
			}
		},
		":"
	);

	context.subscriptions.push(provider);
}