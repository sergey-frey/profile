export const keys = <T extends Record<string | symbol, unknown>>(obj: T) =>
	Object.keys(obj) as Array<keyof T>;
