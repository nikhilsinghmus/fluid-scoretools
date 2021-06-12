import { FluidParam } from "./types";

/**
 * @param  {Array<FluidParam>|undefined} params		Array of parameters for the editor
 * @param  {string} str								Entered string containing the parameter values
 * @returns {Map<string, any>}						Map with parameter values
 */
export function getParams(params: Array<FluidParam>, str: string): Map<string, any> {
	const s = str.match(":(.*):")?.[1]?.split(" ")?.slice(1);
	const paramMap = new Map<string, any>();
	if ((!s) || (!params)) {
		return paramMap;
	}

	return params.reduce((obj, param, i) => {
		switch(param.type) {
			case "number": obj.set(param.name, +s![i]);
			case "string": obj.set(param.name, s![i]);
		}

		return obj;
	}, paramMap);
}