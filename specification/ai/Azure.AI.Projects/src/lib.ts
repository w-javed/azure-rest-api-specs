import { createTypeSpecLibrary } from "@typespec/compiler";

export const $lib = createTypeSpecLibrary({
  name: "Azure.AI.Projects",
  diagnostics: {},
});

export const { reportDiagnostic, createDiagnostic } = $lib;
