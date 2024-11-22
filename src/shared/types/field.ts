export type FieldType = StringField | NumberField | LinkField;

type WithType<
	Type extends string,
	P extends Record<string | symbol, unknown>
> = {
	type: Type;
} & P;

type StringField = WithType<
	"string",
	{
		value: string;
	}
>;

type NumberField = WithType<
	"number",
	{
		value: number;
	}
>;

type LinkField = WithType<
	"link",
	{
		value: string;
		href: string;
	}
>;
