import type { FieldType } from "../types/field";

type SkillsObjectFields = "frontend" | "devops";

export const skillsObject: Record<SkillsObjectFields, FieldType> = {
    frontend: {
      type: "array",
      value: [
        {
          type: "string",
          value: "React",
        },
        {
          type: "string",
          value: "Next v13+",
        },
        {
          type: "string",
          value: "TypeScript",
        },
        {
          type: "string",
          value: "Redux Toolkit",
        },
        {
          type: "string",
          value: "Tailwind",
        },
        {
          type: "string",
          value: "Scss",
        },
        {
          type: "string",
          value: "Vite",
        },
      ],
    },
    devops: {
      type: "array",
      value: [
        {
          type: "string",
          value: "Docker",
        },
        {
          type: "string",
          value: "Github Actions",
        },
      ],
    }
  };