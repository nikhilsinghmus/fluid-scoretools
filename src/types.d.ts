import * as vscode from "vscode";

/**
 * Parameter for an editor.
 */
export type FluidParam = { name: string, type: string }

/**
 * Properties for an editor.
 */
export type FluidScoreEditProps = { additionalTextEdits: any, insertText: string }

/**
 * Edit function for editor.
 * 
 * @param  {string} match               The matched command string
 * @param  {string} linePrefix          The line of source code upto that point
 * @param  {vscode.Position} position   The position
 * @param  {number} cmdStart            Starting index of command in line
 * @param  {Map<string} params          Editor parameters
 * @returns {FluidScoreEditorProps}     Properties for editor completion
 */
export type FluidScoreEditFunction = (match: string, linePrefix: string, position: vscode.Position, cmdStart: number, params: Map<string, any>) => FluidScoreEditProps

/**
 * Score editor.
 */
export type FluidScoreEditor = { match: string, name: string, description: string, params: Array<FluidParam>, editFn: FluidScoreEditFunction}