export type FieldValueType =
  | StringFieldValue
  | NumberFieldValue
  | LinkFieldValue
  | ArrayFieldValue;

type WithType<
  Type extends string,
  P extends Record<string | symbol, unknown>,
> = {
  type: Type;
} & P;

type StringFieldValue = WithType<
  "string",
  {
    value: string;
  }
>;

type NumberFieldValue = WithType<
  "number",
  {
    value: number;
  }
>;

type LinkFieldValue = WithType<
  "link",
  {
    value: string;
    href: string;
  }
>;

export type ArrayFieldValue = WithType<
  "array",
  {
    value: FieldValueType[];
  }
>;
