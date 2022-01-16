import * as Yup from "yup";

export const stepFormSchema = [
  {
    name: Yup.string().label("Name").required(),
    displayName: Yup.string().label("Display name").required(),
  },
  {
    workspace: Yup.string().label("Workspace").required(),
    workspaceUrl: Yup.string(),
  },
  {
    usage: Yup.string()
      .oneOf(["self", "team"])
      .required("Please select one of the options."),
  },
];
