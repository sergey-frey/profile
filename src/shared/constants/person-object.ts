import type { FieldValueType } from "../types/field";

type PersonObjectFields =
  | "firstName"
  | "lastName"
  | "experienceYears"
  | "github"
  | "telegram"
  | "hh";

export const personObject: Record<PersonObjectFields, FieldValueType> = {
  firstName: {
    type: "string",
    value: "Sergey",
  },
  lastName: {
    type: "string",
    value: "Frey",
  },
  experienceYears: {
    type: "number",
    value: 3,
  },
  github: {
    type: "link",
    value: "sergey-frey",
    href: "https://github.com/sergey-frey",
  },
  telegram: {
    type: "link",
    value: "@sergeyfrey",
    href: "https://t.me/sergeyfrey",
  },
  hh: {
    type: "link",
    value: "Frontend developer",
    href: "https://novgorod.hh.ru/resume/e5159c17ff0bda4ec10039ed1f4e5643505946",
  },
};
