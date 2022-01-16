import * as Yup from "yup";

export const stepFormSchema = [
  {
    name: Yup.string().required(),
    displayName: Yup.string().required(),
  },
  {
    workspace: Yup.string().required(),
    workspaceUrl: Yup.string(),
  },
  {
    usage: Yup.string().oneOf(["self", "team"]).required(),
  },
];
