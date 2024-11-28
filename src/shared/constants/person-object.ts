import type { FieldType } from "../types/field";

type PersonObjectFields = "firstName" | "lastName" | "experienceYears" | "github" | "telegram";

export const personObject: Record<PersonObjectFields, FieldType> = {
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
  };